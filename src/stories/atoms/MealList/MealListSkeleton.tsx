import { SkeletonText } from '../Skeleton'
import * as S from './style'

const MealListSkeleton = () => {
  return (
    <S.Wrapper>
      <SkeletonText width='30%' height='1.25rem' />
    </S.Wrapper>
  )
}

export default MealListSkeleton
