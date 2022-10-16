import list from './list.js'

export default class festuresSetting extends HTMLElement {
  constructor() {
    super()
    this._data = {
      list
    }
    this.render()
  }
  render() {
    this.id  = 'festuresSetting'
    this.className = 'settingInnerTitle'
    this.style = 'display: none;'
    this.innerHTML = `
    <div class="settingsInnerTitle">
      功能设置
    </div>
    <div class="backgroundTitile">设置隐藏/显示功能按钮</div>
    <div class="featureSetting">
      ${this._data.list.map(item => {
        return `
        <div class="featureBtns">
          <div class="featuresTitle">
            <div class="featuresBtn"><img src="${item.img}" class="feaImg"></div>
            <div class="featureNames">${item.name}</div>
          </div>
          <div class="hsFeatures" id="${item.funId}">显示</div>
        </div>
        `
      }).join('')}
      <div class="featureBtns">
        <div class="featuresBtn" style="width: 70px; border-radius: 30px; text-align: center; font-size: 17px; line-height: 30px;">一言</div>
        <div class="hsFeatures" id="oneHS">显示</div>
      </div>
    </div>
    `
  }
}