import { MemoryRouter, Routes, Route } from 'react-router-dom'

import Home from './page/home'
import Meal from './page/meal'
import Profile from './page/profile'
import Schedule from './page/schedule'

const AppRoutes = () => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/meal' element={<Meal />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/schedule' element={<Schedule />} />
      </Routes>
    </MemoryRouter>
  )
}

export default AppRoutes
