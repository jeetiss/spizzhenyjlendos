import { lifecycle } from 'recompose'

const analytics = lifecycle({
  componentDidMount () {
    window.mixpanel && window.mixpanel.track('open site')
  }
})

export default analytics
