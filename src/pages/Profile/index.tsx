import React, { useState, ChangeEvent, useEffect } from 'react';
import { School } from 'src/types/school';
import { Department } from 'src/types/department';
import getSchool from '@apis/Profile/getSchool';
import getDepartment from '@apis/Profile/getDepartment';
import userData from '@util/lib/userData';
import { useCookies } from 'react-cookie';

const Profile: React.FC = () => {
  const [searchSchools, setSearchSchools] = useState<School[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const { setUserSchoolData, setUserGrade, setUserClass } = userData();
  const [cookies] = useCookies(['SCHUL_NM', 'USER_GRADE', 'USER_CLASS']);
  const { SCHUL_NM = '', USER_GRADE = '', USER_CLASS = '' } = cookies;
  const [keyword, setKeyword] = useState<string>(SCHUL_NM);
  const [grade, setGrade] = useState<string>(USER_GRADE);
  const [myClass, setMyClass] = useState<string>(USER_CLASS);

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
    setUserSchoolData(school.SCHUL_NM, school.ATPT_OFCDC_SC_CODE, school.SD_SCHUL_CODE);
    setKeyword(school.SCHUL_NM);
    setSearchSchools([]);
    if (school.ATPT_OFCDC_SC_CODE) {
      fetchDepartments(school.ATPT_OFCDC_SC_CODE, school.SD_SCHUL_CODE);
    }
  };

  const fetchDepartments = async (schoolCode: string, SD_SCHUL_CODE: string) => {
    try {
      const data = await getDepartment(schoolCode, SD_SCHUL_CODE);
      setDepartments([
        ...(data && data.length > 0 ? data : []),
        { DDDEP_NM: '선택안함', SD_SCHUL_CODE: SD_SCHUL_CODE, ATPT_OFCDC_SC_CODE: schoolCode },
      ]);
    } catch {
      setDepartments([{ DDDEP_NM: '선택안함', SD_SCHUL_CODE: SD_SCHUL_CODE, ATPT_OFCDC_SC_CODE: schoolCode }]);
    }
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
      {departments.length > 0 && (
        <div>
          <select>
            {departments.map((dept, index) => (
              <option key={index}>{dept.DDDEP_NM}</option>
            ))}
          </select>
        </div>
      )}
    </>
  );
};

export default Profile;
