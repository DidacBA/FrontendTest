import { element, grab, DOMScrubber } from '../utils/DOMHelp/boxes';

export const buildErrorComponent = (text) => {
  DOMScrubber(['loading']);

  grab('container').append(element({
    tagName: 'div',
    attributes: {
      id: 'error',
      class: 'error-msg',
    },
    text
  }));

  setTimeout(() => {
    grab('error') ? grab('error').remove() : null;
  }, 5000);
}