
export function createElement(nodeElement) {
  const {
    tagName,
    attributes,
    text,
  } = nodeElement;

  const element = document.createElement(tagName);
  const attributesList = Object.entries(attributes);

  attributesList.forEach(([attribute, attributeName]) => {
    element.setAttribute(attribute, attributeName)
  })

  if (text) {
    const textNode = document.createTextNode(text);
    element.appendChild(textNode);
  }

  return element;
}
