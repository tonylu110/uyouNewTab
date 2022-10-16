import backgroundMain from "./backgroundMain/index.js"
import donateMain from "./donateMain/donateMain.js"
import festuresSetting from "./featuresSetting/index.js"
import helpMain from "./helpMain/helpMain.js"
import linkSetting from "./linkSetting/index.js"
import otherSetting from "./otherSetting/index.js"
import searchSetting from "./searchSetting/index.js"

export default class settingInnerMain extends HTMLElement {
  constructor() {
    super()
    customElements.define('background-main', backgroundMain)
    customElements.define('features-setting', festuresSetting)
    customElements.define('link-setting', linkSetting)
    customElements.define('search-setting', searchSetting)
    customElements.define('other-setting', otherSetting)
    customElements.define('help-main', helpMain)
    customElements.define('donate-main', donateMain)
    this.render()
  }
  render() {
    this.id = 'settingInnerMain'
    this.innerHTML = `
    <div class="settingInner">
      <background-main></background-main>
      <features-setting></features-setting>
      <link-setting></link-setting>
      <search-setting></search-setting>
      <other-setting></other-setting>
    </div>
    <help-main></help-main>
    <donate-main></donate-main>
    `
  }
}