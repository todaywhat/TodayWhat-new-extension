import * as S from './style'

interface Props {
  title: string
  date: string
  contents: string
}

const NoticeDetailContent: React.FC<Props> = ({
  title,
  date,
  contents,
  ...props
}) => {
  return (
    <S.Wrapper {...props}>
      <S.Date>{date}</S.Date>
      <S.Title>{title}</S.Title>
      <S.Content>{contents}</S.Content>
    </S.Wrapper>
  )
}

export default NoticeDetailContent
