import { useEffect, useState } from 'react'
import { AllergyType } from 'types/allergy'
import { allergyMock } from '../../mocks/allergyMock'

const Allergy = () => {
  const [selectedAllergies, setSelectedAllergies] = useState<number[]>([])

  useEffect(() => {
    if (typeof chrome !== 'undefined' && chrome.storage) {
      chrome.storage.sync.get('selectedAllergies', (result) => {
        if (result.selectedAllergies) {
          setSelectedAllergies(result.selectedAllergies)
        }
      })
    } else {
      const localData = localStorage.getItem('selectedAllergies')
      if (localData) {
        setSelectedAllergies(JSON.parse(localData))
      }
    }
  }, [])

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
            backgroundColor: selectedAllergies.includes(allergy.id)
              ? 'red'
              : 'blue',
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
