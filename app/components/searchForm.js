import { getProfileAndRepos } from '../utils/api/api';
import { element, grab } from '../utils/DOMHelp/boxes';
import { tsNullKeyword } from '@babel/types';

export const buildSearchForm = async (searchClick) => {
  await grab('container').appendChild(element({
    tagName: 'form',
    attributes: {
      id: 'search-form',
      class: 'search-form',
    }
  }));

  await grab('search-form').append(element({
    tagName: 'input',
    attributes: {
      id: 'search-input',
      class: 'search-bar',
      type: 'text',
      placeholder: 'Search username...'
    }
  }), element({
    tagName: 'button',
    attributes: {
      id: 'button',
      class: 'btn search-btn'
    },
    text: 'Search'
  }));

  grab('button').addEventListener('click', async (event) => {
    event.preventDefault();
    grab('profile') ? grab('profile').remove() : null;
    grab('repos') ? grab('repos').remove() : null;
    const data = await getProfileAndRepos(grab('search-input').value);
    grab('search-form').reset();
    searchClick(data);
  });
}