import { ReactNode } from 'react'
import * as S from './style'

interface Props {
  time?: string
  icons?: ReactNode
  subject?: string
}

const ScheduleList: React.FC<Props> = ({ time, icons, subject, ...props }) => {
  return (
    <S.Wrapper {...props}>
      <S.TextContainer>
        <S.TimeText>{time}</S.TimeText>
        {icons}
        <S.SubjectText>{subject}</S.SubjectText>
      </S.TextContainer>
    </S.Wrapper>
  )
}

export default ScheduleList
