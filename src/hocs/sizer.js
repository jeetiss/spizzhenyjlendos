import {
  withState,
  withHandlers,
  lifecycle,
  compose
} from 'recompose'

const sizer = compose(
  withState('size', 'setSize', window.innerHeight),
  withState('lastUpdate', 'update', Date.now()),
  withHandlers({
    onResize: ({ setSize, update, size, lastUpdate }) => () => {
      const now = Date.now()

      if (
        size !== window.innerHeight &&
        now - lastUpdate < 100
      ) {
        console.log('fire')
        setSize(window.innerHeight)
      }

      update(now)
    }
  }),
  lifecycle({
    componentDidMount () {
      window.addEventListener('resize', this.props.onResize)
    },
    componentWillUnmount () {
      window.removeEventListener('resize', this.props.onResize)
    }
  })
)

export default sizer
