import { MemoryRouter, Routes, Route } from 'react-router-dom'
import Allergy from '@page/allergy'
import Home from '@page/home'
import Meal from '@page/meal'
import Notice from '@page/notice'
import NoticeDetailView from '@page/noticeDetailView'
import Profile from '@page/profile'
import Schedule from '@page/schedule'
import Setting from '@page/setting'
import '@styles/global.css'
import '@styles/fonts.css'

const AppRoutes = () => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/meal' element={<Meal />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/allergy' element={<Allergy />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='/notice' element={<Notice />} />
        <Route path='/noticeDetail/:id' element={<NoticeDetailView />} />
      </Routes>
    </MemoryRouter>
  )
}

export default AppRoutes
