import backgroundMain from "./backgroundMain.js"

export default class settingInnerMain extends HTMLElement {
  constructor() {
    super()
    customElements.define('background-main', backgroundMain)
    this.render()
  }
  render() {
    this.id = 'settingInnerMain'
    this.innerHTML = `
    <div class="settingInner">
      <background-main></background-main>
    </div>
    `
  }
}