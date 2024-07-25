import { Stroke } from '../../assets/svg'
import { SkeletonText } from '../Skeleton'
import * as S from './style'

const ScheduleListSkeleton = () => {
  return (
    <S.Wrapper>
      <S.TextContainer>
        <SkeletonText width='10%' height='0.9375rem' />
        <Stroke />
        <SkeletonText width='25%' height='1.25rem' />
      </S.TextContainer>
    </S.Wrapper>
  )
}

export default ScheduleListSkeleton
