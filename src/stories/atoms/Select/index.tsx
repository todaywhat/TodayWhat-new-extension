import React, { useState } from 'react'
import DRadio from '../../assets/svg/DRadio'
import Radio from '../../assets/svg/Radio'
import Down from '../../icons/Down'
import Up from '../../icons/UP'
import * as S from './style'

interface Props {
  category: string
  data: string[]
  cookie: (value: string) => void
  setValue: (value: string) => void
  value: string
}

const Select: React.FC<Props> = ({
  cookie,
  value,
  setValue,
  category,
  data,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false)

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
        <S.Icon>{isOpen ? <Up /> : <Down />}</S.Icon>
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
