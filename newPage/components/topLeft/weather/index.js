import dayWeather from './dayWeather.js'
import isMobile from "../../../util/isMobile.js";

export default class weatherCom extends HTMLElement {
  constructor() {
    super()
    customElements.define('day-weather', dayWeather)
    this.render()
    this.init()
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
  init() {
    let weatherHide = true
    document.getElementById('weatherImg').addEventListener("click", () => {
      if (weatherHide) {
        weatherHide = !weatherHide;
        document.getElementById('weather').style = `
        width: 350px;
        height: 230px;
        padding: 20px;
        `
        document.getElementById('weatherImg').style = `
        width: 60px;
        height: 60px;
        `
        if (isMobile()) {
          let weatherLeft = -(90 - (window.innerWidth - 310) / 2);
          document.getElementById('weather').style = `
          width: 270px;
          height: 310px;
          transform: translateX(${weatherLeft}px) translateY(100px);
          `
          document.getElementById('blackBack').style = `
          z-index: 101;
          background-color: #00000050;
          `
          document.getElementById('weather').style.flexDirection = 'column';
          document.getElementById('weatherMain').style = `
          margin-top: 10px;
          margin-left: 0px; 
          `
          document.getElementById('dayWeather').style.top = '137px';
          if (document.getElementById('button').innerText == '暂时没有有连接到可以访问互联网的网络哦~') {
            document.getElementById('weatherMain').style.display = 'flex';
          }
          document.getElementById('blackBack').onclick = function () {
            document.getElementById('weather').style = `
            width: 30px;
            height: 30px;
            `
            document.getElementById('weatherImg').style = `
            width: 30px;
            height: 30px;
            `
            document.getElementById('weather').style = `
            padding: 10px;
            position: ;
            margin-top: 15px;
            margin-left: 20px;
            transform: ;
            `
            document.getElementById('weatherMain').style.display = 'none';
            document.getElementById('blackBack').style = `
            z-index: -1;
            background-color: #00000010;
            `
            weatherHide = !weatherHide;
          }
        } else {
          document.getElementsByClassName('feaWeatherbox')[0].style.marginLeft = '-3px';
          document.getElementsByClassName('feaWeatherbox')[2].style.marginRight = '-3px';
          document.getElementsByClassName('feaWeatherbox')[0].style.width = '74px';
          document.getElementsByClassName('feaWeatherbox')[1].style.width = '74px';
          document.getElementsByClassName('feaWeatherbox')[2].style.width = '74px';
          document.getElementsByClassName('feaWeather')[0].style.marginBottom = '4px';
          document.getElementById('weather').style.height = '250px'

        }
        setTimeout(() => {
          document.getElementById('weatherMain').style.display = '';
          if (document.getElementById('button').innerText == '暂时没有有连接到可以访问互联网的网络哦~') {
            document.getElementById('weatherMain').style.display = 'flex';
          }
        }, 300)
        document.getElementById('click').onclick = function () {
          document.getElementById('weather').style = `
          width: 30px;
          height: 30px;
          padding: 10px;
          `
          document.getElementById('weatherImg').style = `
          width: 30px;
          height: 30px;
          `
          document.getElementById('weatherMain').style.display = 'none';
          weatherHide = !weatherHide;
        }
      } else {
        document.getElementById('weather').style = `
        width: 30px;
        height: 30px;
        padding: 10px;
        `
        document.getElementById('weatherImg').style = `
        width: 30px;
        height: 30px;
        `
        document.getElementById('weatherMain').style.display = 'none';
        if (isMobile()) {
          document.getElementById('weather').style.transform = '';
          document.getElementById('blackBack').style = `
          z-index: -1;
          background-color: #00000010;
          `
        }
        weatherHide = !weatherHide;
      }
    })
  }
}
