import {
  User,
  Calendar,
  Rice,
  Allergies,
  Setting,
  Notice,
} from '@stories/icons/index'

export const mainNav = [
  { path: '/profile', icon: <User />, text: '프로필' },
  { path: '/schedule', icon: <Calendar />, text: '시간표' },
  { path: '/meal', icon: <Rice />, text: '급식' },
  { path: '/allergy', icon: <Allergies />, text: '알러지' },
  { path: '/setting', icon: <Setting />, text: '설정' },
  { path: '/notice', icon: <Notice />, text: '공지' },
]
