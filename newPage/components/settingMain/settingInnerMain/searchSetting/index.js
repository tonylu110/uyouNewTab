import list from "./list.js"

export default class searchSetting extends HTMLElement {
  constructor() {
    super()
    this._data = {
      list
    }
    this.render()
  }
  render() {
    this.id = 'searchSetting'
    this.className = 'settingInnerTitle'
    this.style = 'display: none;'
    this.innerHTML = `
    <div class="settingsInnerTitle">
      搜索引擎
    </div>
    <div class="backgroundTitile">设置搜索引擎的显示/隐藏</div>
    <div class="otherBtn">
      <div class="otherName">搜索引擎显示</div>
      <div class="otherFeatures" id="hideSearchBar">显示</div>
    </div>
    <div class="seaBtn" style="margin-top: 10px;">
      <div class="seaName">
        <div id="cusImg">
          <img src="imgs/search.png" class="seaImg searchImg">
        </div>
        <div class="seaTitle">自定义搜索引擎</div>
      </div>
      <div class="otherFeaturesBefore" id="cusAn">禁用</div>
    </div>
    <div class="seaBtn seaIn" id="seaIn" style="display: none;">
      <input type="text" id="cusSeaIn" placeholder="请输入自定义搜索链接">
      <div class="otherFeatures" id="setCus">确定</div>
    </div>
    ${this._data.list.map((item, index) => {
      return `
      <div class="seaBtn" ${index === 0 ? 'style="margin-top: 10px;"' : ''}>
        <div class="seaName">
          <img src="${item.img}" class="seaImg">
          <div class="seaTitle">${item.name}</div>
        </div>
        <div class="${index > 2 ? 'otherFeaturesBefore' : 'otherFeatures'}" id="${item.funId}">
          ${index > 2 ? '隐藏' : '显示'}
        </div>
      </div>
      `
    }).join('')}
    `
  }
}