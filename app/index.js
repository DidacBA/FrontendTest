import './index.scss';
import { getProfileAndRepos } from './utils/api/api';
import { createElement, mount } from './utils/boxes/boxes';

const elementObject = {
  tagName: 'div',
  attributes: {
    id: 'div-id',
    class: 'div-class',
  },
  text: 'I am a created element',
};

const div1 = createElement(elementObject);

const app = document.getElementById('app');
app.appendChild(div1);
