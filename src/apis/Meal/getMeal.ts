import axios from 'axios';

const getMeal = async () => {
  try {
    const { data } = await axios.get('https://open.neis.go.kr/hub/mealServiceDietInfo', {
      params: {
        KEY: process.env.REACT_APP_CLIENT_NEIS_KEY,
        Type: 'json',
        ATPT_OFCDC_SC_CODE: 'F10',
        SD_SCHUL_CODE: '7380292',
        MLSV_YMD: 20240621,
      },
    });
    return data;
  } catch (e) {
    return null;
  }
};

export default getMeal;
