import { useState } from 'react'
import { AllergyType } from 'types/allergy'
import { useGetAllergy } from '../../hook/profile/useGetAllergy'
import { allergyMock } from '../../mocks/allergyMock'
import CheckButton from '../../stories/atoms/CheckButton'
import Logo from '../../stories/atoms/Logo'
import * as S from './style'

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
    <S.Wrapper>
      <S.Header>
        <Logo />
      </S.Header>
      <S.ContentContainer>
        <S.Title>알레르기</S.Title>
        <S.AllergyContainer>
          {allergyMock.map((allergy: AllergyType) => (
            <S.Allergy
              key={allergy.id}
              isSelected={selectedAllergies.includes(allergy.id)}
              onClick={() => handleClick(allergy.id)}
            >
              {allergy.icon}
              {allergy.allergy}
            </S.Allergy>
          ))}
        </S.AllergyContainer>
        <CheckButton text='저장하기' />
      </S.ContentContainer>
    </S.Wrapper>
  )
}

export default Allergy
