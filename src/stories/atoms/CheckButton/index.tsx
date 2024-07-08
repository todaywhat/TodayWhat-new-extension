import * as S from './style'

interface Props {
  text?: string
  isActive?: boolean
}

const CheckButton: React.FC<Props> = ({ text, isActive = false, ...props }) => {
  return (
    <S.Wrapper isActive={isActive} {...props}>
      <S.Text isActive={isActive} {...props}>
        {text}
      </S.Text>
    </S.Wrapper>
  )
}

export default CheckButton
