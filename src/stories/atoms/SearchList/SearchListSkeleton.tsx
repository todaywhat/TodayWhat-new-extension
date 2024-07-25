import { SkeletonText } from '../Skeleton'
import * as S from './style'

const SearchListSkeleton = () => {
  return (
    <S.Wrapper>
      <SkeletonText width='40%' height='1.3125rem' />
      <SkeletonText width='25%' />
    </S.Wrapper>
  )
}

export default SearchListSkeleton
