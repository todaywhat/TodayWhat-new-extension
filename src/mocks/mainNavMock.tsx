import {
  User,
  Calendar,
  Rice,
  Allergies,
  Setting,
  Notice,
} from '@stories/icons/index'

export const mainNav = [
  { path: '/profile', icon: <User />, text: '프로필', event: 'profile_route' },
  {
    path: '/schedule',
    icon: <Calendar />,
    text: '시간표',
    event: 'schedule_route',
  },
  { path: '/meal', icon: <Rice />, text: '급식', event: 'meal_route' },
  {
    path: '/allergy',
    icon: <Allergies />,
    text: '알러지',
    event: 'allergy_route',
  },
  { path: '/setting', icon: <Setting />, text: '설정', event: 'setting_route' },
  { path: '/notice', icon: <Notice />, text: '공지', event: 'notice_route' },
]
