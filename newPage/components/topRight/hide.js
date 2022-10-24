import isMobile from "../../util/isMobile.js";
import { onHide, onShow } from "../../js/main/function.js";
//This is hide all element function
//if bottemButton is hide all element will hide
//else show all element
export default function hideClick() {
  const hideButton = document.getElementById('button').hidden
  const hide = document.getElementById('hide')
  const info = document.getElementById('info')

  if (!hideButton) {
    chrome.storage.local.set({ 'hs': 'show' })
    onHide()
    hide.hidden = false
    chrome.storage.sync.get(['seaBarHS'], (budget) => {
      let seaBarHS = budget.seaBarHS;
      if (typeof seaBarHS === 'undefined') {
        seaBarHS = 'show'
      }
      if (seaBarHS === 'show') {
        document.getElementById('searchbar').style.display = ''
      }
    })
    if (isMobile()) {
      hide.style.marginRight = '0px'
      info.hidden = true
    }
  } else {
    onShow()
    chrome.storage.local.set({ 'hs': 'hide' })
    if (isMobile()) {
      document.getElementById('history').hidden = true
      document.getElementById('clock').hidden = true
      info.hidden = false
    }
  }
}
