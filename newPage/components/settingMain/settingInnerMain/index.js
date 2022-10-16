import backgroundMain from "./backgroundMain/index.js"
import festuresSetting from "./featuresSetting/index.js"
import linkSetting from "./linkSetting/index.js"

export default class settingInnerMain extends HTMLElement {
  constructor() {
    super()
    customElements.define('background-main', backgroundMain)
    customElements.define('features-setting', festuresSetting)
    customElements.define('link-setting', linkSetting)
    this.render()
  }
  render() {
    this.id = 'settingInnerMain'
    this.innerHTML = `
    <div class="settingInner">
      <background-main></background-main>
      <features-setting></features-setting>
    </div>
    `
  }
}