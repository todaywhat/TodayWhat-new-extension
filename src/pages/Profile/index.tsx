import React, { useState, ChangeEvent, useEffect } from 'react';
import { School } from 'src/types/school';
import { Department } from 'src/types/department';
import getSchool from '@apis/Profile/getSchool';
import getDepartment from '@apis/Profile/getDepartment';

const Profile: React.FC = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [searchSchools, setSearchSchools] = useState<School[]>([]);
  const [grade, setGrade] = useState<string>('');
  const [myClass, setMyClass] = useState<string>('');
  const [departments, setDepartments] = useState<Department[]>([]);

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

  const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
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
    setSearchSchools([]);
    if (school.ATPT_OFCDC_SC_CODE) {
      fetchDepartments(school.ATPT_OFCDC_SC_CODE);
    }
  };

  const fetchDepartments = async (schoolCode: string) => {
    try {
      const data = await getDepartment(schoolCode);
      setDepartments([
        ...(data && data.length > 0 ? data : []),
        { DDDEP_NM: '선택안함', ATPT_OFCDC_SC_CODE: schoolCode },
      ]);
    } catch {
      setDepartments([{ DDDEP_NM: '선택안함', ATPT_OFCDC_SC_CODE: schoolCode }]);
    }
  };

  return (
    <>
      <div>
        <input type="text" value={keyword} onChange={handleChange(setKeyword)} placeholder="학교 이름을 입력하세요" />
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
      <input type="text" value={grade} onChange={handleChange(setGrade)} placeholder="학년을 입력하세요" />
      <input type="text" value={myClass} onChange={handleChange(setMyClass)} placeholder="반을 입력하세요" />
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
