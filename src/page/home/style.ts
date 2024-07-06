import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 348px;
  height: 315px;
  display: inline-flex;
  padding: 32px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;

  border-radius: 20px;
  background: #fff;
`

export const NavigateWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 0.75rem;
`
