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
    }
  })
}