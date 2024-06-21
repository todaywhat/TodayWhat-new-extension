import { useEffect, useState } from 'react';
import getMeal from '@apis/Meal/getMeal';

const Meal = () => {
  const [schoolData, setSchoolData] = useState(null);

  useEffect(() => {
    const fetchSchoolData = async () => {
      const res = await getMeal();
      setSchoolData(res);
    };

    fetchSchoolData();
  }, []);

  return <p>{schoolData ? JSON.stringify(schoolData) : 'Loading...'}</p>;
};

export default Meal;
