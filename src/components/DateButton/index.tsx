import React from 'react'

interface DateProps {
  currentDate: Date
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>
}

const DateButton: React.FC<DateProps> = ({ currentDate, setCurrentDate }) => {
  const handleDate = (date: string) => {
    let newDate
    switch (date) {
      case 'yesterday':
        newDate = new Date(currentDate)
        newDate.setDate(newDate.getDate() - 1)
        setCurrentDate(newDate)
        break
      case 'today':
        setCurrentDate(new Date())
        break
      case 'tomorrow':
        newDate = new Date(currentDate)
        newDate.setDate(newDate.getDate() + 1)
        setCurrentDate(newDate)
        break
      default:
        setCurrentDate(new Date())
        break
    }
  }

  return (
    <>
      <button onClick={() => handleDate('yesterday')}>전날</button>
      <button onClick={() => handleDate('today')}>현재</button>
      <button onClick={() => handleDate('tomorrow')}>다음날</button>
    </>
  )
}

export default DateButton
