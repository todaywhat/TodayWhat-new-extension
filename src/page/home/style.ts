import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 19rem;
  height: 15.625rem;
  display: inline-flex;
  padding: 2rem 2.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;

  border-radius: 1.25rem;
  background: #fff;
`

export const NavigateWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 0.75rem;
`
