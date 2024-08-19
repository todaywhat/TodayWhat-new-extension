import styled from 'styled-components'
import { Theme } from '../../../styles/theme'

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

export const SelectWrapper = styled.label`
  display: flex;
  justify-content: space-between;
  height: 3.25rem;
  padding: 0px 1rem;
  align-items: center;
  border-radius: 0.5rem;
  background-color: ${Theme.INPUT_BACKGROUND};

  &:hover {
    cursor: pointer;
  }
`

export const SelectText = styled.p`
  color: #1f1f1f;

  font-family: SUIT;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.3125rem;
`

export const Icon = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  justify-items: flex-end;

  > div {
    cursor: pointer;
  }
`

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 240px;
  overflow-y: auto;
  width: 21.4375rem;
  padding: 1.5rem;
  align-items: flex-start;
  border-radius: 0.75rem;
  background: #fff;
  box-shadow: 0rem 0.125rem 0.5rem 0rem rgba(0, 0, 0, 0.2);
`

export const Option = styled.div<{ isLast: boolean }>`
  display: flex;
  width: 100%;
  min-height: 3.3125rem;
  justify-content: space-between;
  align-items: center;
  ${(props) => !props.isLast && 'border-bottom: 0.0625rem solid #e9e9e9;'}

  &:hover {
    cursor: pointer;
  }
`

export const OptionText = styled.p`
  color: #1f1f1f;
  font-family: SUIT;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.3125rem;
`
