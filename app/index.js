import './index.scss';
import { buildMainComponent } from './components/main.js'

(function() {
  buildMainComponent();

  let nodeList = document.querySelectorAll('.mutable');
    
  const mutationObserver = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      const newNodes = mutation.addedNodes;
      newNodes.forEach(node => {
        if (node.classList && node.classList.contains('.mutable')) {
          nodeList = [...nodeList, node]
        }
      });
    });
  });
  
  mutationObserver.observe(document.body, {
    attributes: false,
    characterData: false,
    childList: true,
    subtree: true,
    attributeOldValue: false,
    characterDataOldValue: false
  });
})()
