import { createElement, grab } from './utils/DOMHelp/boxes';

export const buildErrorComponent = () => {
  grab('container').append(createElement({
    tagName: 'div',
    attributes: {
      id: 'error',
      class: 'error-msg',
    },
    text: 'Does not exist'
  }))
}