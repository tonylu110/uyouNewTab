import list from "./list.js"

export default class linkSetting extends HTMLElement {
  constructor() {
    super()
    this._data = {
      list
    }
    this.render()
  }
  render() {
    this.id = 'linkSetting'
    this.className = 'settingInnerTitle'
    this.style = 'display: none;'
    this.innerHTML = `
    <div class="settingsInnerTitle">
      书签设置
    </div>
    <div class="backgroundTitile">设置书签的显示/隐藏，以及自定义书签</div>
    <div class="featureSetting">
      ${this._data.list.map((item, index) => {
        return `
          <div class="featureBtn">
            <div class="linkBtn" style="${item.style}" id="link${index + 1}Paddings">
              <img src="${item.img}" id="link${index + 1}Imgs">
            </div>
            <div class="changeFeature" id="link${index + 1}CH">自定义</div>
            <div class="hsFeature" id="link${index + 1}HS">显示</div>
          </div>
        `
      }).join('')}
    </div>
    `
  }
}