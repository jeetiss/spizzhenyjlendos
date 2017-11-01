import React from 'react'
import { injectProps, normalize } from '../utils'
import { Circle, Triangle, Square, Stick } from '../components/figures'
import { FullScreen } from '../components/styled'

const transform = (value, from = 0, to = 0) =>
  `
  translate(-50%, -50%)
  scale(${value})
  ${from !== to ? `rotate(${from + (to - from) * value}deg)` : ''}
`

const fresh = (prev, next, scroll, size) => [
  injectProps(prev, {
    key: 'one'
  }),

  <FullScreen key='tree'>
    <Circle
      color='#fafafa'
      style={{
        top: 'calc( 50% - 7.1vmin )',
        left: 'calc( 50% + 14.3vmin )',
        transform: transform(normalize(scroll, size / 3, 25))
      }}
    />
    <Circle
      color='#fafafa'
      style={{
        top: 'calc( 50% - 15.5vmin )',
        left: 'calc( 50% - 10vmin )',
        transform: transform(normalize(scroll, size, 99))
      }}
    />
    <Circle
      color='#fafafa'
      style={{
        top: 'calc( 50% + 6.9vmin )',
        left: '50%',
        transform: transform(normalize(scroll, size, 101))
      }}
    />
    <Circle
      color='#fafafa'
      style={{
        top: 'calc( 50% + 8.9vmin )',
        left: 'calc( 50% + 18.7vmin )',
        transform: transform(normalize(scroll, size, 105))
      }}
    />

    <Triangle
      color='#37356c'
      style={{
        top: '30vh',
        left: '35vw',
        transform: transform(normalize(scroll, size / 3, size / 5), 80, 30)
      }}
    />
    <Triangle
      color='#37356c'
      style={{
        top: '60vh',
        left: '33vw',
        transform: transform(normalize(scroll, size / 3, size / 5), -15, 90)
      }}
    />
    <Triangle
      color='#37356c'
      style={{
        top: '21vh',
        left: '64vw',
        transform: transform(normalize(scroll, size / 3, size / 5), -15, 20)
      }}
    />
    <Triangle
      color='#37356c'
      style={{
        top: '63vh',
        left: '58vw',
        transform: transform(normalize(scroll, size / 3, size / 5), 30, 19)
      }}
    />

    <Stick
      color='#7cef9d'
      style={{
        top: '41vh',
        left: '22vw',
        transform: transform(normalize(scroll, size / 2, size / 5 * 2), 30, 60)
      }}
    />
    <Stick
      color='#7cef9d'
      style={{
        top: '54vh',
        left: '40vw',
        transform: transform(
          normalize(scroll, size / 2, size / 5 * 2),
          120,
          90
        )
      }}
    />
    <Stick
      color='#7cef9d'
      style={{
        top: '21vh',
        left: '64vw',
        transform: transform(
          normalize(scroll, size / 2, size / 5 * 2),
          45,
          -45
        )
      }}
    />
    <Stick
      color='#7cef9d'
      style={{
        top: '61vh',
        left: '51vw',
        transform: transform(normalize(scroll, size / 2, size / 5 * 2), 0, 20)
      }}
    />

    <Circle
      color='#4993db'
      style={{
        top: '59vh',
        left: '35vw',
        transform: transform(normalize(scroll, size / 3, size / 5 * 3))
      }}
    />
    <Circle
      color='#4993db'
      style={{
        top: '40vh',
        left: '38vw',
        transform: transform(normalize(scroll, size / 3, size / 5 * 3))
      }}
    />
    <Circle
      color='#4993db'
      style={{
        top: '37vh',
        left: '63vw',
        transform: transform(normalize(scroll, size / 3, size / 5 * 3))
      }}
    />
    <Circle
      color='#4993db'
      style={{
        top: '62vh',
        left: '69vw',
        transform: transform(normalize(scroll, size / 3, size / 5 * 3))
      }}
    />

    <Square
      color='#dfefe7'
      style={{
        top: '37vh',
        left: '32vw',
        transform: transform(
          normalize(scroll, size / 3, size / 5 * 4 - 100),
          40,
          60
        )
      }}
    />
    <Square
      color='#dfefe7'
      style={{
        top: '54vh',
        left: '40vw',
        transform: transform(
          normalize(scroll, size / 3, size / 5 * 4 - 100),
          35,
          20
        )
      }}
    />
    <Square
      color='#dfefe7'
      style={{
        top: '21vh',
        left: '64vw',
        transform: transform(
          normalize(scroll, size / 3, size / 5 * 4 - 100),
          40,
          30
        )
      }}
    />
    <Square
      color='#dfefe7'
      style={{
        top: '61vh',
        left: '51vw',
        transform: transform(
          normalize(scroll, size / 3, size / 5 * 4 - 100),
          0,
          45
        )
      }}
    />
    <Square
      color='#dfefe7'
      style={{
        top: '45vh',
        left: '71vw',
        transform: transform(
          normalize(scroll, size / 3, size / 5 * 4 - 100),
          -10,
          -65
        )
      }}
    />
  </FullScreen>,

  injectProps(next, {
    key: 'two',
    style: {
      opacity: `${normalize(scroll, 100, size - 100)}`,
      transform: `translateY(${50 * (1 - normalize(scroll, 100, size - 100))}px)`
    }
  })
]

export default fresh
