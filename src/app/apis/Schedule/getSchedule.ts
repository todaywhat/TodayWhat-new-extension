import axios from 'axios'

const getSchedule = async (
  ATPT_OFCDC_SC_CODE: string,
  SD_SCHUL_CODE: string,
  USER_DDDEP_NM: string,
  USER_GRADE: string,
  USER_CLASS: string,
  scheduleURL: string,
) => {
  try {
    const { data } = await axios.get(`${scheduleURL}`, {
      params: {
        Type: 'json',
        pIndex: 1,
        pSize: 7,
        ATPT_OFCDC_SC_CODE,
        SD_SCHUL_CODE,
        ALL_TI_YMD: 20240627,
        USER_DDDEP_NM,
        GRADE: USER_GRADE,
        CLRM_NM: USER_CLASS,
      },
    })
    return data
  } catch (e) {
    return null
  }
}

export default getSchedule
