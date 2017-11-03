import React from 'react'
import styled, { css } from 'react-emotion'
import { phone } from '../utils'

export const fullScreen = css`
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`

export const FullScreen = styled('section')`
  position: absolute;
  ${fullScreen}
`

export const PageContainer = styled('section')`
  position: absolute;

  ${fullScreen}

  display: grid;

  background-color: ${props => props.background || '#dfefe7'};

  padding: 60px;

  grid-template-rows: 1fr min-content min-content 1fr;
  grid-template-columns: fit-content(1024px);
  grid-gap: 15px;

  justify-content: center;

  pointer-events: none;

  @media ${phone} {
    padding: 15px;
  }
`

export const H1 = styled('h1')`
  align-self: end;
  color: ${props => props.color || '#000'};
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 800;
  pointer-events: none;

  @media ${phone} {
    font-size: 10px;
  }
`

export const P = styled('p')`
  color: ${props => props.color || '#000'};
  margin: 0;
  letter-spacing: 0.2px;
  line-height: 70px;
  font-family: 'Roboto', sans-serif;
  font-size: 69px;
  font-weight: 800;
  pointer-events: none;

  & + & {
    margin-top: 20px;
  }

  @media ${phone} {
    font-size: 28px;
    line-height: 30px;
  }
`

export const NoWrap = styled('span')`
  white-space: nowrap;

  pointer-events: none;
`

const A = props => (
  <a
    {...props}
    onClick={e => {
      window.mixpanel && window.mixpanel.track('open link', { domain: props.href })
    }}
  />
)

export const Link = styled(A)`
  display: inline;
  color: ${props => props.color || '#000'};
  font-weight: 800;
  text-decoration: none;
  padding-bottom: 7px;
  pointer-events: auto;

  &:hover {
    background-image: ${props => `linear-gradient(to right, ${props.color || '#000'} 0%, ${props.color || '#000'} 100%)`};
    background-size: 100% 2px;
    background-position: 0 100%;
    background-repeat: no-repeat;
  }
`

export const Colored = styled('span')`
  color: ${props => props.color || '#fff'};
`

export const Footer = styled('footer')`
  color: ${props => props.color || '#000'};
  line-height: 28px;
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  font-weight: 100;
  pointer-events: none;

  @media ${phone} {
    font-size: 14px;
    line-height: 20px;
  }
`

export const Copywrite = styled('div')`
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 100;
  align-self: end;
  text-align: end;
`
