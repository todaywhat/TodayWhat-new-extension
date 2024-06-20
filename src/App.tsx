import SchoolSearch from '@pages/Profile';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
// import Home from '@pages/Home';

function App() {
  return (
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      <Routes>
        <Route path="/" element={<SchoolSearch />} />
      </Routes>
    </MemoryRouter>
  );
}

export default App;
