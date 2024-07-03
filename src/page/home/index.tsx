import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <button onClick={() => navigate('/profile')}>프로필</button>
      <br />
      <button onClick={() => navigate('/meal')}>급식</button>
      <br />
      <button onClick={() => navigate('/schedule')}>시간표</button>
      <br />
      <button onClick={() => navigate('/allergy')}>알러지</button>
      <br />
    </>
  )
}

export default Home
