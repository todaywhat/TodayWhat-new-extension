import { NoticeMock } from '@mocks/noticeMock'
import Logo from '@stories/atoms/Logo'
import Notification from '@stories/atoms/Notification'
import Return from '@stories/atoms/Return'
import { logEvent } from 'firebase/analytics'
import { Link } from 'react-router-dom'
import { analytics } from '@util/firebase'
import * as S from './style'

interface NoticeType {
  id: number
  title: string
  date: string
  contents: string
}

const handleNotice = () => {
  logEvent(analytics, 'notice')
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
            onClick={handleNotice}
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
