import DateButton from '@components/DateButton'
import MealButton from '@components/MealButton'
import { useQuery } from '@tanstack/react-query'
import { useMemo, useState } from 'react'
import { useCookies } from 'react-cookie'
import { Link } from 'react-router-dom'
import getMeal from '@apis/Meal/getMeal'
import { getDate } from '@util/lib/getDate'

const Meal = () => {
  const [cookies] = useCookies(['ATPT_OFCDC_SC_CODE', 'SD_SCHUL_CODE'])
  const [currentDate, setCurrentDate] = useState(new Date())
  const [mealNumber, setMealNumber] = useState<number>(0)

  const { data } = useQuery({
    queryKey: ['mealData', currentDate],
    queryFn: () => getMeal(cookies, currentDate),
    staleTime: 5 * 60 * 1000,
  })

  const mealData: string[] | 'loading...' = useMemo(() => {
    if (data) {
      return (
        data[mealNumber]?.DDISH_NM.replace(
          /\([ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9.]*\)|[*<br/>a-z.() ]/g,
          '`',
        ).split('`') || ['급식이 없습니다.']
      )
    }
    return 'loading...'
  }, [mealNumber, data])

  return (
    <>
      <h1>{getDate(currentDate)}</h1>
      <DateButton currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <MealButton setMealNumber={setMealNumber} />
      <div>
        {mealData === 'loading...' ? (
          <div>{mealData}</div>
        ) : (
          mealData.map((meal: string, index: number) => (
            <div key={index}>{meal}</div>
          ))
        )}
      </div>
      <Link to='/'>돌아가기</Link>
    </>
  )
}

export default Meal
