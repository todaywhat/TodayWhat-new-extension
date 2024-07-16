import { ReactNode } from 'react'
import * as S from './style'

interface Props {
  text: string
  icons: ReactNode
  components: ReactNode
}

const SettingList: React.FC<Props> = ({
  text,
  icons,
  components,
  ...props
}) => {
  return (
    <S.Wrapper {...props}>
      <S.TitleContainer>
        <S.IconContainer>
          <S.Icon>{icons}</S.Icon>
        </S.IconContainer>
        <S.Title>{text}</S.Title>
      </S.TitleContainer>
      {components}
    </S.Wrapper>
  )
}

export default SettingList
