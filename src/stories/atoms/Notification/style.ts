import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem 1.25rem;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 0.75rem;
  background: #f8f8f8;

  &:hover {
    cursor: pointer;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`

export const Title = styled.p`
  color: #000;
  font-family: SUIT;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const Date = styled.p`
  color: #8e8e8e;
  font-family: SUIT;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;
`

export const ContentsContainer = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  align-self: stretch;
`

export const Contents = styled.p`
  overflow: hidden;
  color: #3e3d3f;
  text-align: center;
  text-overflow: ellipsis;

  font-family: SUIT;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3125rem;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
