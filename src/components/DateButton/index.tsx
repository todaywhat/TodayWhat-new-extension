import React, { useEffect, useState } from 'react'
import { useGetAllSetting } from '../../hook/profile/useGetSetting'
import TimeButton from '../../stories/atoms/TimeButton'
import * as S from './style'

interface DateProps {
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>
}

const DateButton: React.FC<DateProps> = ({ setCurrentDate }) => {
  const [selectedButton, setSelectedButton] = useState(0)
  const [weekendSkip, setWeekendSkip] = useState(false)

  useGetAllSetting(undefined, setWeekendSkip)

  useEffect(() => {
    let today = new Date()
    if (weekendSkip) {
      today = adjustDate(today)
    }
    setCurrentDate(today)
  }, [weekendSkip, setCurrentDate])

  const adjustDate = (date: Date) => {
    const day = date.getDay()
    if (day === 0) {
      date.setDate(date.getDate() + 1)
    } else if (day === 6) {
      date.setDate(date.getDate() + 2)
    }
    return date
  }

  const handleDateButtonClick = (days: number) => {
    if (selectedButton === days) {
      return
    }

    let today = new Date()
    today.setDate(today.getDate() + days)
    if (weekendSkip) {
      if (days === 0) {
        today = adjustDate(today)
      } else if (days === 1 && today.getDay() === 6) {
        today.setDate(today.getDate() + 2)
      } else if (days === -1 && today.getDay() === 0) {
        today.setDate(today.getDate() - 2)
      }
    }

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
