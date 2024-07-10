import DateButton from '@components/DateButton'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { ScheduleData } from 'types/schedule'
import getSchedule from '@apis/Schedule/getSchedule'
import Logo from '../../stories/atoms/Logo'
import Return from '../../stories/atoms/Return'
import ScheduleList from '../../stories/atoms/ScheduleList'
import getScheduleURL from '../../util/lib/getScheduleURL'
import * as S from './style'

const Schedule = () => {
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

  const scheduleURL = getScheduleURL(SCHUL_KND_SC_NM)

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
    <S.Wrapper>
      <S.NavContainer>
        <S.Header>
          <Logo />
          <Return />
        </S.Header>
        <DateButton setCurrentDate={setCurrentDate} />
      </S.NavContainer>
      <S.ScheduleContiner>
        {data?.map((schedule: ScheduleData, index: number) => (
          <ScheduleList
            key={index}
            time={`${index + 1}교시`}
            subject={schedule?.ITRT_CNTNT}
          />
        ))}
      </S.ScheduleContiner>
    </S.Wrapper>
  )
}

export default Schedule
