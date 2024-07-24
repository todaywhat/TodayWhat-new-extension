import styled, { keyframes } from 'styled-components'

export const SkeletonAnimation = keyframes`
  0% {
    background: hsl(200, 20%, 70%);
  }
  100% {
    background: hsl(200, 20%, 95%);
  }
`

interface TextProps {
  width?: string
  height?: string
}

export const SkeletonText = ({ width = '100%', height = '1em' }: TextProps) => {
  return <SkeletonTextStyle style={{ width, height }} />
}

const SkeletonTextStyle = styled.span`
  display: block;
  opacity: 0.7s;
  animation: ${SkeletonAnimation} 1s linear infinite alternate;
  border-radius: 0.25rem;
`
