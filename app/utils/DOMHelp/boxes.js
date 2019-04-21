const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

export function createElement(nodeElement) {
  const {
    tagName,
    attributes,
    text,
  } = nodeElement;

  const element = document.createElement(tagName);
  const attributesList = Object.entries(attributes);

  attributesList.forEach(([attributeName, attribute]) => {
    element.setAttribute(attributeName, attribute)
  })

  if (text) {
    const textNode = document.createTextNode(text);
    element.appendChild(textNode);
  }

  return element;
}

export function grab(id) {
  return document.getElementById(id);
}

export function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}