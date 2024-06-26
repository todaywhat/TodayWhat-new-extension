'use client';

import { useCookies } from 'react-cookie';
import React, { useState, ChangeEvent, useEffect } from 'react';
import { School } from '@/app/types/school';
import { Department } from '@/app/types/department';
import getSchool from '@/app/apis/Profile/getSchool';
import getDepartment from '@/app/apis/Profile/getDepartment';
import userData from '@/app/util/lib/userData';

const Profile: React.FC = () => {
  const [searchSchools, setSearchSchools] = useState<School[]>([]);
  const { setUserSchoolData, setUserGrade, setUserClass, getSchoolMajorData, setUserMajorData } = userData();
  const [cookies] = useCookies([
    'SCHUL_NM',
    'USER_GRADE',
    'USER_CLASS',
    'ATPT_OFCDC_SC_CODE',
    'SD_SCHUL_CODE',
    'SCHOOL_DDDEP_NM',
    'USER_DDDEP_NM',
  ]);
  const { SCHUL_NM = '', USER_GRADE = '', USER_CLASS = '', SCHOOL_DDDEP_NM = [], USER_DDDEP_NM = '' } = cookies; // SCHOOL_DDDEP_NM 기본값 빈 배열로 지정
  const [keyword, setKeyword] = useState<string>(SCHUL_NM);
  const [grade, setGrade] = useState<string>(USER_GRADE);
  const [myClass, setMyClass] = useState<string>(USER_CLASS);
  const [selectedValue, setSelectedValue] = useState<string>(USER_DDDEP_NM);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (keyword.trim()) {
        fetchSchools(keyword);
      } else {
        setSearchSchools([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [keyword]);

  const handleChange =
    (setter: React.Dispatch<React.SetStateAction<string>>, userDataSetter: (value: string) => void) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setter(value);
      userDataSetter(value);
    };

  const fetchSchools = async (searchKeyword: string) => {
    try {
      const data = await getSchool(searchKeyword);
      setSearchSchools(data && data.length > 0 ? data : []);
    } catch {
      setSearchSchools([]);
    }
  };

  const handleSelectSchool = async (school: School) => {
    setUserSchoolData(school.SCHUL_NM, school.ATPT_OFCDC_SC_CODE, school.SD_SCHUL_CODE, school.SCHUL_KND_SC_NM);
    setKeyword(school.SCHUL_NM);
    setSearchSchools([]);
    if (school.ATPT_OFCDC_SC_CODE) {
      fetchDepartments(school.ATPT_OFCDC_SC_CODE, school.SD_SCHUL_CODE);
    }
  };

  const fetchDepartments = async (ATPT_OFCDC_SC_CODE: string, SD_SCHUL_CODE: string) => {
    setUserMajorData('선택안함');
    setSelectedValue('선택안함');
    try {
      const data = await getDepartment(ATPT_OFCDC_SC_CODE, SD_SCHUL_CODE);
      if (data && data.length > 0) {
        const departmentNames = data.map((dept: Department) => dept.DDDEP_NM);
        getSchoolMajorData(departmentNames);
      } else {
        getSchoolMajorData([]);
      }
    } catch (error) {
      getSchoolMajorData([]);
    }
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedValue(value);
    setUserMajorData(value);
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={keyword}
          onChange={handleChange(setKeyword, () => {})}
          placeholder="학교 이름을 입력하세요"
        />
        {searchSchools.length > 0 && (
          <ul>
            {searchSchools.map((school) => (
              <li key={school.SCHUL_NM} onClick={() => handleSelectSchool(school)}>
                {school.SCHUL_NM}
              </li>
            ))}
          </ul>
        )}
      </div>
      <input
        type="text"
        value={grade}
        onChange={handleChange(setGrade, setUserGrade)}
        placeholder="학년을 입력하세요"
      />
      <input
        type="text"
        value={myClass}
        onChange={handleChange(setMyClass, setUserClass)}
        placeholder="반을 입력하세요"
      />
      {Array.isArray(SCHOOL_DDDEP_NM) && SCHOOL_DDDEP_NM.length > 0 && (
        <div>
          <select value={selectedValue} onChange={handleSelectChange}>
            {SCHOOL_DDDEP_NM.map((dept, index) => (
              <option key={index}>{dept}</option>
            ))}
          </select>
        </div>
      )}
    </>
  );
};

export default Profile;
