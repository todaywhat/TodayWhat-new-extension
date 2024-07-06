import * as S from './style'

interface Props {
  school?: string
  location?: string
}

const List: React.FC<Props> = ({ school, location, ...props }) => {
  return (
    <S.Wrapper {...props}>
      <S.SchoolName>{school}</S.SchoolName>
      <S.Location>{location}</S.Location>
    </S.Wrapper>
  )
}

export default List
