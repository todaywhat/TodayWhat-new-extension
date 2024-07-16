import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  width: 100%;
  /* margin: 1.25rem 0; */
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const IconContainer = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  justify-items: flex-end;
`

export const Icon = styled.div`
  border: none;
  height: 100%;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Title = styled.p`
  color: #000;
  font-family: SUIT;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3125rem;
`
