import { getProfileAndRepos } from './utils/api/api';
import { createElement, grab } from './utils/DOMHelp/boxes';

export const buildMainComponent = async () => {
  await grab('app').appendChild(createElement({
    tagName: 'div',
    attributes: {
      id: 'container',
      class: 'container',
    },
  }));
  
  await grab('container').appendChild(createElement({
    tagName: 'form',
    attributes: {
      id: 'search-form',
      class: 'search-form',
    }
  }));
  
  await grab('search-form').append(createElement({
    tagName: 'input',
    attributes: {
      id: 'search-input',
      class: 'search-bar',
      type: 'text',
      placeholder: 'Search username...'
    }
  }), createElement({
    tagName: 'button',
    attributes: {
      id: 'button',
      class: 'btn search-btn'
    },
    text: 'Search'
  }));

  grab('button').addEventListener('click', async (event) => {
    event.preventDefault();
    const data = await getProfileAndRepos(grab('search-input').value);
    grab('search-form').reset();
    console.log(data);
  });
}