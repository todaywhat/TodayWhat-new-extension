import React, { useEffect, useState } from 'react';
import getMeal from '@apis/school/getMeal';
// import getSchool from '@apis/school/getSchool';
import StyledP from './style';

const Home = () => {
  const [schoolData, setSchoolData] = useState(null);

  useEffect(() => {
    const fetchSchoolData = async () => {
      // const res = await getSchool();
      const res = await getMeal();
      setSchoolData(res);
    };

    fetchSchoolData();
  }, []);

  return <StyledP>{schoolData ? JSON.stringify(schoolData) : 'Loading...'}</StyledP>;
};

export default Home;
