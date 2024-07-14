import styled from 'styled-components'

interface SwitchProps {
  isActive: boolean
}

export const SwitchContainer = styled.div<SwitchProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 39px;
  height: 24px;
  background-color: ${(props) => (props.isActive ? '#1F1F1F' : '#E9E9E9')};
  border-radius: 15px;
  padding: 5px;
  position: relative;
`

export const SwitchButton = styled.div<SwitchProps>`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  position: absolute;

  left: ${(props) => (props.isActive ? '18px' : '2px')};
  transition: left 0.3s;
`
