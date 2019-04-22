import { element, grab, DOMScrubber } from '../utils/DOMHelp/DOM';

export const buildLoading = (text) => {
  grab('container').append(element({
    tagName: 'div',
    attributes: {
      id: 'loading',
      class: 'loading',
    },
    text
  }));
}