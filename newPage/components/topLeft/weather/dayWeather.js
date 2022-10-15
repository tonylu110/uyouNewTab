export default class dayWeather extends HTMLElement {
  constructor() {
    super()
    this._data = {
      com: [2, 3, 4]
    }
    this.render()
  }
  render() {
    this.className = 'dayWeather'
    this.id = 'dayWeather'
    this.innerHTML = `
    <div id="todayWeather"></div>
    <div id="todayWeathertemp"></div>
    <div class="feaWeather">
      ${this._data.com.map(item => {
        return `
        <div class="feaWeatherbox">
          <div id="time${item}" class="weatherTime"></div>
          <div id="day${item}Weather"></div>
          <img src="" id="day${item}Img" style="width: 30px; height: 30px;">
          <div id="day${item}Temp"></div>
        </div>`
      }).join('')}
    </div>
    `
  }
}