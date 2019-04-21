import { element, grab } from '../utils/DOMHelp/boxes';

export const buildErrorComponent = (errorMessage) => {
  grab('container').append(element({
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