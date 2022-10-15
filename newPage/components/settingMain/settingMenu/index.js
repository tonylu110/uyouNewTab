import menu from "./menu.js"

export default class settingMenu extends HTMLElement {
  constructor() {
    super()
    this._data = menu
    this.render()
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
}