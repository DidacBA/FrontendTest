import { createElement, grab } from '../utils/DOMHelp/boxes';

export const buildErrorComponent = (errorMessage) => {
  grab('container').append(createElement({
    tagName: 'div',
    attributes: {
      id: 'error',
      class: 'error-msg',
    },
    text: `${errorMessage}`
  }))

  setTimeout(() => {
    grab('error').remove();
  }, 5000)
}