import MealList from '@stories/atoms/MealList'
import { Allergies } from '@stories/icons'
import React from 'react'

interface Props {
  mealData: string[]
  selectedAllergies: number[]
}

const FilterMealList: React.FC<Props> = ({ mealData, selectedAllergies }) => {
  const allergensRegex = /\((\d+(\.\d+)*)\)/g

  return (
    <>
      {mealData.map((meal, index) => {
        const matches = meal.match(allergensRegex) || []
        let allergens: number[] = []

        matches.forEach((match) => {
          const allergenStr = match.slice(1, -1)
          allergens = allergens.concat(allergenStr.split('.').map(Number))
        })

        const hasAllergies = selectedAllergies.some((allergy) =>
          allergens.includes(allergy),
        )

        return (
          <MealList
            key={index}
            text={meal.replace(allergensRegex, '').trim()}
            icons={hasAllergies ? <Allergies /> : undefined}
          />
        )
      })}
    </>
  )
}

export default FilterMealList
