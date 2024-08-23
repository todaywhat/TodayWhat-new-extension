import { DRadio, Radio } from '../../assets/svg/index'
import { DownTriangle, UpTriangle } from '../../icons/index'
import * as S from './style'

interface Props {
  category: string
  data: string[]
  cookie: (value: string) => void
  setValue: (value: string) => void
  value: string
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

const Select: React.FC<Props> = ({
  cookie,
  value,
  setValue,
  category,
  data,
  isOpen,
  setIsOpen,
  ...props
}) => {
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const onClickOption = (optionLabel: string) => {
    setValue(optionLabel)
    cookie(optionLabel)
    setIsOpen(false)
  }

  return (
    <S.Wrapper>
      <S.Category>{category}</S.Category>
      <S.SelectWrapper {...props} onClick={handleToggle}>
        <S.SelectText>{value}</S.SelectText>
        <S.Icon>{isOpen ? <UpTriangle /> : <DownTriangle />}</S.Icon>
      </S.SelectWrapper>
      {isOpen && (
        <S.OptionWrapper>
          {data.map((option, index) => (
            <S.Option
              onClick={() => onClickOption(option)}
              key={option}
              isLast={index === data.length - 1}
            >
              <S.OptionText>{option}</S.OptionText>
              <S.Icon>{option === value ? <Radio /> : <DRadio />}</S.Icon>
            </S.Option>
          ))}
        </S.OptionWrapper>
      )}
    </S.Wrapper>
  )
}

export default Select
