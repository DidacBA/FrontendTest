import { createElement, grabElement } from '../app/utils/boxes/boxes';

test('returns an html element with correct attributes', () => {
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
