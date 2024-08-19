import styled from 'styled-components'
import { Theme } from '../../../styles/theme'
import { InputWrapperProps } from './type'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Category = styled.p`
  color: ${Theme.TEXT};
  font-family: SUIT;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3125rem;
`

export const InputWrapper = styled.label<InputWrapperProps>`
  display: flex;
  height: 3.25rem;
  padding: 0px 1rem;
  align-items: center;
  border-radius: 0.5rem;
  background-color: ${Theme.INPUT_BACKGROUND};
  border: 1px solid transparent;

  &:focus-within {
    border: 1px solid ${({ isFocused }) => (isFocused ? '#000' : 'transparent')};
  }
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;

  color: ${Theme.TEXT};
  font-family: SUIT;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;

  &::placeholder {
    color: ${Theme.SERVE_TEXT};
  }
`

export const Icon = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  justify-items: flex-end;

  > div {
    cursor: pointer;
  }
`

export const ResetButton = styled.button`
  border: none;
  height: 100%;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`
