import TimeButton from '@stories/atoms/TimeButton'
import { useEffect } from 'react'
import * as S from './style'

interface MealProps {
  mealNumber: string
  setMealNumber: (num: string) => void
}

const MealButton: React.FC<MealProps> = ({ mealNumber, setMealNumber }) => {
  const handleDate = (time: string) => {
    setMealNumber(time)
  }

  useEffect(() => {
    const currentDate = new Date()
    const currentHour = currentDate.getHours()

    if (currentHour >= 0 && currentHour < 8) {
      setMealNumber('1')
    } else if (currentHour >= 8 && currentHour < 13) {
      setMealNumber('2')
    } else if (currentHour >= 13 && currentHour < 20) {
      setMealNumber('3')
    }
  }, [setMealNumber])

  const renderTimeButton = (text: string, time: string) => {
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
      {renderTimeButton('아침', '1')}
      {renderTimeButton('점심', '2')}
      {renderTimeButton('저녁', '3')}
    </S.Wrapper>
  )
}

export default MealButton
