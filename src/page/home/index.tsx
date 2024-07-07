import { useNavigate } from 'react-router-dom'
import Logo from '../../stories/atoms/Logo'
import NavigateButton from '../../stories/atoms/NavigateButton'
import {
  User,
  Calendar,
  Rice,
  Allergies,
  Setting,
  Notice,
} from '../../stories/icons'
import * as S from './style'

const mainNav = [
  { path: '/profile', icon: <User />, text: '프로필' },
  { path: '/schedule', icon: <Calendar />, text: '시간표' },
  { path: '/meal', icon: <Rice />, text: '급식' },
  { path: '/allergy', icon: <Allergies />, text: '알러지' },
  { path: '/setting', icon: <Setting />, text: '설정' },
  { path: '/notice', icon: <Notice />, text: '공지' },
]

const Home = () => {
  const navigate = useNavigate()

  return (
    <S.Wrapper>
      <Logo />
      <S.NavigateWrapper>
        {mainNav.map(({ path, icon, text }) => (
          <NavigateButton
            key={path}
            onClick={() => navigate(path)}
            icons={icon}
            text={text}
          />
        ))}
      </S.NavigateWrapper>
    </S.Wrapper>
  )
}

export default Home
