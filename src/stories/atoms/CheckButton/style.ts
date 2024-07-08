import styled from 'styled-components'

interface ButtonProps {
  isActive: boolean
}

export const Wrapper = styled.button<ButtonProps>`
  display: flex;
  width: 21.4375rem;
  height: 3.25rem;
  padding: 1rem 0px;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background: #e9e9e9;
  background-color: ${(props) => (props.isActive ? '#000' : '#e9e9e9')};
  cursor: ${(props) => (props.isActive ? 'pointer' : 'default')};
`

export const Text = styled.p<ButtonProps>`
  color: ${(props) => (props.isActive ? '#fff' : '#8e8e8e')};
  text-align: center;
  font-family: SUIT;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
