import './index.scss';
import { getProfileAndRepos } from './utils/api/api';
import { createElement, grabElement } from './utils/boxes/boxes';

(function() {
  grabElement('app').appendChild(createElement({
    tagName: 'div',
    attributes: {
      id: 'container',
      class: 'container',
    },
  }));
  
  grabElement('container').appendChild(createElement({
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
      class: 'srch-inp',
      type: 'search',
      placeholder: 'Search username...'
    }
  }), createElement({
    tagName: 'button',
    attributes: {
      id: 'button',
      class: 'btn'
    },
    text: 'Search'
  }))

  grabElement('button').addEventListener('click', async (event) => {
    event.preventDefault();
    const data = await getProfileAndRepos(grabElement('search-input').value);
    console.log(data);
  })
})()

