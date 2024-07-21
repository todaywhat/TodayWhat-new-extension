import { NoticeMock } from '@mocks/noticeMock'
import Logo from '@stories/atoms/Logo'
import NoticeDetailContent from '@stories/atoms/NoticeDetailContent'
import Return from '@stories/atoms/Return'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as S from './style'

interface Notice {
  id: number
  title: string
  date: string
  contents: string
}

const NoticeDetail = () => {
  const { id } = useParams<{ id: string }>()
  const [notice, setNotice] = useState<Notice | null>(null)

  useEffect(() => {
    if (id !== undefined) {
      const foundNotice = NoticeMock.find(
        (notice) => notice.id === parseInt(id, 10),
      )
      if (foundNotice) {
        setNotice(foundNotice)
      }
    }
  }, [id])

  if (!notice) {
    return null
  }

  return (
    <S.Wrapper>
      <S.Header>
        <Logo />
        <Return />
      </S.Header>
      <NoticeDetailContent
        title={notice.title}
        date={notice.date}
        contents={notice.contents}
      />
    </S.Wrapper>
  )
}

export default NoticeDetail
