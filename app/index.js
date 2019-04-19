import './index.scss';
import { getProfileAndRepos } from './utils/api.js';

function createElement (nodeElement) {
  const {
    tagName,
    attributes,
    children,
  } = nodeElement;

  const element = document.createElement(tagName);
  const attributesList = Object.entries(attributes);

  attributesList.forEach(([attribute, attributeName]) => {
    element.setAttribute(attribute, attributeName)
  })

  children.forEach((child) => {
    
  })

  return element;
}

function addTextNode (element, text) {
  const textNode = document.createTextNode(text);

  element.appendChild(textNode);

  return element
}

const elementObject = {
  tagName: 'div',
  attributes: {
    id: 'div-id',
    class: 'div-class',
  },
  children: [
    elementObject2
  ],
};

const elementObject2 = {
  tagName: 'img',
  attributes: {
    id: 'image-id',
    class: 'image-class',
    alt: 'some image',
    src: 'https://www.w3schools.com/w3css/img_lights.jpg',
  }
}

const div1 = addTextNode(createElement(elementObject), 'I am a created element');

// const image1 = createElement(elementObject2);


document.body.appendChild(div1);

const testFunction = async () => {
  const profileRepos = await getProfileAndRepos('DidacBA');

  console.log(profileRepos);
}

testFunction();
console.log(getProfileAndRepos('DidacBA'));

// document.body.appendChild(image1);

//{
//  element: createElement({
//    tagName: 'div',
//    attributes: {
//      id: 'div-id',
//      class: 'div-class',
//    },
//  }),
//  children: [
//
//  ],
//}

