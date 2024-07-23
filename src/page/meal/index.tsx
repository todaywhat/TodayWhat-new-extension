import DateButton from '@components/DateButton'
import FilterMealList from '@components/FilterMealList'
import MealButton from '@components/MealButton'
import { useGetAllergy } from '@hook/profile/useGetAllergy'
import { Rice } from '@stories/assets/svg'
import Logo from '@stories/atoms/Logo'
import Return from '@stories/atoms/Return'
import { useQuery } from '@tanstack/react-query'
import { useMemo, useState } from 'react'
import { useCookies } from 'react-cookie'
import { MealResponse, ProcessedMealData } from 'types/meal'
import getMeal from '@apis/Meal/getMeal'
import * as S from './style'

const Meal = () => {
  const [cookies] = useCookies(['ATPT_OFCDC_SC_CODE', 'SD_SCHUL_CODE'])
  const [currentDate, setCurrentDate] = useState<Date>(new Date())
  const [mealNumber, setMealNumber] = useState<number>(1)
  const [selectedAllergies, setSelectedAllergies] = useState<number[]>([])

  useGetAllergy(setSelectedAllergies)

  const { data, isLoading } = useQuery<MealResponse>({
    queryKey: ['mealData', currentDate],
    queryFn: () => getMeal(cookies, currentDate),
    staleTime: 5 * 60 * 1000,
  })

  const mealData: ProcessedMealData = useMemo(() => {
    if (data && data[mealNumber]) {
      const meals = data[mealNumber]?.DDISH_NM.split('<br/>')
        .map((meal) => meal.trim())
        .filter((meal) => meal !== '')
      const calories = data[mealNumber]?.CAL_INFO
      return { mealData: meals, calInfo: calories }
    }

    return {
      mealData: ['급식이 없습니다.'],
      calInfo: '칼로리 정보가 없습니다.',
    }
  }, [mealNumber, data])

  const renderTimeButton = () => {
    return (
      <>
        {mealNumber === 0 && <p>아침</p>}
        {mealNumber === 1 && <p>점심</p>}
        {mealNumber === 2 && <p>저녁</p>}
      </>
    )
  }

  return (
    <S.Wrapper>
      <S.Header>
        <Logo />
        <Return />
      </S.Header>
      <S.NavContainer>
        <S.ButtonContainer>
          <DateButton setCurrentDate={setCurrentDate} />
          <MealButton setMealNumber={setMealNumber} />
        </S.ButtonContainer>
        <Rice />
      </S.NavContainer>
      <S.MealCalorieInfoCotainer>
        {renderTimeButton()}
        {isLoading ? '로딩 중...' : mealData.calInfo}
      </S.MealCalorieInfoCotainer>
      <S.MealListContainer>
        {isLoading ? (
          <p>로딩중...</p>
        ) : (
          <FilterMealList
            mealData={mealData.mealData}
            selectedAllergies={selectedAllergies}
          />
        )}
      </S.MealListContainer>
    </S.Wrapper>
  )
}

export default Meal
