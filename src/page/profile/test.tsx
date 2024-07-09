import React, { useState, ChangeEvent, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { Link } from 'react-router-dom'
import { Department } from 'types/department'
import { School } from 'types/school'
import getDepartment from '@apis/Profile/getDepartment'
import getSchool from '@apis/Profile/getSchool'
import useUserData from '@util/lib/userData'

const Profile: React.FC = () => {
  const [cookies] = useCookies([
    'SCHUL_NM',
    'USER_GRADE',
    'USER_CLASS',
    'ATPT_OFCDC_SC_CODE',
    'SD_SCHUL_CODE',
    'SCHOOL_DDDEP_NM',
    'USER_DDDEP_NM',
  ])

  const {
    SCHUL_NM = '',
    USER_GRADE = '',
    USER_CLASS = '',
    SCHOOL_DDDEP_NM = [],
    USER_DDDEP_NM = '',
  } = cookies

  const [keyword, setKeyword] = useState<string>(SCHUL_NM)
  const [grade, setGrade] = useState<string>(USER_GRADE)
  const [myClass, setMyClass] = useState<string>(USER_CLASS)
  const [selectMajor, setSelectMajor] = useState<string>(USER_DDDEP_NM)
  const [searchSchools, setSearchSchools] = useState<School[]>([])

  const {
    setUserSchoolData,
    setUserGrade,
    setUserClass,
    getSchoolMajorData,
    setUserMajorData,
  } = useUserData()

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (keyword.trim() && SCHUL_NM !== keyword) {
        fetchSchools(keyword)
      } else {
        setSearchSchools([])
      }
    }, 300)

    return () => clearTimeout(delayDebounceFn)
  }, [keyword, SCHUL_NM])

  const handleChange =
    (
      setter: React.Dispatch<React.SetStateAction<string>>,
      userDataSetter?: (value: string) => void,
    ) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setter(value)
      if (userDataSetter) {
        userDataSetter(value)
      }
    }

  const fetchSchools = async (searchKeyword: string) => {
    try {
      const data = await getSchool(searchKeyword)
      setSearchSchools(data && data.length > 0 ? data : [])
    } catch (error) {
      console.error('Failed to fetch schools:', error)
      setSearchSchools([])
    }
  }

  const handleSelectSchool = async (school: School) => {
    setUserSchoolData(
      school.SCHUL_NM,
      school.ATPT_OFCDC_SC_CODE,
      school.SD_SCHUL_CODE,
      school.SCHUL_KND_SC_NM,
    )
    setKeyword(school.SCHUL_NM)
    setSearchSchools([])
    if (school.ATPT_OFCDC_SC_CODE) {
      const departments = await fetchDepartments(
        school.ATPT_OFCDC_SC_CODE,
        school.SD_SCHUL_CODE,
      )
      getSchoolMajorData(departments)
    }
  }

  const fetchDepartments = async (
    ATPT_OFCDC_SC_CODE: string,
    SD_SCHUL_CODE: string,
  ) => {
    setUserMajorData('선택안함')
    setSelectMajor('선택안함')
    try {
      const data = await getDepartment(ATPT_OFCDC_SC_CODE, SD_SCHUL_CODE)
      return data && data.length > 0
        ? data.map((dept: Department) => dept.DDDEP_NM)
        : []
    } catch (error) {
      console.error('Failed to fetch departments:', error)
      return []
    }
  }

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setSelectMajor(value)
    setUserMajorData(value)
  }

  return (
    <>
      <div>
        <input
          type='text'
          value={keyword}
          onChange={handleChange(setKeyword)}
          placeholder='학교 이름을 입력하세요'
        />
        {searchSchools.length > 0 && (
          <ul>
            {searchSchools.map((school) => (
              <li
                key={school.SCHUL_NM}
                onClick={() => handleSelectSchool(school)}
              >
                {school.SCHUL_NM}
              </li>
            ))}
          </ul>
        )}
      </div>
      <input
        type='text'
        value={grade}
        onChange={handleChange(setGrade, setUserGrade)}
        placeholder='학년을 입력하세요'
      />
      <input
        type='text'
        value={myClass}
        onChange={handleChange(setMyClass, setUserClass)}
        placeholder='반을 입력하세요'
      />
      {Array.isArray(SCHOOL_DDDEP_NM) && SCHOOL_DDDEP_NM.length > 0 && (
        <div>
          <select value={selectMajor} onChange={handleSelectChange}>
            {SCHOOL_DDDEP_NM.map((dept, index) => (
              <option key={index} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>
      )}
      <Link to='/'>돌아가기</Link>
    </>
  )
}

export default Profile
