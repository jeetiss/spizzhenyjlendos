import React from 'react'
import { injectGlobal } from 'react-emotion'

import sizer from './hocs/sizer'
import analytics from './hocs/analytics'

import Container from './components/Container'
import PageWithDeadHead from './components/PageWithDeadHead'
import HelloPage from './components/HelloPage'
import SkillPage from './components/SkillPage'
import TitlesPage from './components/TitlesPage'

import slideUp from './animations/slideUp'
import fresh from './animations/fresh'
import blackHole from './animations/blackHole'

injectGlobal`
  body {
    background-color: #dfefe7;
    margin: 0;
  }
`

const App = ({ size: height }) => (
  <Container>
    <PageWithDeadHead size={height / 3} />

    {{ animation: fresh, size: height * 4 }}

    <HelloPage size={height} />

    {{ animation: slideUp, size: height }}

    <SkillPage size={height} />

    {{ animation: blackHole, size: height * 4 }}

    <TitlesPage size={height} />
  </Container>
)

export default analytics(sizer(App))
