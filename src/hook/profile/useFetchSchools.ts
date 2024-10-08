import { useEffect } from 'react'
import { School } from 'types/school'
import getSchool from '@apis/Profile/getSchool'

const useFetchSchools = (
  keyword: string,
  SCHUL_NM: string,
  setSearchSchools: React.Dispatch<React.SetStateAction<School[]>>,
  setLoading: (loading: boolean) => void,
) => {
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

  const fetchSchools = async (searchKeyword: string) => {
    setLoading(true)
    try {
      const data = await getSchool(searchKeyword)
      setSearchSchools(data && data.length > 0 ? data : [])
    } catch (error) {
      setSearchSchools([])
    } finally {
      setLoading(false)
    }
  }
}

export default useFetchSchools
