import styled from 'styled-components'

const ReturnText = styled.p`
  color: #8e8e8e;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;

  &:hover {
    cursor: pointer;
  }
`

const Return = () => {
  return <ReturnText> 돌아가기</ReturnText>
}

export default Return
