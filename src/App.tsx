import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import Profile from '@pages/Profile';
import Meal from '@pages/Meal';
import Schedule from '@pages/Schedule';

function App() {
  return (
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/meal" element={<Meal />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </MemoryRouter>
  );
}

export default App;
