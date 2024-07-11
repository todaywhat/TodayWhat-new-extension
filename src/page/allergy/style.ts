import styled from 'styled-components'

interface AllergyProps {
  isSelected: boolean
}

export const Wrapper = styled.div`
  width: 39.75rem;
  height: 36.3125rem;
  border-radius: 1.25rem;
  background: #fff;
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const Title = styled.p`
  color: #1f1f1f;
  font-family: SUIT;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
`

export const AllergyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0.75rem;
  grid-row-gap: 1rem;
`

export const Allergy = styled.div<AllergyProps>`
  display: flex;
  width: 8.125rem;
  height: 3.5rem;
  padding: 1rem 1.25rem;
  align-items: center;
  gap: 0.625rem;
  background-color: transparent;

  border-radius: 0.75rem;
  border: 1px solid ${({ isSelected }) => (isSelected ? ' black' : '#ddd')};
  cursor: pointer;

  color: #8e8e8e;
  text-align: center;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
