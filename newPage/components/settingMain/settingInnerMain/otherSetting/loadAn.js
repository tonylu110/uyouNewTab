export default function () {
  document.getElementById('loadingAn').addEventListener("click", () => {
    if (document.getElementById('loadingAn').className == 'otherFeaturesBefore') {
      show()
    } else {
      hide()
    }
  })
}

function show() {
  document.getElementById('loadingAn').className = 'otherFeatures'
  document.getElementById('loadingAn').innerText = '显示'
  document.getElementById('loadingTimeBtn').style.display = ''
  document.getElementsByClassName('otherBtn')[1].style = `
  border-radius: 10px 10px 0px 0px;
  border-bottom: 1px solid #00000020;
  `
  chrome.storage.sync.get(['dlMode'], function (budget) {
    let dlMode = budget.dlMode;
    if (typeof (dlMode) == 'undefined') {
      dlMode = '';
    }
    if (dlMode == '') {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementsByClassName('otherBtn')[0].style.backgroundColor = '#44444490';
      } else {
        document.getElementsByClassName('otherBtn')[0].style.backgroundColor = '#ffffff90';
      }
    } else if (dlMode == 'dark') {
      document.getElementsByClassName('otherBtn')[1].style.backgroundColor = '#44444490';
    } else if (dlMode == 'light') {
      document.getElementsByClassName('otherBtn')[1].style.backgroundColor = '#ffffff90';
    }
  })
  chrome.storage.local.set({ 'loadingAn': 'show' })
}

function hide() {
  document.getElementById('loadingAn').className = 'otherFeaturesBefore'
  document.getElementById('loadingAn').innerText = '隐藏'
  document.getElementById('loadingTimeBtn').style.display = 'none'
  document.getElementsByClassName('otherBtn')[1].style = `
  border-radius: 10px;
  border-bottom: none;
  `
  chrome.storage.sync.get(['dlMode'], function (budget) {
    let dlMode = budget.dlMode;
    if (typeof (dlMode) == 'undefined') {
      dlMode = '';
    }
    if (dlMode == '') {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementsByClassName('otherBtn')[1].style.backgroundColor = '#44444450';
      } else {
        document.getElementsByClassName('otherBtn')[1].style.backgroundColor = '#ffffff50';
      }
    } else if (dlMode == 'dark') {
      document.getElementsByClassName('otherBtn')[1].style.backgroundColor = '#44444450';
    } else if (dlMode == 'light') {
      document.getElementsByClassName('otherBtn')[1].style.backgroundColor = '#ffffff50';
    }
  })
  chrome.storage.local.set({ 'loadingAn': 'hide' })
}
