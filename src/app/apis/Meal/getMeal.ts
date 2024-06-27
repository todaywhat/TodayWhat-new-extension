import axios from 'axios'

interface Cookies {
  ATPT_OFCDC_SC_CODE?: string
  SD_SCHUL_CODE?: string
}

const getMeal = async (cookies: Cookies) => {
  try {
    const { ATPT_OFCDC_SC_CODE = '', SD_SCHUL_CODE = '' } = cookies

    const { data } = await axios.get(`/api/mealServiceDietInfo`, {
      params: {
        Type: 'json',
        ATPT_OFCDC_SC_CODE,
        SD_SCHUL_CODE,
        MLSV_YMD: 20240627,
      },
    })
    return data
  } catch (e) {
    return null
  }
}

export default getMeal
