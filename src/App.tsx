import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home/Home';
import Test from '@pages/Test';

function App() {
  return (
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Test />} />
      </Routes>
    </MemoryRouter>
  );
}

export default App;
