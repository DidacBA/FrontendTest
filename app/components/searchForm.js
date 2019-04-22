import { getProfileAndRepos } from '../utils/api/api';
import { element, grab, DOMScrubber } from '../utils/DOMHelp/boxes';
import { buildLoading } from './loading';

export const buildSearchForm = async (searchClick) => {
  await grab('container').append(element({
    tagName: 'form',
    attributes: {
      id: 'search-form',
      class: 'search-form',
    },
    innerHTML: [
      {
        tagName: 'input',
        attributes: {
          id: 'search-input',
          class: 'search-bar',
          type: 'text',
          placeholder: 'Search username...'
        }
      },
      {
        tagName: 'button',
        attributes: {
          id: 'button',
          class: 'btn search-btn'
        },
        text: 'Search'
      }
    ]
  }));

  grab('button').addEventListener('click', async (event) => {
    event.preventDefault();
    grab('button').disabled = true;
    DOMScrubber(['profile', 'repos', 'error', 'loading']);
    buildLoading('Loading', 300);
    const data = await getProfileAndRepos(grab('search-input').value);
    grab('button').disabled = false;
    searchClick(data);
    grab('search-form').reset();
  });
}