import { useEffect, useState } from 'react';
import getMeal from '@apis/Meal/getMeal';
import { useCookies } from 'react-cookie';

const Meal = () => {
  const [schoolData, setSchoolData] = useState(null);
  const [cookies] = useCookies(['ATPT_OFCDC_SC_CODE', 'SD_SCHUL_CODE']);

  useEffect(() => {
    const fetchSchoolData = async () => {
      const res = await getMeal(cookies);
      setSchoolData(res);
    };

    fetchSchoolData();
  }, []);

  return <p>{schoolData ? JSON.stringify(schoolData) : 'Loading...'}</p>;
};

export default Meal;
