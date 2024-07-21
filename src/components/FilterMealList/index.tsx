import MealList from '@stories/atoms/MealList'
import { Allergies } from '@stories/icons'
import React from 'react'

interface Props {
  mealData: string[]
  selectedAllergies: number[]
}

const FilterMealList: React.FC<Props> = ({ mealData, selectedAllergies }) => {
  const allergensRegex = /\((.*?)\)/

  return (
    <>
      {mealData.map((meal, index) => {
        const match = meal.match(allergensRegex)
        let allergens: number[] = []

        if (match) {
          const allergenStr = match[1]
          allergens = allergenStr.split('.').map(Number)
        }

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
