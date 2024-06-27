'use client'

import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import getSchedule from '@/app/apis/Schedule/getSchedule'

const Schedule = () => {
  const [scheduleData, setScheduleData] = useState(null)
  const [cookies] = useCookies([
    'SCHUL_NM',
    'ATPT_OFCDC_SC_CODE',
    'SD_SCHUL_CODE',
    'USER_DDDEP_NM',
    'USER_GRADE',
    'USER_CLASS',
    'SCHUL_KND_SC_NM',
  ])
  const {
    ATPT_OFCDC_SC_CODE = '',
    SD_SCHUL_CODE = '',
    USER_DDDEP_NM = ' ',
    USER_GRADE = '',
    USER_CLASS = '',
    SCHUL_KND_SC_NM = '',
  } = cookies

  useEffect(() => {
    const fetchScheduleData = async () => {
      let scheduleURL
      switch (SCHUL_KND_SC_NM) {
        case '고등학교':
          scheduleURL = '/api/hisTimetable'
          break
        case '중학교':
          scheduleURL = '/api/misTimetable'
          break
        case '초등학교':
          scheduleURL = '/api/elsTimetable'
          break
        default:
          scheduleURL = ''
          return
      }
      const res = await getSchedule(
        ATPT_OFCDC_SC_CODE,
        SD_SCHUL_CODE,
        USER_DDDEP_NM,
        USER_GRADE,
        USER_CLASS,
        scheduleURL,
      )
      setScheduleData(res)
    }

    fetchScheduleData()
  }, [])

  return <p>{scheduleData ? JSON.stringify(scheduleData) : 'Loading...'}</p>
}

export default Schedule
