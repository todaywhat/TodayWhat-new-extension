import React from 'react'
import * as S from './style'

interface Props {
  text: string
  onClick?: () => void
  selected?: boolean
}

const TimeButton: React.FC<Props> = ({ text, onClick, selected, ...props }) => {
  return (
    <S.Wrapper onClick={onClick} selected={selected} {...props}>
      <S.Text>{text}</S.Text>
    </S.Wrapper>
  )
}

export default TimeButton
