import { getProfileAndRepos } from '../utils/api/api';
import { element, grab, DOMScrubber } from '../utils/DOMHelp/boxes';

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
    DOMScrubber(['profile', 'repos']);
    const data = await getProfileAndRepos(grab('search-input').value);
    grab('search-form').reset();
    searchClick(data);
  });
}