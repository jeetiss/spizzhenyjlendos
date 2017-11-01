import React from 'react'
import styled from 'react-emotion'

import { fullScreen } from './styled'

const FullScreen = styled('div')`
  position: absolute;

  ${fullScreen}

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => (props.color ? props.color : 'white')}
`

const Page = ({ children, color, style }) => (
  <FullScreen style={style} color={color}>{children}</FullScreen>
)

export default Page
