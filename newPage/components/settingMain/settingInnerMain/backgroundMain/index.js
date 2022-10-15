import apiImgs from './apiImgs.js'
import exImgs from './exImgs.js'

export default class backgroundMain extends HTMLElement {
  constructor() {
    super()
    customElements.define('api-imgs', apiImgs)
    customElements.define('ex-imgs', exImgs)
    this.render()
  }
  render() {
    this.id = 'backgroundSetting'
    this.className = 'settingInnerTitle'
    this.innerHTML = `
    <div class="settingsInnerTitle">
      背景设置
    </div>
    <div class="backgroundTitile">选择图片</div>
    <div class="uploadBtn" id="uploadBtn">
      <div id="fileName">选择你的图片</div>
      <input type="file" id="backgroundUpload" accept="image/*">
    </div>
    <div class="backgroundTitile">在线图片</div>
    <div class="onlinePic" id="onlinePic">
      <input type="text" id="onlinePicUrl" placeholder="请输入一个图片链接">
      <div id="review">预览</div>
    </div>
    <div id="picError"></div>
    <img src="" id="viewImg" style="display: none;">
    <api-imgs></api-imgs>
    <ex-imgs></ex-imgs>
    <div class="backgroundButtons">
      <div id="backgroundSetButton" hidden>设置为此图片</div>
      <div id="backgroundBefore">恢复默认</div>
    </div>
    `
  }
}