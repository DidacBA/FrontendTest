import { createElement, grab } from '../app/utils/DOMHelp/boxes';

test('createElement returns an html element with correct attributes', () => {
  const mockElement = createElement({
    tagName: 'div',
    attributes: {
      id: 'container',
      class: 'cntner',
    },
    text: 'Test, test, test'
  });

  expect(mockElement.id).toEqual('container');
  expect(mockElement.classList).toContain('cntner');
  expect(mockElement.innerHTML).toEqual('Test, test, test');
})

test('grab selects the correct HTML element', () => {
  document.body.innerHTML =
    `<div id="container">
      <span id="text" />
      <button id="button" />
    </div>`;

  expect(grab('text').id).toEqual('text');
})
