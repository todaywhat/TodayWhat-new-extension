import { Stroke } from '../../assets/svg'
import * as S from './style'

interface Props {
  time?: string
  subject?: string
}

const ScheduleList: React.FC<Props> = ({ time, subject, ...props }) => {
  return (
    <S.Wrapper {...props}>
      <S.TextContainer>
        <S.TimeText>{time}</S.TimeText>
        <Stroke />
        <S.SubjectText>{subject}</S.SubjectText>
      </S.TextContainer>
    </S.Wrapper>
  )
}

export default ScheduleList
