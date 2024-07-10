import * as S from './style'

interface SearchListProps {
  onclick: () => void
  school: string
  location: string
}

const SearchList: React.FC<SearchListProps> = ({
  onclick,
  school,
  location,
}) => {
  return (
    <S.Wrapper onClick={onclick}>
      <S.SchoolName>{school}</S.SchoolName>
      <S.Location>{location}</S.Location>
    </S.Wrapper>
  )
}

export default SearchList
