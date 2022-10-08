export default function Observer(obj, domNode) {
  if (!obj || typeof obj !== 'object') return
  Object.keys(obj).forEach(key => {
    let value = obj[key]
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
        const domTree = document.querySelector(domNode)
        checkDom(domTree, value, newValue)
      }
    })
  })
}

function checkDom (domTree, oldValue, newValue) {
  domTree.childNodes.forEach(item => {
    if (item.tagName === 'INPUT' || item.value === oldValue) {
      item.value = newValue
    } else if (item.innerText === oldValue) {
      item.innerText = newValue
    }
  })
}