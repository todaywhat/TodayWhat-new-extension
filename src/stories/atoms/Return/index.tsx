import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ReturnText = styled(Link)`
  color: #8e8e8e;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  text-decoration: none;
`

const Return = () => {
  return <ReturnText to='/'> 돌아가기</ReturnText>
}

export default Return
