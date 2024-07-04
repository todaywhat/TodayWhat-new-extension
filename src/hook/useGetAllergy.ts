import { useEffect } from 'react'

export function useGetAllergy(
  setSelectedAllergies: React.Dispatch<React.SetStateAction<number[]>>,
) {
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
}
