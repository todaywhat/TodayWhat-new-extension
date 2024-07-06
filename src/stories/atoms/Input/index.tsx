import React, { DetailedHTMLProps, InputHTMLAttributes, useState } from 'react'
import { XmarkCircle } from '../../icons/index'
import * as S from './style'

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  category: string
}

const Input: React.FC<Props> = ({ category, ...props }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const resetHandler = () => {
    setValue('')
  }

  return (
    <S.Wrapper>
      <S.Category>{category}</S.Category>
      <S.InputWrapper isFocused={isFocused}>
        <S.Input
          {...props}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false)
          }}
          onChange={onChange}
          value={value}
        />
        <S.Icon>
          <S.ResetButton
            type='button'
            style={{ display: value.length ? 'block' : 'none' }}
            onClick={resetHandler}
          >
            <XmarkCircle />
          </S.ResetButton>
        </S.Icon>
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export default Input
