import styled from 'styled-components'
import { Theme } from '../../../styles/theme'

export const Wrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  width: 100%;
  height: 3.3125rem;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  border-bottom: 1px solid #e9e9e9;

  &:hover {
    cursor: pointer;
  }
`

export const SchoolName = styled.p`
  color: ${Theme.TEXT};
  font-family: SUIT;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.3125rem;
`

export const Location = styled.p`
  color: ${Theme.SERVE_TEXT};
  font-family: SUIT;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
