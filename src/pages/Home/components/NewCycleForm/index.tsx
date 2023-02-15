import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CycleContext'

import {
  DurationInputContainer,
  FormContainer,
  TaskInputContainer,
} from './styles'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="name">I will work on</label>
      <TaskInputContainer
        id="task"
        placeholder="task that I am working on"
        list="task-suggestion"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestion">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Projeto 4" />
        <option value="Projeto 5" />
      </datalist>

      <label htmlFor="Duration">for </label>
      <DurationInputContainer
        placeholder="00"
        type="number"
        id="duration"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('duration', { valueAsNumber: true })}
      />

      <span>minutes.</span>
    </FormContainer>
  )
}
