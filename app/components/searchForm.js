import { getProfileAndRepos } from '../utils/api/api';
import { element, grab, DOMScrubber } from '../utils/DOMHelp/boxes';

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
    DOMScrubber(['profile', 'repos', 'error', 'loading']);
    grab('container').append(element({
      tagName: 'p',
      attributes: {
        id: 'loading',
        class: 'ldng',
      },
      text: 'Loading'
    }));
    const data = await getProfileAndRepos(grab('search-input').value);
    searchClick(data);
    grab('search-form').reset();
  });
}