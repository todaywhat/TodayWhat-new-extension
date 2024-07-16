import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Discord = styled.p`
  color: #8e8e8e;
  font-family: SUIT;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3125rem;
`

export const Github = styled(Link)`
  display: flex;
  width: 1.5rem;
  height: 1.5rem;
  justify-content: center;
  align-items: center;
  color: #8e8e8e;
`
