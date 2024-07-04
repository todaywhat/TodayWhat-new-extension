import { useCookies } from 'react-cookie'

const useUserData = () => {
  const [cookies, setCookie] = useCookies([
    'SCHUL_NM',
    'ATPT_OFCDC_SC_CODE',
    'SD_SCHUL_CODE',
    'SCHOOL_DDDEP_NM',
    'USER_DDDEP_NM',
    'USER_GRADE',
    'USER_CLASS',
    'SCHUL_KND_SC_NM',
  ])

  const expirationDate = new Date()
  expirationDate.setFullYear(expirationDate.getFullYear() + 1)

  const setUserSchoolData = (
    SCHUL_NM: string,
    ATPT_OFCDC_SC_CODE: string,
    SD_SCHUL_CODE: string,
    SCHUL_KND_SC_NM: string,
  ) => {
    setCookie('SCHUL_NM', SCHUL_NM, { path: '/', expires: expirationDate })
    setCookie('ATPT_OFCDC_SC_CODE', ATPT_OFCDC_SC_CODE, {
      path: '/',
      expires: expirationDate,
    })
    setCookie('SD_SCHUL_CODE', SD_SCHUL_CODE, {
      path: '/',
      expires: expirationDate,
    })
    setCookie('SCHUL_KND_SC_NM', SCHUL_KND_SC_NM, {
      path: '/',
      expires: expirationDate,
    })
  }

  const getSchoolMajorData = (departmentObject: Array<string>) => {
    const updatedDepartmentObject = ['선택안함', ...departmentObject]
    setCookie('SCHOOL_DDDEP_NM', JSON.stringify(updatedDepartmentObject), {
      path: '/',
      expires: expirationDate,
    })
  }

  const setUserMajorData = (DDDEP_NM: string) => {
    setCookie('USER_DDDEP_NM', DDDEP_NM, { path: '/', expires: expirationDate })
  }

  const setUserGrade = (userGrade: string) => {
    setCookie('USER_GRADE', userGrade, { path: '/', expires: expirationDate })
  }

  const setUserClass = (userClass: string) => {
    setCookie('USER_CLASS', userClass, { path: '/', expires: expirationDate })
  }

  return {
    cookies,
    setUserSchoolData,
    getSchoolMajorData,
    setUserMajorData,
    setUserGrade,
    setUserClass,
  }
}

export default useUserData
