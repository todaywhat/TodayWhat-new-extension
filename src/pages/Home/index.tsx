import { useNavigate } from 'react-router-dom';
import { Button } from './style';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button onClick={() => navigate('/profile')}>프로필</Button>
      <br />
      <Button onClick={() => navigate('/meal')}>급식</Button>
      <br />
      <Button onClick={() => navigate('/schedule')}>시간표</Button>
      <br />
    </>
  );
};

export default Home;
