import TimeButton from '@stories/atoms/TimeButton'
import React, { useState } from 'react'
import * as S from './style'

interface MealProps {
  setMealNumber: (num: number) => void
}

const MealButton: React.FC<MealProps> = ({ setMealNumber }) => {
  const [selectedButton, setSelectedButton] = useState(1)
  const handleDate = (time: number) => {
    setMealNumber(time)
    setSelectedButton(time)
  }

  const renderTimeButton = (text: string, time: number) => {
    return (
      <TimeButton
        text={text}
        onClick={() => handleDate(time)}
        selected={selectedButton === time}
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
