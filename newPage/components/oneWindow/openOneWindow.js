import isMobile from "../../util/isMobile.js";
import closeOneWindow from "./closeOneWindow.js";

export default function () {
  const screenHeight = document.documentElement.clientHeight
  document.getElementById('button').addEventListener('click', () => {
    document.getElementById('blackBack').style = `
      z-index: 150;
      background-color: #00000050;
      `
    document.getElementById('oneMain').style.display = ''
    document.getElementById('oneMain').className = 'oneMain'
    document.getElementById('closeButton').style = `
      width: 14px;
      height: 14px;
      padding: 8px;
      `
    if (isMobile()) {
      document.getElementById('oneNum').style.fontSize = '20px'
      document.getElementById('oneTxt').style.fontSize = '30px'
      document.getElementById('oneFrom').style.fontSize = '25px'
      document.getElementById('oneMain').style = `
        width: 270px;
        height: 400px;
        padding: 40px;
        bottom: 0;
        margin-bottom: ${(screenHeight - 480) / 2}px
        `
    } else {
      document.getElementById('oneNum').style.fontSize = '25px'
      document.getElementById('oneTxt').style.fontSize = '40px'
      document.getElementById('oneFrom').style.fontSize = '30px'
    }
    chrome.storage.sync.get(['dlMode'], (budget) => {
      let dlMode = budget.dlMode
      if (typeof dlMode === 'undefined') {
        dlMode = ''
      }
      if (dlMode === '') {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          document.getElementById('oneNum').style.color = '#999'
          document.getElementById('oneTxt').style.color = '#999'
          document.getElementById('oneFrom').style.color = '#999'
        } else {
          document.getElementById('oneNum').style.color = 'black'
          document.getElementById('oneTxt').style.color = 'black'
          document.getElementById('oneFrom').style.color = 'black'
        }
      } else if (dlMode == 'dark') {
        document.getElementById('oneNum').style.color = '#999'
        document.getElementById('oneTxt').style.color = '#999'
        document.getElementById('oneFrom').style.color = '#999'
      } else if (dlMode == 'light') {
        document.getElementById('oneNum').style.color = 'black'
        document.getElementById('oneTxt').style.color = 'black'
        document.getElementById('oneFrom').style.color = 'black'
      }
    })
    document.getElementById('oneNum').style.transition = '0.5s'
    document.getElementById('oneTxt').style.transition = '0.5s'
    document.getElementById('oneFrom').style.transition = '0.5s'
    document.getElementById('blackBack').addEventListener('click', () => {
      closeOneWindow()
    })
  })
}
