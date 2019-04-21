const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

export function element(nodeElement) {
  const {
    tagName,
    attributes,
    text,
    innerHTML
  } = nodeElement;

  const el = document.createElement(tagName);
  const attributesList = Object.entries(attributes);

  attributesList.map(([attributeName, attribute]) => {
    if (attributeName.indexOf('-') > 0) {
      debugger;
      attributeName.replace(/_/, '-');
      el.setAttribute(attributeName, attribute);
    } else {
      el.setAttribute(attributeName, attribute);
    }
  })

  if (text) {
    const textNode = document.createTextNode(text);
    el.appendChild(textNode);
  }

  if (innerHTML) {
    innerHTML.map((elem) => {
      el.appendChild(element(elem))
    })
  }

  return el;
}

export function grab(id) {
  return document.getElementById(id);
}

export function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

export function DOMScrubber(idsToScrub) {
  idsToScrub.map((id) => {
    grab(id) ? grab(id).remove() : null
  });
}