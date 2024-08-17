import TimeButton from '@stories/atoms/TimeButton'
import { useEffect } from 'react'
import * as S from './style'

interface MealProps {
  mealNumber: number
  setMealNumber: (num: number) => void
}

const MealButton: React.FC<MealProps> = ({ mealNumber, setMealNumber }) => {
  const handleDate = (time: number) => {
    setMealNumber(time)
  }

  useEffect(() => {
    const currentDate = new Date()
    const currentHour = currentDate.getHours()

    if (currentHour >= 0 && currentHour < 8) {
      setMealNumber(0)
    } else if (currentHour >= 8 && currentHour < 13) {
      setMealNumber(1)
    } else if (currentHour >= 13 && currentHour < 20) {
      setMealNumber(2)
    }
  }, [setMealNumber])

  const renderTimeButton = (text: string, time: number) => {
    return (
      <TimeButton
        text={text}
        onClick={() => handleDate(time)}
        selected={mealNumber === time}
      />
    )
  }

  return (
    <S.Wrapper>
      {renderTimeButton('아침', 0)}
      {renderTimeButton('점심', 1)}
      {renderTimeButton('저녁', 2)}
    </S.Wrapper>
  )
}

export default MealButton
