import { useState } from 'react'
import * as S from './style'

const ToggleSwitch: React.FC = (...props) => {
  const [isActive, setIsActive] = useState(false)

  const toggleSwitch = () => {
    setIsActive(!isActive)
  }

  return (
    <S.SwitchContainer {...props} isActive={isActive} onClick={toggleSwitch}>
      <S.SwitchButton isActive={isActive} />
    </S.SwitchContainer>
  )
}

export default ToggleSwitch
