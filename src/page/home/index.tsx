import { mainNav } from '@mocks/mainNavMock'
import Logo from '@stories/atoms/Logo'
import NavigateButton from '@stories/atoms/NavigateButton'
import { logEvent } from 'firebase/analytics'
import { useNavigate } from 'react-router-dom'
import { analytics } from '@util/firebase'
import * as S from './style'
const Home = () => {
  const navigate = useNavigate()

  const handleRoute = (path: string, event: string) => {
    logEvent(analytics, event)
    navigate(path)
  }

  return (
    <S.Wrapper>
      <Logo />
      <S.NavigateWrapper>
        {mainNav.map(({ path, icon, text, event }) => (
          <NavigateButton
            key={path}
            onClick={() => handleRoute(path, event)}
            icons={icon}
            text={text}
          />
        ))}
      </S.NavigateWrapper>
    </S.Wrapper>
  )
}

export default Home
