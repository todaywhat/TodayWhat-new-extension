import { useState } from 'react'
import { AllergyType } from 'types/allergy'
import { useGetAllergy } from '../../hook/profile/useGetAllergy'
import { allergyMock } from '../../mocks/allergyMock'

const Allergy = () => {
  const [selectedAllergies, setSelectedAllergies] = useState<number[]>([])

  useGetAllergy(setSelectedAllergies)

  const handleClick = (id: number) => {
    const isSelected = selectedAllergies.includes(id)
    const updatedAllergies = isSelected
      ? selectedAllergies.filter((allergyId) => allergyId !== id)
      : [...selectedAllergies, id]

    setSelectedAllergies(updatedAllergies)

    if (typeof chrome !== 'undefined' && chrome.storage) {
      chrome.storage.sync.set({ selectedAllergies: updatedAllergies })
    } else {
      localStorage.setItem(
        'selectedAllergies',
        JSON.stringify(updatedAllergies),
      )
    }
  }

  return (
    <div>
      {allergyMock.map((allergy: AllergyType) => (
        <div
          style={{
            border: selectedAllergies.includes(allergy.id)
              ? '2px solid black'
              : 'none',
            marginBottom: '10px',
            cursor: 'pointer',
          }}
          key={allergy.id}
          onClick={() => handleClick(allergy.id)}
        >
          {allergy.allergy}
        </div>
      ))}
    </div>
  )
}

export default Allergy
