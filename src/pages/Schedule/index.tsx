import getHigh from '@apis/Schedule/getHigh';
import { useEffect, useState } from 'react';

const Schedule = () => {
  const [scheduleData, setScheduleData] = useState(null);

  useEffect(() => {
    const fetchScheduleData = async () => {
      const res = await getHigh();
      setScheduleData(res);
    };

    fetchScheduleData();
  }, []);

  return <p>{scheduleData ? JSON.stringify(scheduleData) : 'Loading...'}</p>;
};

export default Schedule;
