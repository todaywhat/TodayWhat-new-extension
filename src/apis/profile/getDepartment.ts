import axios from 'axios';

const getDepartment = async (code: string) => {
  try {
    const { data } = await axios.get('https://open.neis.go.kr/hub/schoolMajorinfo', {
      params: {
        KEY: process.env.REACT_APP_CLIENT_NEIS_KEY,
        Type: 'json',
        pIndex: 1,
        pSize: 5,
        ATPT_OFCDC_SC_CODE: code,
      },
    });
    return data?.schoolMajorinfo?.[1]?.row || [];
  } catch (e) {
    return null;
  }
};

export default getDepartment;
