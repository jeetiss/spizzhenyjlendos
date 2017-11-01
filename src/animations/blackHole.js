import React from 'react'
import { injectProps, normalize } from '../utils'
import { Circle, Triangle, Square, Stick } from '../components/figures'
import { FullScreen } from '../components/styled'

const transform = (value, from = 0, to = 0) =>
  `
  translate(-50%, -50%)
  translateY(-${value * 150}vh)
  ${from !== to ? `rotate(${from + (to - from) * value}deg)` : ''}
`

const transformScale = (value, from = 0, to = 0) =>
  `
  translate(-50%, -50%)
  scale(${value})
  ${from !== to ? `rotate(${from + (to - from) * value}deg)` : ''}
`

const blackHole = (prev, next, scroll, size) => [
  injectProps(prev, {
    key: 'one'
  }),

  <FullScreen key='ref'>
    <Square
      color='#ff6666'
      style={{
        width: '10vmax',
        height: '10vmax',
        top: '125vh',
        left: '45vw',
        transform: transform(normalize(scroll, size / 3, 25), 0, 360)
      }}
    />

    <Triangle
      color='#37356c'
      style={{
        width: '10vmax',
        height: '10vmax',
        top: '125vh',
        left: '63vw',
        transform: transform(normalize(scroll, size / 3, size / 6), -15, -300)
      }}
    />

    <Triangle
      color='#66ffd8'
      style={{
        width: '10vmax',
        height: '10vmax',
        top: '125vh',
        left: '33vw',
        transform: transform(normalize(scroll, size / 3, size / 4), 45, 390)
      }}
    />

    <Stick
      color='#ff7ad9'
      style={{
        width: '10vmax',
        height: '10vmax',
        top: '125vh',
        left: '68vw',
        transform: transform(normalize(scroll, size / 3, size / 3), 30, 360)
      }}
    />

    <Circle
      color='#000'
      style={{
        width: '210vmax',
        height: '210vmax',
        top: '99vh',
        left: '10vw',
        transform: transformScale(
          normalize(scroll, size / 3, size / 5 * 3 + 100)
        )
      }}
    />
    <Circle
      color='#000'
      style={{
        width: '210vmax',
        height: '210vmax',
        top: '99vh',
        left: '40vw',
        transform: transformScale(normalize(scroll, size / 3, size / 5 * 3))
      }}
    />
    <Circle
      color='#000'
      style={{
        width: '210vmax',
        height: '210vmax',
        top: '99vh',
        left: '60vw',
        transform: transformScale(normalize(scroll, size / 3, size / 5 * 3))
      }}
    />
    <Circle
      color='#000'
      style={{
        width: '210vmax',
        height: '210vmax',
        top: '99vh',
        left: '90vw',
        transform: transformScale(
          normalize(scroll, size / 3, size / 5 * 3 + 100)
        )
      }}
    />
  </FullScreen>,

  injectProps(next, {
    key: 'two',
    style: {
      transform: `translateY(${size - scroll}px)`
    }
  })
]

export default blackHole
