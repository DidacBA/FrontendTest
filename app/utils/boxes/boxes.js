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

export function grabElement(id) {
  return document.getElementById(id);
}