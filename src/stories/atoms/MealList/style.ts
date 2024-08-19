import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 3.25rem;
  padding: 0px 0.75rem;
  justify-content: space-between;
  align-items: center;

  border-radius: 0.5rem;
  background: #f8f8f8;
`

export const Text = styled.p`
  color: #1f1f1f;
  font-family: SUIT;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const Icon = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  justify-items: flex-end;

  > div {
    cursor: pointer;
  }
`

export const AllergiesIcon = styled.div`
  border: none;
  height: 100%;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`
