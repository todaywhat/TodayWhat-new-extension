import ProfileRice from '../../assets/svg/ProfileRice'
import * as S from './style'

interface Props {
  school: string
  Grade: string
  Myclass: string
}

const MyProfile: React.FC<Props> = ({ school, Grade, Myclass, ...props }) => {
  return (
    <S.Wrapper {...props}>
      <S.ProfileContainer>
        <S.SchoolText>{school}</S.SchoolText>
        <S.ClassText>
          {Grade}학년{Myclass}반
        </S.ClassText>
      </S.ProfileContainer>
      <S.RiceIcon>
        <ProfileRice />
      </S.RiceIcon>
    </S.Wrapper>
  )
}

export default MyProfile