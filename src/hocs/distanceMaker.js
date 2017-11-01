import { withProps } from 'recompose'
import { last, flatten } from '../utils'

const binder = (element, index, children) => {
  if (typeof element === 'function') {
    return [element.bind(null, children[index - 1], children[index + 1]), 500]
  } else if (element.animation) {
    const { animation, size } = element

    return [
      animation.bind(null, children[index - 1], children[index + 1]),
      size
    ]
  }

  return [() => element, element.props.size]
}

const distanceMaker = withProps(({ children, size: height }) => {
  const bindedElements = flatten(Array.from(children)).map(binder)

  const sizesMap = bindedElements.reduce(
    (map, [, size]) => [...map, last(map) + size],
    [0]
  )

  return {
    allHeight: last(sizesMap) + height,
    sizesMap,
    bindedElements
  }
})

export default distanceMaker
