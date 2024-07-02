import DateButton from '@components/DateButton'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import getSchedule from '@apis/Schedule/getSchedule'
import { getDate } from '@util/lib/getDate'

interface scheduleData {
  ITRT_CNTNT: string
}

const Schedule = () => {
  const [scheduleData, setScheduleData] = useState<scheduleData[]>([])
  const [currentDate, setCurrentDate] = useState(new Date())
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
          scheduleURL = 'hisTimetable'
          break
        case '중학교':
          scheduleURL = 'misTimetable'
          break
        case '초등학교':
          scheduleURL = 'elsTimetable'
          break
        default:
          scheduleURL = ''
          return
      }
      try {
        const res = await getSchedule(
          ATPT_OFCDC_SC_CODE,
          SD_SCHUL_CODE,
          USER_DDDEP_NM,
          USER_GRADE,
          USER_CLASS,
          scheduleURL,
          currentDate,
        )
        setScheduleData(res)
      } catch (error) {
        console.error('Error fetching schedule:', error)
      }
    }

    fetchScheduleData()
  }, [
    currentDate,
    ATPT_OFCDC_SC_CODE,
    SD_SCHUL_CODE,
    USER_DDDEP_NM,
    USER_GRADE,
    USER_CLASS,
    SCHUL_KND_SC_NM,
  ])

  return (
    <>
      <h1>{getDate(currentDate)}</h1>
      <DateButton currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <div>
        {scheduleData.map((schedule, index) => (
          <div key={index}>{schedule?.ITRT_CNTNT}</div>
        ))}
      </div>
      <p>{scheduleData.length === 0 ? 'Loading...' : ''}</p>
    </>
  )
}

export default Schedule
