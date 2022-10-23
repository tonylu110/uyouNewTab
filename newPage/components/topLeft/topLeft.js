import weather from './weather/index.js'
import isMobile from "../../util/isMobile.js";
import settingMain from "../settingMain/index.js";
import closeSettingWindow from "../settingMain/closeSettingWindow.js";

export default class topLeft extends HTMLElement {
  constructor() {
    super()
    customElements.define('weather-com', weather)
    this.render()
    this.init()
  }
  render() {
    this.className = 'top-left'
    this.id = 'top-right'
    this.style = 'top: 0;'
    this.innerHTML = `
    <div class="topButton" id="settings" hidden><img src="imgs/setting.png" id="settingImg"></div><!--settings button-->
    <weather-com></weather-com>
    `
  }
  init() {
    document.getElementById('settings').addEventListener("click", () => {
      document.getElementById('settingMain').className = 'settingMain'
      document.getElementById('settingMain').style.transition = '0.5s'
      setTimeout(() => {
        if (isMobile()) {
          document.getElementById('settingInnerMain').style.display = 'none'
          document.getElementById('settingMenu').style.marginRight = '-20px'
        } else {
          document.getElementById('settingInnerMain').style.display = ''
        }
        document.getElementById('settingCloseButton').style.display = ''
        document.getElementById('settingMenu').style.display = ''
      }, 450)
      document.getElementById('blackBack').style = `
      z-index: 150;
      background-color: #00000050
      `
      if (isMobile()) {
        document.getElementById('settingMain').style = `
        width: 70%;
        height: 50%;
        padding: 40px;
        `
        document.getElementById('settingMenu').style.display = 'none'
      }
      document.getElementById('blackBack').addEventListener("click", () => {
        const changLinkDisplay = document.getElementById('changeLink').style.display
        const toastDisplay = document.getElementById('toast').style.display
        if (changLinkDisplay === 'none' && toastDisplay === 'none') {
          closeSettingWindow()
        }
      })
    })
  }
}
