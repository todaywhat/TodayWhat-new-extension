import { MemoryRouter, Routes, Route } from 'react-router-dom'

import Allergy from '@page/allergy'
import Home from '@page/home'
import Meal from '@page/meal'
import Profile from '@page/profile'
import Schedule from '@page/schedule'

const AppRoutes = () => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/meal' element={<Meal />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/allergy' element={<Allergy />} />
      </Routes>
    </MemoryRouter>
  )
}

export default AppRoutes
