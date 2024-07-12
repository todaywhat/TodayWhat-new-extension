import * as S from './style'

interface Props {
  title: string
  date: string
  contents: string
}

const Notification: React.FC<Props> = ({ title, date, contents, ...props }) => {
  return (
    <S.Wrapper {...props}>
      <S.TitleContainer>
        <S.Title>{title}</S.Title>
        <S.Date>{date}</S.Date>
      </S.TitleContainer>
      <S.ContentsContainer>
        <S.Contents>{contents}</S.Contents>
      </S.ContentsContainer>
    </S.Wrapper>
  )
}

export default Notification
