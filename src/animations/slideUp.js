import { injectProps, normalize } from '../utils'

const slideUp = (prev, next, scroll, size) => {
  return [
    injectProps(prev, {
      style: {
        bottom: 'none',
        height: '120vh',
        transform: `translateY(-${size * normalize(scroll, size, 100)}px)`
      },
      key: 'one'
    }),

    injectProps(next, {
      key: 'two',
      style: {
        transform: `translateY(${(size + 200) * (1 - normalize(scroll, size, 0))}px)`
      }
    })
  ]
}

export default slideUp
