import apiImgs from './apiImgs.js'
import exImgs from './exImgs.js'
import {apiImg, loaclImgChange} from "./imgChange.js";
import isMobile from "../../../../util/isMobile.js";

export default class backgroundMain extends HTMLElement {
  constructor() {
    super()
    customElements.define('api-imgs', apiImgs)
    customElements.define('ex-imgs', exImgs)
    this.render()
    this.init()
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
  init() {
    loaclImgChange()
    apiImg()
    document.getElementById('backgroundUpload').onchange = function () {
      let file = this.files[0]
      let reader = new FileReader
      document.getElementById('exImg').style.display = 'none'
      reader.readAsDataURL(file)
      reader.onload = function (e) {
        document.getElementById('backgroundSetButton').hidden = false
        document.getElementById('viewImg').style.display = ''
        document.getElementById('viewImg').hidden = false
        document.getElementById('viewImg').src = e.target.result
        if (isMobile()) {
          document.getElementById('viewImg').style.maxWidth = '130px'
        }
        document.getElementById('fileName').innerText = file.name
        const picUrl = e.target.result
        document.getElementById('backgroundSetButton').addEventListener("click", () => {
          chrome.storage.local.set({ 'picUrl': picUrl })
          location.reload()
        })
      }
    }
    document.getElementById('backgroundBefore').addEventListener("click", () =>{
      chrome.storage.local.set({ 'picUrl': '' })
      location.reload()
    })
    document.getElementById('review').addEventListener("click", () => {
      document.getElementById('viewImg').src = document.getElementById('onlinePicUrl').value
      document.getElementById('viewImg').addEventListener('error', () =>{
        document.getElementById('picError').innerText = '请输入正确的图片链接'
        document.getElementById('picError').hidden = false
      })
      document.getElementById('viewImg').addEventListener('load', () => {
        document.getElementById('exImg').style.display = 'none'
        document.getElementById('picError').hidden = true
        document.getElementById('viewImg').style.display = ''
        document.getElementById('viewImg').hidden = false
        document.getElementById('backgroundSetButton').hidden = false
      })
      document.getElementById('backgroundSetButton').addEventListener("click", () => {
        chrome.storage.local.set({ 'picUrl': document.getElementById('onlinePicUrl').value })
        location.reload()
      })
    })
  }
}
