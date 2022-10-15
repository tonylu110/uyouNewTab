import isMobile from '../../../util/isMobile.js'

export default class searchBar extends HTMLElement {
  constructor() {
    super()
    this._data = {
      hide: true
    }
    this.render()
    this.init()
    chrome.storage.sync.get(['cusSea'], (budget) => {
      let cusSea = budget.cusSea
      if (typeof cusSea === 'undefined') {
        cusSea = ''
      }
      if (cusSea !== '') {
        this.search(cusSea)
        document.getElementById('cusSeaIn').value = cusSea
      } else {
        this.search()
      }
    })
  }
  render() {
    this.className = 'searchbar'
    this.id = 'searchbar'
    this.style.display = 'none'
    this.innerHTML = `
    <img id="searchEngine" hidden>
    <input type="text" id="keywords">
    <div class="keywordsRight" style="display: none;"></div>
    <div id="searchBtn" style="color: transparent;">搜索</div>
    `
    document.getElementById('searchEngine').addEventListener('click', () => {
      this.hide()
      this._data.hide = !this._data.hide
    })
  }
  init() {
    if (!isMobile()) {
      document.getElementById('keywords').addEventListener("keyup", () => {
        if (document.getElementById('keywords').value) {
          document.getElementById('searchBtn').style = `
            width: 45px;
            color: ;
          `
          document.getElementsByClassName('keywordsRight')[0].style = `display: ;`
        } else {
          document.getElementById('searchBtn').style = `
            width: ;
            color: transparent;
          `
          document.getElementsByClassName('keywordsRight')[0].style = `display: none;`
        }
      })
    }
  }
  search(cusSea) {
    document.getElementById('keywords').addEventListener('keydown', (event) => {
      let s = document.getElementById('searchEngine').src
      let engine = s.substring(s.lastIndexOf("/") + 1)
      if (event.key === 'Enter') {
        this.sea(cusSea, engine)
      }
      document.getElementById('searchBtn').addEventListener('click', () => {
        this.sea(cusSea, engine)
      })
    })
  }
  sea(cus, engine) {
    let keywords = document.getElementById('keywords').value; //get keywords
    if (engine == 'google.png') {
      window.open('https://www.google.com/search?q=' + keywords, '_self'); //if engine is google google to google search
    } else if (engine == 'baidu.png') {
      window.open('https://www.baidu.com/s?wd=' + keywords, '_self'); //if engine is baidu to baidu search
    } else if (engine == 'bing-logo.png') {
      window.open('https://cn.bing.com/search?q=' + keywords, '_self'); //if engine is bing to bing search
    } else if (engine == 'ddg.svg') {
      window.open('https://duckduckgo.com/?q=' + keywords, '_self');
    } else if (engine == 'yandex.png') {
      window.open('https://yandex.com/search/?text=' + keywords, '_self');
    } else if (engine == 'sougou.png') {
      window.open('https://www.sogou.com/web?query=' + keywords, '_self');
    }
    if (cus != undefined && engine == 'search.png') {
      window.open(cus + keywords, '_self');
    }
    if (!cus && engine == 'search.png') {
      document.getElementById('keywords').value = '未设置自定义的搜索引擎'
      setTimeout(() => {
        document.getElementById('keywords').value = ''
      }, 1000)
    }
  }
  hide() {
    if (this._data.hide) {
      setTimeout(() => {
        document.getElementById('moreSearch').style.opacity = '1.0';
      }, 100)
      document.getElementById('moreSearch').style = `
        transform: translateY(100px);
        z-index: ;
      `
      document.getElementById('click').addEventListener('click', () => {
        this._data.hide = !this._data.hide
        document.getElementById('moreSearch').style = `
          opacity: 0.0;
          z-index: ;
          transform: ;
        `
      })
    } else {
      document.getElementById('moreSearch').style = `
        opacity: 0.0;
        z-index: 3;
        transform: ;
      `
    }
  }
}