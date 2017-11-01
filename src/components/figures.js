import React from 'react'
import styled from 'react-emotion'

const BoxWithotStyles = ({ className, style, children }) => (
  <svg
    className={className}
    style={style}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 5 5'
  >
    {children}
  </svg>
)

const Box = styled(BoxWithotStyles)`
  position: absolute;
  width: 150vmax;
  height: 150vmax;
  transform-origin: 50% 50%;

  fill: ${props => props.color || 'wheat'};
`

export const Triangle = props => (
  <Box {...props}><polygon points='4,0 5,5 0,3' /></Box>
)

export const Circle = props => (
  <Box {...props}><circle cx='2.5' cy='2.5' r='2.5' /></Box>
)

export const Stick = props => (
  <Box {...props}>
    <rect x='0' y='2.3' width='5' height='0.4' />
  </Box>
)

export const Square = props => (
  <Box {...props}>
    <rect x='0' y='0' width='5' height='5' />
  </Box>
)
