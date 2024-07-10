import styled from 'styled-components'

interface WrapperProps {
  selected?: boolean
}

export const Wrapper = styled.button<WrapperProps>`
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  border-radius: 0.5rem;
  background: #fff;
  color: #1f1f1f;
  cursor: pointer;
  border: 0.0625rem solid #8e8e8e;

  ${(props) =>
    props.selected &&
    `
      background: #1f1f1f;
      color: #fff;
      border: none;
    `}
`

export const Text = styled.p`
  text-align: center;
  font-family: Inter;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
