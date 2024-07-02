import React from 'react'

interface MealProps {
  setMealNumber: (num: number) => void
}

const MealButton: React.FC<MealProps> = ({ setMealNumber }) => {
  const handleDate = (date: number) => {
    setMealNumber(date)
  }

  return (
    <>
      <button onClick={() => handleDate(0)}>조식</button>
      <button onClick={() => handleDate(1)}>중식</button>
      <button onClick={() => handleDate(2)}>석식</button>
    </>
  )
}

export default MealButton
