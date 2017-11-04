import React from 'react'
import styled from 'react-emotion'
import isTouchDevice from 'is-touch-device'
import DeadHead from './DeadHead'
import Mouse from './Mouse'
import Hand from './Hand'

import { fullScreen } from './styled'
import { phone } from '../utils'

const FullScreen = styled('section')`
  position: absolute;
  
  ${fullScreen}

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;

  pointer-events: none;
  
  & > svg {
    fill: #1cb767;
    width: 85vmin;

    pointer-events: none;
  }
`

const Scroll = styled('div')`
  position: absolute;

  bottom: 15px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  
  & > svg {
    fill: #1cb767;
    width: 40px;
    height: 40px;

    @media ${phone} {
      width: 20px;
      height: 20px;
    }
  }
`

const PageWithDeadHead = ({ style }) => (
  <FullScreen style={style}>
    <DeadHead />
    <Scroll>
      {isTouchDevice() ? <Hand /> : <Mouse />}
    </Scroll>
  </FullScreen>
)

export default PageWithDeadHead
