import { logEvent } from 'firebase/analytics'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { analytics } from '@util/firebase'
import { useGetAllergy } from '../../../hook/profile/useGetAllergy'
import { allergyTransformation } from '../../../util/lib/allergyTransformation'
import RightArrow from '../../icons/RightArrow'
import * as S from './style'

const AllergiesList = ({ ...props }) => {
  const [selectedAllergies, setSelectedAllergies] = useState<number[]>([])
  useGetAllergy(setSelectedAllergies)

  const transformedAllergies = allergyTransformation(selectedAllergies)

  const navigate = useNavigate()

  const handleAllergy = () => {
    logEvent(analytics, 'allergy_route')
    navigate('/allergy')
  }

  return (
    <S.Wrapper onClick={handleAllergy} {...props}>
      <S.Allergies>
        {selectedAllergies.length === 0
          ? '알레르기가 없어요'
          : transformedAllergies.join(', ')}
      </S.Allergies>
      <S.Icon>
        <RightArrow />
      </S.Icon>
    </S.Wrapper>
  )
}

export default AllergiesList
