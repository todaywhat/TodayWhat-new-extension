import axios from 'axios';
import { School } from 'src/types/school';

const getSchool = async (keyword: string): Promise<School[] | null> => {
  try {
    const response = await axios.get('https://open.neis.go.kr/hub/schoolInfo', {
      params: {
        KEY: process.env.REACT_APP_CLIENT_NEIS_KEY,
        Type: 'json',
        pIndex: 1,
        pSize: 5,
        SCHUL_NM: keyword,
      },
    });

    const schoolData = response.data?.schoolInfo?.[1]?.row; // Adjusted to fetch the first school's row
    return Array.isArray(schoolData) ? schoolData : [schoolData].filter(Boolean);
  } catch (error) {
    return null;
  }
};

export default getSchool;
