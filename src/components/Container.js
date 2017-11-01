import React from 'react'
import styled from 'react-emotion'
import { compose } from 'recompose'

import sizer from '../hocs/sizer'
import scroller from '../hocs/scroller'
import contentScroller from '../hocs/contentScroller'
import distanceMaker from '../hocs/distanceMaker'

import { fullScreen } from './styled'

const ScrollSpacer = styled('div')`
  width: 100%;
  
  pointer-events: none;
`

const ContainerWrapper = styled('div')`
  pointer-events: none;
`

const Content = styled('main')`
  position: fixed;  

  ${fullScreen}

  z-index: 10;

  pointer-events: none;
`

const Container = ({ content, allHeight }) => (
  <ContainerWrapper>
    <Content>
      {content}
    </Content>

    <ScrollSpacer style={{ paddingTop: `${allHeight}px` }} />
  </ContainerWrapper>
)

export default compose(sizer, distanceMaker, scroller, contentScroller)(
  Container
)
