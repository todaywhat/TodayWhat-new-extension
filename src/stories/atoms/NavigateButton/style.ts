import styled from 'styled-components'
import { Theme } from '../../../styles/theme'

export const Wrapper = styled.button`
  display: flex;
  padding: 1rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.75rem;
  outline: none;
  border: 0.0625rem solid ${Theme.GRAY};
  background-color: ${Theme.WHITE};
`

export const Text = styled.p`
  color: ${Theme.BLACK};
  text-align: center;
  font-family: SUIT;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: nowrap;
`
