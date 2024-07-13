import React, { useState } from 'react'
import TimeButton from '../../stories/atoms/TimeButton'
import * as S from './style'

interface DateProps {
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>
}

const DateButton: React.FC<DateProps> = ({ setCurrentDate }) => {
  const [selectedButton, setSelectedButton] = useState(0)

  const handleDateButtonClick = (days: number) => {
    if (selectedButton === days) {
      return
    }

    const today = new Date()
    today.setDate(today.getDate() + days)
    setCurrentDate(today)
    setSelectedButton(days)
  }

  const renderTimeButton = (text: string, days: number) => {
    return (
      <TimeButton
        text={text}
        onClick={() => handleDateButtonClick(days)}
        selected={selectedButton === days}
      />
    )
  }

  return (
    <S.Wrapper>
      {renderTimeButton('어제', -1)}
      {renderTimeButton('오늘', 0)}
      {renderTimeButton('내일', 1)}
    </S.Wrapper>
  )
}

export default DateButton
