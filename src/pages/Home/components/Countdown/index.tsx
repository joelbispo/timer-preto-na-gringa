import { differenceInSeconds } from 'date-fns'
import { useContext, useEffect } from 'react'
import { CyclesContext } from '../../../../contexts/CycleContext'
import { CountDownContainer, SeperatorContainer } from './styles'

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    setCycleAsFinished,
    durationInSeconds,
    setSeconds,
  } = useContext(CyclesContext)
  const totalSeconds = activeCycle ? activeCycle.duration * 60 : 0

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDiff = differenceInSeconds(
          new Date(),
          new Date(activeCycle.start),
        )

        if (secondsDiff >= totalSeconds) {
          setSeconds(totalSeconds)
          clearInterval(interval)
        } else {
          setSeconds(secondsDiff)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, activeCycleId, setCycleAsFinished, setSeconds])

  const currentSeconds = totalSeconds ? totalSeconds - durationInSeconds : 0

  const durationInMinutes = Math.floor(currentSeconds / 60)
  const durationInSecondsLeft = currentSeconds % 60

  const minutes = String(durationInMinutes).padStart(2, '0')
  const seconds = String(durationInSecondsLeft).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds} - Preto na Gringa Pomodoro`
    } else {
      document.title = `${minutes}:${seconds} - Preto na Gringa Pomodoro`
    }
  }, [minutes, seconds, activeCycle])

  return (
    <CountDownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <SeperatorContainer>:</SeperatorContainer>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountDownContainer>
  )
}
