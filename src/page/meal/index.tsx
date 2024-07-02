import DateButton from '@components/DateButton'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import getMeal from '@apis/Meal/getMeal'
import { getDate } from '@util/lib/getDate'

const Meal = () => {
  const [schoolData, setSchoolData] = useState(null)
  const [cookies] = useCookies(['ATPT_OFCDC_SC_CODE', 'SD_SCHUL_CODE'])
  const [currentDate, setCurrentDate] = useState(new Date())

  useEffect(() => {
    const fetchSchoolData = async () => {
      const res = await getMeal(cookies, currentDate)
      setSchoolData(res)
    }

    fetchSchoolData()
  }, [currentDate])

  return (
    <>
      <h1>{getDate(currentDate)}</h1>
      <DateButton currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <p>{schoolData ? JSON.stringify(schoolData) : 'Loading...'}</p>
    </>
  )
}

export default Meal
