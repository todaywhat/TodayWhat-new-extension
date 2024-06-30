import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import getMeal from '@apis/Meal/getMeal'

const Meal = () => {
  const [schoolData, setSchoolData] = useState(null)
  const [cookies] = useCookies(['ATPT_OFCDC_SC_CODE', 'SD_SCHUL_CODE'])

  useEffect(() => {
    const fetchSchoolData = async () => {
      const res = await getMeal(cookies)
      setSchoolData(res)
    }

    fetchSchoolData()
  }, [])

  return <p>{schoolData ? JSON.stringify(schoolData) : 'Loading...'}</p>
}

export default Meal
