import DateButton from '@components/DateButton'
import MealButton from '@components/MealButton'
import { useEffect, useMemo, useState } from 'react'
import { useCookies } from 'react-cookie'
import getMeal from '@apis/Meal/getMeal'
import { getDate } from '@util/lib/getDate'

interface MealData {
  DDISH_NM: string
}

const Meal = () => {
  const [schoolData, setSchoolData] = useState<MealData[] | null>(null)
  const [cookies] = useCookies(['ATPT_OFCDC_SC_CODE', 'SD_SCHUL_CODE'])
  const [currentDate, setCurrentDate] = useState(new Date())
  const [mealNumber, setMealNumber] = useState<number>(0)

  useEffect(() => {
    const fetchSchoolData = async () => {
      const res = await getMeal(cookies, currentDate)
      setSchoolData(res)
    }

    fetchSchoolData()
  }, [currentDate])

  const mealData: string[] | 'loading...' = useMemo(() => {
    if (schoolData) {
      return (
        schoolData[mealNumber]?.DDISH_NM.replace(
          /\([ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9.]*\)|[*<br/>a-z.() ]/g,
          '`',
        ).split('`') || ['급식이 없습니다.']
      )
    }
    return 'loading...'
  }, [mealNumber, schoolData])

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
    </>
  )
}

export default Meal
