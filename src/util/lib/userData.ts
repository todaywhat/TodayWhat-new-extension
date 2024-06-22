import { useCookies } from 'react-cookie';

const userData = () => {
  const [cookies, setCookie] = useCookies([
    'SCHUL_NM',
    'ATPT_OFCDC_SC_CODE',
    'SD_SCHUL_CODE',
    'USER_GRADE',
    'USER_CLASS',
  ]);

  const setUserSchoolData = (SCHUL_NM: string, ATPT_OFCDC_SC_CODE: string, SD_SCHUL_CODE: string) => {
    setCookie('SCHUL_NM', SCHUL_NM, { path: '/' });
    setCookie('ATPT_OFCDC_SC_CODE', ATPT_OFCDC_SC_CODE, { path: '/' });
    setCookie('SD_SCHUL_CODE', SD_SCHUL_CODE, { path: '/' });
  };
  const setUserGrade = (userGrade: string) => {
    setCookie('USER_GRADE', userGrade, { path: '/' });
  };
  const setUserClass = (userClass: string) => {
    setCookie('USER_CLASS', userClass, { path: '/' });
  };

  return {
    cookies,
    setUserSchoolData,
    setUserGrade,
    setUserClass,
  };
};

export default userData;
