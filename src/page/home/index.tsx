import { mainNav } from '@mocks/mainNavMock'
import Logo from '@stories/atoms/Logo'
import NavigateButton from '@stories/atoms/NavigateButton'
import { useNavigate } from 'react-router-dom'
import * as S from './style'
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
