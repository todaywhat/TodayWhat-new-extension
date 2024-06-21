import axios from 'axios';

const getHigh = async () => {
  try {
    const { data } = await axios.get('https://open.neis.go.kr/hub/hisTimetable', {
      params: {
        KEY: process.env.REACT_APP_CLIENT_NEIS_KEY,
        Type: 'json',
        ATPT_OFCDC_SC_CODE: 'F10',
        SD_SCHUL_CODE: '7380041',
      },
    });
    return data;
  } catch (e) {
    return null;
  }
};

export default getHigh;
