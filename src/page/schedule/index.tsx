import DateButton from '@components/DateButton'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { Link } from 'react-router-dom'
import { ScheduleData } from 'types/schedule'
import getSchedule from '@apis/Schedule/getSchedule'
import { getDate } from '@util/lib/getDate'

const Schedule = () => {
  // const [scheduleData, setScheduleData] = useState<scheduleData[]>([])
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

  let scheduleURL = ''
  useEffect(() => {
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
  }, [currentDate])

  const { data } = useQuery<ScheduleData[]>({
    queryKey: ['scheduleData', currentDate],
    queryFn: () =>
      getSchedule(
        ATPT_OFCDC_SC_CODE,
        SD_SCHUL_CODE,
        USER_DDDEP_NM,
        USER_GRADE,
        USER_CLASS,
        scheduleURL,
        currentDate,
      ),
    staleTime: 5 * 60 * 1000,
  })

  return (
    <>
      <h1>{getDate(currentDate)}</h1>
      <DateButton currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <div>
        {data?.map((schedule: ScheduleData, index: number) => (
          <div key={index}>{schedule?.ITRT_CNTNT}</div>
        ))}
      </div>
      <p>{data?.length === 0 ? 'Loading...' : ''}</p>
      <Link to='/'>돌아가기</Link>
    </>
  )
}

export default Schedule
