import React from 'react'

export const rafThrottle = callback => {
  let requestId

  const later = (context, args) => () => {
    requestId = null
    callback.apply(context, args)
  }

  const throttled = function (...args) {
    if (requestId === null || requestId === undefined) {
      requestId = window.requestAnimationFrame(later(this, args))
    }
  }

  throttled.cancel = () => window.cancelAnimationFrame(requestId)

  return throttled
}

export const flatten = arr =>
  arr.reduce(
    (arr, element) =>
      (Array.isArray(element) ? [...arr, ...element] : [...arr, element]),
    []
  )

export const last = arr => arr[arr.length - 1]

export const injectProps = (component, props) => (
  <component.type {...component.props} {...props} />
)

const minmax = (min, value, max) => Math.max(Math.min(value, max), min)
export const normalize = (value, max, delay) => minmax(0, (value - delay) / max, 1)

export const phone = '(max-width: 768px)'
