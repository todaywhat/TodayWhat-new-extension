import { Link } from 'react-router-dom'
import { NoticeMock } from '../../mocks/noticeMock'
import Logo from '../../stories/atoms/Logo'
import Notification from '../../stories/atoms/Notification'
import Return from '../../stories/atoms/Return'
import * as S from './style'

interface NoticeType {
  id: number
  title: string
  date: string
  contents: string
}

const Notice = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <Logo />
        <Return />
      </S.Header>
      <S.Title>공지사항</S.Title>
      <S.NoticeContainer>
        {NoticeMock.map((notice: NoticeType, index: number) => (
          <Link
            to={`/noticeDetail/${notice.id}`}
            key={index}
            style={{ textDecoration: 'none' }}
          >
            <Notification
              title={notice.title}
              date={notice.date}
              contents={notice.contents}
            />
          </Link>
        ))}
      </S.NoticeContainer>
    </S.Wrapper>
  )
}

export default Notice
