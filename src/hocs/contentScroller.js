import { withProps } from 'recompose'
import { last } from '../utils'

const contentScroller = withProps(
  ({ sizesMap, bindedElements, scroll, allHeight }) => {
    const displayElementIndex = sizesMap.findIndex(
      (value, index, map) => value <= scroll && scroll <= map[index + 1]
    )
    const [displayElement] =
      bindedElements[displayElementIndex] || last(bindedElements)
    const content = displayElement(
      scroll - sizesMap[displayElementIndex],
      sizesMap[displayElementIndex + 1] - sizesMap[displayElementIndex]
    )

    return { content, allHeight }
  }
)

export default contentScroller
