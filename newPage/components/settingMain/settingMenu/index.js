import menu from "./menu.js"
import isMobile from "../../../util/isMobile.js";
import {hideMenu, menuStyle, mobileUse} from "./menuClick.js";

export default class settingMenu extends HTMLElement {
  constructor() {
    super()
    this._data = menu
    this.render()
    this.init()
  }
  render() {
    this.id = 'settingMenu'
    this.style = 'display: none;'
    this.innerHTML = `
    <div class="settingTitle">设置</div>
    <div class="mainSettings">
      ${this._data.menu1.map(item => {
        return `<div class="settingBtn" id="${item.id}">
          ${item.name}<img src="imgs/to.png">
        </div>`
      }).join('')}
    </div>
    <div class="mainSettings">
      ${this._data.menu2.map(item => {
        return `<div class="settingBtn" id="${item.id}">
          ${item.name}<img src="imgs/to.png">
        </div>`
      }).join('')}
    </div>
    <div class="mainSettings">
      ${this._data.menu3.map(item => {
        return `<div class="settingBtn" id="${item.id}">
          ${item.name}<img src="imgs/to.png">
        </div>`
      }).join('')}
    </div>
    `
  }
  init() {
    document.getElementById('backSettingMenu').addEventListener("click", () => {
      const settingMainWidth = document.getElementById('settingMain').offsetWidth
      document.getElementById('settingMenu').style.display = ''
      document.getElementById('settingInnerMain').style.display = 'none'
      document.getElementById('backSettingMenus').style.display = 'none'
      document.getElementById('settingMain').style = `
      padding: 40px;
      width: ${settingMainWidth - 82}px;
      transition: padding 0s;
      `
    })
    const menuItems = [...this._data.menu1, ...this._data.menu2, ...this._data.menu3]
    menuItems.forEach((item, index) => {
      document.getElementById(item.id).addEventListener("click", () => {
        menuStyle()
        chrome.storage.sync.get(['dlMode'], budget => {
          let dlMode = budget.dlMode;
          if (typeof (dlMode) == 'undefined') {
            dlMode = '';
          }
          if (dlMode === '') {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
              document.getElementById(item.id).style.backgroundColor = '#44444470'
            } else {
              document.getElementById(item.id).style.backgroundColor = '#ffffff70'
            }
          } else if (dlMode === 'dark') {
            document.getElementById(item.id).style.backgroundColor = '#44444470'
          } else if (dlMode === 'light') {
            document.getElementById(item.id).style.backgroundColor = '#ffffff70'
          }
          hideMenu()
          let innerId = item.id.substring(0, item.id.length - 1)
          if (item.id === 'helpInfo') {
            innerId = 'helpMain'
          } else if (item.id === 'donateInfo') {
            innerId = 'donateMain'
          }
          document.getElementById(innerId).style.display = ''
          if (isMobile()) {
            mobileUse(index, item.name)
            if (item.id === 'backgroundSettings') {
              this.background()
            } else if (item.id === 'otherSettings') {
              this.other(150)
            } else if (item.id === 'donateInfo') {
              this.donate()
            }
          } else {
            if (item.id === 'otherSettings') {
              this.other(140)
            }
          }
        })
      })
    })
  }
  background() {
    const settingWidth = document.getElementById('settingMain').offsetWidth
    document.getElementById('mbackground1').style.width = `${settingWidth / 3 - 20}px`
    document.getElementById('mbackground2').style.width = `${settingWidth / 3 - 21}px`
    document.getElementById('mbackground3').style.width = `${settingWidth / 3 - 21}px`
    document.getElementById('mbackground3').style.marginRight = '0px'
    document.getElementById('mbackground4').style.width = `${settingWidth / 3 - 20}px`
    document.getElementById('mbackground5').style.width = `${settingWidth / 3 - 21}px`
    document.getElementById('uploadBtn').style.width = `${settingWidth - 62}px`
    document.getElementById('onlinePicUrl').style.width = `${settingWidth - 97}px`
    document.getElementById('review').style.width = '70px'
    document.getElementsByClassName('apiImgButton')[2].style.width = `${settingWidth / 2 - 46.5}px`
    document.getElementsByClassName('apiImgButton')[3].style.width = `${settingWidth / 2 - 46.5}px`
    document.getElementById('cusApiPic').style.width = `${settingWidth - 160}px`
  }
  other(num) {
    const otherBtnWidth = document.getElementsByClassName('otherBtn')[0].offsetWidth
    const msWidth = document.getElementsByClassName('ms')[0].offsetWidth
    document.getElementById('loadingTimeNum').style.width = `${otherBtnWidth - num - msWidth}px`
  }
  donate() {
    const settingWidth = document.getElementById('settingMain').offsetWidth
    document.getElementsByClassName('dotImg')[1].style = `
    margin-right: 0px;
    max-width: ${settingWidth / 2 - 26.5}px
    `
    document.getElementsByClassName('dotImg')[0].style.maxWidth = `${settingWidth / 2 - 26.5}px`
    document.getElementsByClassName('dotImg')[2].style.maxWidth = `${settingWidth / 2 - 26.5}px`
  }
}
