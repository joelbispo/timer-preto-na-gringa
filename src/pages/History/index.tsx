import { formatDistanceToNow } from 'date-fns'
import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CycleContext'
import {
  HistoryContainer,
  HistoryListContainer,
  StatusContainer,
} from './styles'

export function History() {
  const { cycles } = useContext(CyclesContext)
  return (
    <HistoryContainer>
      <h1>History</h1>
      <HistoryListContainer>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.duration}</td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.start), {
                      addSuffix: true,
                    })}
                  </td>
                  <td>
                    {cycle.finishedAt && (
                      <StatusContainer statusColor="green">
                        Done
                      </StatusContainer>
                    )}
                    {cycle.interrupedAt && (
                      <StatusContainer statusColor="red">
                        Interrupted
                      </StatusContainer>
                    )}
                    {!cycle.interrupedAt && !cycle.finishedAt && (
                      <StatusContainer statusColor="yellow">
                        In progress
                      </StatusContainer>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryListContainer>
    </HistoryContainer>
  )
}
