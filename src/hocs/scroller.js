import { withState, withHandlers, lifecycle, compose } from 'recompose'

const scroller = compose(
  withState('scroll', 'setScroll', 0),
  withHandlers({
    onScroll: ({ setScroll }) => () =>
      setScroll(
        Math.max(document.body.scrollTop, document.documentElement.scrollTop)
      )
  }),
  lifecycle({
    componentDidMount () {
      window.addEventListener('scroll', this.props.onScroll)
    },
    componentWillUnmount () {
      window.removeEventListener('scroll', this.props.onScroll)
    }
  })
)

export default scroller
