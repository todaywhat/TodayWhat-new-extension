import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 343px;
  height: 95px;
  border-radius: 16px;
  background: #f8f8f8;
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
`

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: center;
`

export const SchoolText = styled.p`
  color: #000;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const ClassText = styled.p`
  color: #3e3d3f;
  text-align: center;

  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  text-align: start;
`

export const RiceIcon = styled.div`
  align-self: self-end;
`
