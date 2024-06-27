import axios from 'axios'
import { School } from '@/app/types/school'

const getSchool = async (keyword: string): Promise<School[] | null> => {
  try {
    const response = await axios.get(`/api/schoolInfo`, {
      params: {
        Type: 'json',
        pIndex: 1,
        pSize: 5,
        SCHUL_NM: keyword,
      },
    })

    const schoolData = response.data?.schoolInfo?.[1]?.row // Adjusted to fetch the first school's row
    return Array.isArray(schoolData) ? schoolData : [schoolData].filter(Boolean)
  } catch (error) {
    return null
  }
}

export default getSchool
