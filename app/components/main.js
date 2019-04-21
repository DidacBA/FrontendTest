import { element, grab } from '../utils/DOMHelp/boxes';
import { buildErrorComponent } from './error';
import { buildSearchForm } from './searchForm';
import { buildProfile } from './profile';

export const buildMainComponent = async () => {
  await grab('app').appendChild(element({
    tagName: 'div',
    attributes: {
      id: 'container',
      class: 'container',
    },
  }));

  const searchClick = (data) => {
    if (data.profile.message === 'Not Found' && !grab('error')) {
      buildErrorComponent('User does not exist');
    } else {
      buildProfile(data);
    }
  }

  buildSearchForm(searchClick);
}