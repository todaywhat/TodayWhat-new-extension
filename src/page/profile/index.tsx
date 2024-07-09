import React, { useState, ChangeEvent, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { Department } from 'types/department'
import { School } from 'types/school'
import getDepartment from '@apis/Profile/getDepartment'
import getSchool from '@apis/Profile/getSchool'
import useUserData from '@util/lib/userData'
import Input from '../../stories/atoms/Input'
import Logo from '../../stories/atoms/Logo'
import Return from '../../stories/atoms/Return'
import SearchList from '../../stories/atoms/SearchList'
import Select from '../../stories/atoms/Select'
import * as S from './style'

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

  return (
    <S.Wrapper>
      <S.Header>
        <Logo />
        <Return />
      </S.Header>
      <Input
        setValue={setKeyword}
        category='학교이름'
        value={keyword}
        inputChange={handleChange(setKeyword)}
        placeholder='학교이름을 입력해주세요.'
      />
      {searchSchools.length > 0 &&
        searchSchools.map((school) => (
          <SearchList
            onclick={() => handleSelectSchool(school)}
            key={school.SCHUL_NM}
            school={school.SCHUL_NM}
            location={school.ORG_RDNMA}
          />
        ))}
      {Array.isArray(SCHOOL_DDDEP_NM) && SCHOOL_DDDEP_NM.length > 0 && (
        <Select
          cookie={setUserMajorData}
          value={selectMajor}
          setValue={setSelectMajor}
          category='학과'
          data={SCHOOL_DDDEP_NM}
        />
      )}
      <Input
        setValue={setGrade}
        value={grade}
        category='학년'
        inputChange={handleChange(setGrade, setUserGrade)}
        placeholder='학년을 입력하세요'
      />
      <Input
        setValue={setMyClass}
        value={myClass}
        category='반'
        inputChange={handleChange(setMyClass, setUserClass)}
      />
    </S.Wrapper>
  )
}

export default Profile
