import React, { useState, ChangeEvent, useEffect } from 'react'
import { School } from 'types/school'
import useUserData from '@util/lib/userData'
import useProfileCookie from '../../hook/cookie/useProfileCookie'
import useFetchDepartments from '../../hook/profile/useFetchDepartments'
import useFetchSchools from '../../hook/profile/useFetchSchools'
import Input from '../../stories/atoms/Input'
import Logo from '../../stories/atoms/Logo'
import Return from '../../stories/atoms/Return'
import SearchList from '../../stories/atoms/SearchList'
import Select from '../../stories/atoms/Select'
import * as S from './style'

const Profile: React.FC = () => {
  const cookies = useProfileCookie()
  const { SCHUL_NM, USER_GRADE, USER_CLASS, SCHOOL_DDDEP_NM, USER_DDDEP_NM } =
    cookies

  const [keyword, setKeyword] = useState<string>('')
  const [grade, setGrade] = useState<string>('')
  const [myClass, setMyClass] = useState<string>('')
  const [selectMajor, setSelectMajor] = useState<string>('')
  const [searchSchools, setSearchSchools] = useState<School[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const { setUserSchoolData, setUserGrade, setUserClass, setUserMajorData } =
    useUserData()

  useFetchSchools(keyword, SCHUL_NM, setSearchSchools)
  const fetchDepartments = useFetchDepartments()

  useEffect(() => {
    setKeyword(SCHUL_NM || '')
    setGrade(USER_GRADE || '')
    setMyClass(USER_CLASS || '')
    setSelectMajor(USER_DDDEP_NM || '')
  }, [SCHUL_NM, USER_GRADE, USER_CLASS, USER_DDDEP_NM])

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

  const handleSelectSchool = (school: School) => {
    setUserSchoolData(
      school.SCHUL_NM,
      school.ATPT_OFCDC_SC_CODE,
      school.SD_SCHUL_CODE,
      school.SCHUL_KND_SC_NM,
    )
    setKeyword(school.SCHUL_NM)
    setSearchSchools([])
    if (school.ATPT_OFCDC_SC_CODE) {
      fetchDepartments(
        school.ATPT_OFCDC_SC_CODE,
        school.SD_SCHUL_CODE,
        setSelectMajor,
      )
    }
  }

  return (
    <S.Wrapper>
      <S.Header>
        <Logo />
        <Return />
      </S.Header>
      <S.InputContainer>
        <S.SearchContiner>
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
        </S.SearchContiner>
        {searchSchools.length === 0 && (
          <>
            {Array.isArray(SCHOOL_DDDEP_NM) && SCHOOL_DDDEP_NM.length > 0 && (
              <Select
                cookie={setUserMajorData}
                value={selectMajor}
                setValue={setSelectMajor}
                category='학과'
                data={SCHOOL_DDDEP_NM}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            )}
            {!isOpen && (
              <>
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
                  placeholder='반을 입력해주세요.'
                />
              </>
            )}
          </>
        )}
      </S.InputContainer>
    </S.Wrapper>
  )
}

export default Profile
