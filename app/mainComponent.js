import { getProfileAndRepos } from './utils/api/api';
import { createElement, grab } from './utils/DOMHelp/boxes';
import { buildErrorComponent } from './errorComponent';

export const buildMainComponent = async () => {
  await grab('app').appendChild(createElement({
    tagName: 'div',
    attributes: {
      id: 'container',
      class: 'container',
    },
  }));

  const searchClick = (data) => {
    if (data.profile.message === 'Not Found') {
      buildErrorComponent();
    } else {
      
    }
  }

  // buildSearchForm();
  
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
    searchClick(data);
    console.log(data);
  });
}