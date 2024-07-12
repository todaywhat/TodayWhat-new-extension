import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  useState,
} from 'react'
import { XmarkCircle } from '../../icons/index'
import * as S from './style'

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  category: string
  value: string
  cookie?: (value: string) => void
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const Input: React.FC<Props> = ({
  value,
  setValue,
  category,
  cookie,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const resetHandler = () => {
    setValue('')
  }

  const handleChange =
    (
      setter: React.Dispatch<React.SetStateAction<string>>,
      userDataSetter?: (value: string) => void,
    ) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setter(value)
      if (userDataSetter) {
        userDataSetter(value)
      }
    }

  return (
    <S.Wrapper>
      <S.Category>{category}</S.Category>
      <S.InputWrapper isFocused={isFocused}>
        <S.Input
          {...props}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={handleChange(setValue, cookie)}
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
