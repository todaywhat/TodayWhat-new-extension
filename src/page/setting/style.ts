import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 26.4375rem;
  height: 37.5rem;

  border-radius: 1.25rem;
  background: #fff;
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  gap: 1.25rem;
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.p`
  color: #1f1f1f;
  font-family: SUIT;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.3125rem;
  margin-bottom: 0.75rem;
`

export const ProfileLink = styled(Link)`
  color: #8e8e8e;
  font-family: SUIT;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3125rem;
  align-self: self-end;
  text-decoration: none;
  margin-top: 0.25rem;
`

export const BodyContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  & > *:not(:last-child) {
    border-bottom: 1px solid #e9e9e9;
    padding-bottom: 1.25rem;
    margin-bottom: 1.25rem;
  }
`
