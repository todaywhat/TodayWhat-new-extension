import Github from '../../icons/Github'
import * as S from './style'

const Contact = ({ ...props }) => {
  const handleLinkClick = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <S.Wrapper {...props}>
      <S.Discord>Discord: Yozora1264</S.Discord>
      <S.Github
        as='a'
        onClick={() =>
          handleLinkClick('https://github.com/Ethen1264/TodayWhat-new-client')
        }
      >
        <Github />
      </S.Github>
    </S.Wrapper>
  )
}

export default Contact
