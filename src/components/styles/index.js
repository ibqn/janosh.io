import { css } from 'styled-components'

export * from './ButtonGroup'
export * from './Caption'
export * from './Grid'
export * from './PageBody'

export const fadeInOnHoverParent = parent => css`
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: 0.3s;
  ${parent}:hover &,
  ${parent}:focus-within & {
    opacity: 1;
    visibility: visible;
    pointer-events: initial;
  }
`
