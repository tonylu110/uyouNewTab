export default function Observer(obj, domNode) {
  const domTree = document.querySelector(domNode)
  if (!obj || typeof obj !== 'object') return
  Object.keys(obj).forEach(key => {
    let value = obj[key]
    checkDom(domTree, key, value)
    Observer(value)
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: () => {
        return value
      },
      set: (newValue) => {
        value = newValue
        Observer(newValue)
        checkDom(domTree, key, newValue)
      }
    })
  })
}

function checkDom (domTree, key, newValue) {
  domTree.childNodes.forEach(item => {
    if (item.tagName === 'INPUT' && item.getAttribute('data-bind') === key) {
      item.value = newValue
    } else if (item instanceof HTMLElement && item.getAttribute('data-bind') === key) {
      item.innerText = newValue
    } else {
      haveBind(item, key, newValue)
    }
  })
}

function haveBind(dom, key, newValue) {
  if (dom.attributes === undefined) {
    return 
  } else {
    for(let i = 0; i < dom.attributes.length; i++) {
      if (dom.attributes.item(i).name.indexOf('bind-') > -1 && dom.attributes.item(i).value === key) {
        const att = dom.attributes.item(i).name.substr(dom.attributes.item(i).name.lastIndexOf("-") + 1)
        dom[att] = newValue
      }
    }
  }
}