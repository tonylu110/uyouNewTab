import weather from './weather/index.js'

export default class topLeft extends HTMLElement {
  constructor() {
    super()
    customElements.define('weather-com', weather)
    this.render()
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
}