import backMenu from "./backMenu.js"
import settingInnerMain from "./settingInnerMain/index.js"
import settingMenu from "./settingMenu/index.js"

export default class settingMain extends HTMLElement {
  constructor() {
    super()
    customElements.define('back-menu', backMenu)
    customElements.define('setting-menu', settingMenu)
    customElements.define('setting-inner-main', settingInnerMain)
    this.render()
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
}