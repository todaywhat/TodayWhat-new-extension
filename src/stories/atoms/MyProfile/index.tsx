import ProfileRice from '../../assets/svg/ProfileRice'
import * as S from './style'

interface Props {
  school: string
  Myclass: string
}

const MyProfile: React.FC<Props> = ({ school, Myclass, ...props }) => {
  return (
    <S.Wrapper {...props}>
      <S.ProfileContainer>
        <S.SchoolText>{school}</S.SchoolText>
        <S.ClassText>{Myclass}</S.ClassText>
      </S.ProfileContainer>
      <S.RiceIcon>
        <ProfileRice />
      </S.RiceIcon>
    </S.Wrapper>
  )
}

export default MyProfile
