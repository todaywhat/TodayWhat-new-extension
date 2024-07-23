import styled from 'styled-components'

interface AllergyProps {
  isSelected: boolean
}

export const Wrapper = styled.div`
  width: 423px;
  height: 600px;
  border-radius: 1.25rem;
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
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
  flex-direction: column;
  width: 70px;
  height: 80px;
  padding: 1rem 1.25rem;
  align-items: center;
  gap: 0.625rem;
  background-color: transparent;

  border-radius: 0.75rem;
  border: 2px solid ${({ isSelected }) => (isSelected ? ' black' : '#ddd')};
  cursor: pointer;

  color: #8e8e8e;
  text-align: center;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: nowrap;
`
