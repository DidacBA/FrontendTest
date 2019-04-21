const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

export function element(nodeElement) {
  const {
    tagName,
    attributes,
    text,
  } = nodeElement;

  const el = document.createElement(tagName);
  const attributesList = Object.entries(attributes);

  attributesList.forEach(([attributeName, attribute]) => {
    el.setAttribute(attributeName, attribute);
  })

  if (text) {
    const textNode = document.createTextNode(text);
    el.appendChild(textNode);
  }

  return el;
}

export function grab(id) {
  return document.getElementById(id);
}

export function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}