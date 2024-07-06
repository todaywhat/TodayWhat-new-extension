// import { useNavigate } from 'react-router-dom'

// const Home = () => {
//   const navigate = useNavigate()
//   return (
//     <>
//       <button onClick={() => navigate('/profile')}>프로필</button>
//       <br />
//       <button onClick={() => navigate('/meal')}>급식</button>
//       <br />
//       <button onClick={() => navigate('/schedule')}>시간표</button>
//       <br />
//       <button onClick={() => navigate('/allergy')}>알러지</button>
//       <br />
//     </>
//   )
// }

// export default Home

// import { useNavigate } from 'react-router-dom'
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

const Home = () => {
  return (
    <S.Wrapper>
      <Logo />
      <S.NavigateWrapper>
        <NavigateButton icons={<User />} text='프로필' />
        <NavigateButton icons={<Calendar />} text='시간표' />
        <NavigateButton icons={<Rice />} text='급식' />
        <NavigateButton icons={<Allergies />} text='알러지' />
        <NavigateButton icons={<Setting />} text='설정' />
        <NavigateButton icons={<Notice />} text='공지' />
      </S.NavigateWrapper>
    </S.Wrapper>
  )
}

export default Home
