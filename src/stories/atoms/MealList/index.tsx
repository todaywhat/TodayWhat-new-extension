import { ReactNode } from 'react'
import * as S from './style'

interface Props {
  text?: string
  icons?: ReactNode
}

const MealList: React.FC<Props> = ({ text, icons, ...props }) => {
  return (
    <S.Wrapper {...props}>
      <S.Text>{text}</S.Text>
      <S.Icon>
        <S.AllergiesIcon>{icons}</S.AllergiesIcon>
      </S.Icon>
    </S.Wrapper>
  )
}

export default MealList
