import dayWeather from './dayWeather.js'

export default class weatherCom extends HTMLElement {
  constructor() {
    super()
    customElements.define('day-weather', dayWeather)
    this.render()
  }
  render() {
    this.className = 'topButton'
    this.id = 'weather'
    this.style = 'display: none;'
    this.innerHTML = `
    <img id="weatherImg" hidden>
    <div id="weatherMain" style="display: none;">
      <div class="weatherCity">
        <input type="text" id="weatherCityIn" placeholder="当前城市：">
        <div id="weatherCityUp">确定</div>
        <day-weather></day-weather>
      </div>
    </div>
    `
  }
}