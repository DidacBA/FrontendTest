import './index.scss';
import { getProfileAndRepos } from './utils/api/api';
import { createElement, grabElement } from './utils/boxes/boxes';

(function() {
  grabElement('app').appendChild(createElement({
    tagName: 'div',
    attributes: {
      id: 'container',
      class: 'cntner',
    },
  }));
  
  grabElement('div-id').appendChild(createElement({
    tagName: 'form',
    attributes: {
      id: 'search-form',
      class: 'search-bar',
    }
  }))
  
  grabElement('search-form').append(createElement({
    tagName: 'input',
    attributes: {
      id: 'search-input',
      class: 'srch-inp'
    }
  }), createElement({
    tagName: 'button',
    attributes: {
      id: 'button',
      class: 'btn'
    },
    text: 'Search'
  }))
})()

