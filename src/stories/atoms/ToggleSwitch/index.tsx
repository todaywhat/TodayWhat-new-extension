import * as S from './style'

interface Props {
  isActive: boolean
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>
  settingKey: string
}

const ToggleSwitch: React.FC<Props> = ({
  isActive,
  setIsActive,
  settingKey,
  ...props
}) => {
  const toggleSwitch = () => {
    setIsActive((prevState) => !prevState)

    const updatedIsActive = !isActive

    if (typeof chrome !== 'undefined' && chrome.storage) {
      chrome.storage.sync.set({ [settingKey]: updatedIsActive })
    } else {
      localStorage.setItem(settingKey, JSON.stringify(updatedIsActive))
    }
  }

  return (
    <S.SwitchContainer {...props} isActive={isActive} onClick={toggleSwitch}>
      <S.SwitchButton isActive={isActive} />
    </S.SwitchContainer>
  )
}

export default ToggleSwitch
