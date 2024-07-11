import { useNavigate } from 'react-router-dom'
import * as S from './style'

interface Props {
  text?: string
  isActive?: boolean
}

const CheckButton: React.FC<Props> = ({ text, isActive = true, ...props }) => {
  const navigate = useNavigate()
  const handleButton = () => {
    if (isActive) navigate('/')
  }
  return (
    <S.Wrapper onClick={handleButton} isActive={isActive}>
      <S.Text isActive={isActive} {...props}>
        {text}
      </S.Text>
    </S.Wrapper>
  )
}

export default CheckButton
