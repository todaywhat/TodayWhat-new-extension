import React from 'react'

interface DateProps {
  currentDate: Date
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>
}

const DateButton: React.FC<DateProps> = ({ currentDate, setCurrentDate }) => {
  const handleDate = (date: number) => {
    if (date === 0) {
      setCurrentDate(new Date())
    } else {
      const newDate = new Date(currentDate)
      newDate.setDate(newDate.getDate() + date)
      setCurrentDate(newDate)
    }
  }

  return (
    <>
      <button onClick={() => handleDate(-1)}>전날</button>
      <button onClick={() => handleDate(0)}>현재</button>
      <button onClick={() => handleDate(+1)}>다음날</button>
    </>
  )
}

export default DateButton
