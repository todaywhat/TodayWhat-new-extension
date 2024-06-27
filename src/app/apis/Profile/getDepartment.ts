import axios from 'axios'

const getDepartment = async (code: string, SD_SCHUL_CODE: string) => {
  try {
    const { data } = await axios.get(`/api/schoolMajorinfo`, {
      params: {
        Type: 'json',
        pIndex: 1,
        pSize: 100,
        ATPT_OFCDC_SC_CODE: code,
        SD_SCHUL_CODE: SD_SCHUL_CODE,
      },
    })
    return data?.schoolMajorinfo?.[1]?.row || []
  } catch (e) {
    return null
  }
}

export default getDepartment
