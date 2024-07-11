import { useCookies } from 'react-cookie'

const defaultCookies = {
  SCHUL_NM: '',
  USER_GRADE: '',
  USER_CLASS: '',
  ATPT_OFCDC_SC_CODE: '',
  SD_SCHUL_CODE: '',
  SCHOOL_DDDEP_NM: [],
  USER_DDDEP_NM: '',
}

const useProfileCookie = () => {
  const [cookies] = useCookies(Object.keys(defaultCookies))
  return { ...defaultCookies, ...cookies }
}

export default useProfileCookie
