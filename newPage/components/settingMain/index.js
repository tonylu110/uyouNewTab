import backMenu from "./backMenu.js"
import settingInnerMain from "./settingInnerMain/index.js"
import settingMenu from "./settingMenu/index.js"
import isMobile from "../../util/isMobile.js";

export default class settingMain extends HTMLElement {
  constructor() {
    super()
    customElements.define('back-menu', backMenu)
    customElements.define('setting-menu', settingMenu)
    customElements.define('setting-inner-main', settingInnerMain)
    this.render()
    this.init()
  }
  render() {
    this.className = 'settingMainBefore'
    this.id = 'settingMain'
    this.innerHTML = `
    <back-menu></back-menu>
    <div id="settingCloseButton" style="display: none;">
      <img src="imgs/close.png" id="settingCloseImg">
    </div>
    <setting-menu></setting-menu>
    <setting-inner-main></setting-inner-main>
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
          this.closeSettingMain()
        }
      })
    })
    document.getElementById('settingCloseButton').addEventListener("click", () => {
      this.closeSettingMain()
    })
  }
  closeSettingMain() {
    document.getElementById('settingMain').style.transition = '0.5s'
    document.getElementById('settingMain').className = 'settingMainBefore'
    document.getElementById('settingCloseButton').style.display = 'none'
    document.getElementById('backSettingMenu').style.display = 'none'
    document.getElementById('settingInnerMain').style.display = 'none'
    document.getElementById('settingMenu').style.display = 'none'
    document.getElementById('blackBack').style = `
    z-index: -1;
    background-color: #00000010;
    `
    document.getElementById('viewImg').style.display = 'none'
    document.getElementById('fileName').innerText = '选择你的图片'
    document.getElementById('backgroundSetButton').hidden = true
    document.getElementById('onlinePicUrl').value = ''
    document.getElementById('picError').hidden = true
    document.getElementById('exImg').style.display = 'none'
    if (isMobile()) {
      document.getElementById('backSettingMenus').style.display = 'none'
      document.getElementById('settingMenu').style.display = 'none'
      document.getElementById('settingMain').style = `
      width: 0px;
      height: 0px;
      padding: 0px;
      `
    }
  }
}
