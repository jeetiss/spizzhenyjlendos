import { lifecycle } from 'recompose'

const analytics = lifecycle({
  componentDidMount () {
    window.mixpanel.track('open site')
  }
})

export default analytics
