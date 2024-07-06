import { ButtonHTMLAttributes, ReactNode } from 'react'
import * as S from './style'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icons?: ReactNode
  text?: string
}

const NavigateButton: React.FC<Props> = ({ icons, text, ...props }) => {
  return (
    <S.Wrapper {...props}>
      {icons}
      <S.Text>{text}</S.Text>
    </S.Wrapper>
  )
}

export default NavigateButton
