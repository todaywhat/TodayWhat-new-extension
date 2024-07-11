import { useCookies } from 'react-cookie'

const defaultCookies = {
  ATPT_OFCDC_SC_CODE: '',
  SD_SCHUL_CODE: '',
  USER_DDDEP_NM: ' ',
  USER_GRADE: '',
  USER_CLASS: '',
  SCHUL_KND_SC_NM: '',
}

const useScheduleCookie = () => {
  const [cookies] = useCookies(Object.keys(defaultCookies))
  return { ...defaultCookies, ...cookies }
}

export default useScheduleCookie
