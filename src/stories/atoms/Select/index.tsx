import React, { useState } from 'react'
import DRadio from '../../assets/svg/DRadio'
import Radio from '../../assets/svg/Radio'
import Down from '../../icons/Down'
import Up from '../../icons/UP'
import * as S from './style'

interface Props {
  category: string
}

const Select: React.FC<Props> = ({ category, ...props }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectOption, setSelectOption] = useState<string>('')

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
  ]

  const onClickOption = (optionLabel: string) => {
    setSelectOption(optionLabel)
    setIsOpen(false)
  }

  return (
    <S.Wrapper>
      <S.Category>{category}</S.Category>
      <S.SelectWrapper {...props} onClick={handleToggle}>
        <S.SelectText>{selectOption}</S.SelectText>
        <S.Icon>{isOpen ? <Up /> : <Down />}</S.Icon>
      </S.SelectWrapper>
      {isOpen && (
        <S.OptionWrapper>
          {options.map((option, index) => (
            <S.Option
              onClick={() => onClickOption(option.label)}
              key={option.value}
              isLast={index === options.length - 1}
            >
              <S.OptionText>{option.label}</S.OptionText>
              <S.Icon>
                {option.label === selectOption ? <Radio /> : <DRadio />}
              </S.Icon>
            </S.Option>
          ))}
        </S.OptionWrapper>
      )}
    </S.Wrapper>
  )
}

export default Select
