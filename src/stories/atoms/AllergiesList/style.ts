import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  text-decoration: none;
  cursor: pointer;
`

export const Allergies = styled.p`
  max-width: 211px;
  color: #8e8e8e;
  font-family: SUIT;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3125rem;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const Icon = styled.div`
  display: flex;
  width: 1.375rem;
  height: 1.5rem;
  justify-content: center;
  align-items: center;
`
