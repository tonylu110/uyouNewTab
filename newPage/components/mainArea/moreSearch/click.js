function changeImg (img) {
  document.getElementById('moreSearch').style = `
    opacity: 0.0;
    transform: ;
    z-index: 3;
  `
  document.getElementById('searchEngine').src = img
}

export default function click () {
  //click img to engine img
  document.getElementById('google').addEventListener('click', () => {
    chrome.storage.sync.set({ 'search': 'google' });
    changeImg('imgs/google.png')
  })
  document.getElementById('bing').addEventListener('click', () => {
    chrome.storage.sync.set({ 'search': 'bing' });
    changeImg('imgs/bing-logo.png')
  })
  document.getElementById('baidu').addEventListener('click', () => {
    chrome.storage.sync.set({ 'search': 'baidu' });
    changeImg('imgs/baidu.png')
  })
  document.getElementById('ddg').addEventListener('click', () => {
    chrome.storage.sync.set({ 'search': 'ddg' });
    changeImg('imgs/ddg.svg')
  })
  document.getElementById('yandex').addEventListener('click', () => {
    chrome.storage.sync.set({ 'search': 'yandex' });
    changeImg('imgs/yandex.png')
  })
  document.getElementById('sougou').addEventListener('click', () => {
    chrome.storage.sync.set({ 'search': 'sougou' });
    changeImg('imgs/sougou.png')
  })
  document.getElementById('cus').addEventListener('click', () => {
    chrome.storage.sync.set({ 'search': 'cus' });
    changeImg('imgs/search.png')
  })
}
