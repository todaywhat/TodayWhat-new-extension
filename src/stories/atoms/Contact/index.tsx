import Github from '../../icons/Github'
import * as S from './style'

const Contact = ({ ...props }) => {
  return (
    <S.Wrapper {...props}>
      <S.Discord>Discord: Yozora1264</S.Discord>
      <S.Github to='https://github.com/Ethen1264/TodayWhat-new-client'>
        <Github />
      </S.Github>
    </S.Wrapper>
  )
}

export default Contact
