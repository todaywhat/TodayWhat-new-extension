import * as S from './style'

interface Props {
  text?: string
}

const TimeButton: React.FC<Props> = ({ text, ...props }) => {
  return (
    <S.Wrapper {...props}>
      <S.Text>{text}</S.Text>
    </S.Wrapper>
  )
}

export default TimeButton
