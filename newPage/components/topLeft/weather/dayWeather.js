import { dayTo, dayTo2 } from "./getDatShow.js";
import getWeatherImg from "./weatherImg.js"

export default class dayWeather extends HTMLElement {
  constructor() {
    super()
    this._data = {
      com: [2, 3, 4]
    }
    this.render()
    this.init()
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
  init() {
    chrome.storage.sync.get(['weatherCity'], (budget) => {
      let weatherCity = budget.weatherCity
      if (typeof (weatherCity) == 'undefined') {
        weatherCity = '';
      }
      if (weatherCity == '') {
        weatherCity = '北京';
      }
      this.weatherGet(weatherCity, 1)
    })
    setTimeout(() => {
      document.getElementById('weatherImg').hidden = false;
    }, 200)
    document.getElementById('weatherCityUp').addEventListener("click", () => {
      const city = document.getElementById('weatherCityIn').value
      this.weatherGet(city, 1)
      chrome.storage.sync.set({ 'weatherCity': city })
    })
  }
  weatherGet(city, day) {
    const httpRequest = new XMLHttpRequest()
    day = day - 1

    let weatherTime = ''

    httpRequest.open('GET', 'https://query.asilu.com/weather/baidu/?city=' + city, true)
    httpRequest.send()

    httpRequest.onreadystatechange = function () {
      if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        const obj = JSON.parse(httpRequest.responseText);

        function weatherDay(day) {
          const weatherImg = getWeatherImg(obj.weather[day].weather)
          document.getElementById('weatherImg').src = weatherImg
          document.getElementById('weatherCityIn').placeholder = '当前城市：' + obj.city;
        }

        function feaDayWeather(dayfea) {
          const weatherImg = getWeatherImg(obj.weather[dayfea - 1].weather);

          if (dayfea < 4) {
            weatherTime = dayTo(obj.weather[dayfea - 1].date)[1];
          } else {
            weatherTime = dayTo2(obj.weather[dayfea - 1].date)[0]
          }

          document.getElementById('time' + dayfea).innerText = weatherTime;
          document.getElementById('day' + dayfea + 'Weather').innerText = obj.weather[dayfea - 1].weather;
          document.getElementById('day' + dayfea + 'Img').src = weatherImg;
          document.getElementById('day' + dayfea + 'Temp').innerText = obj.weather[dayfea - 1].temp;
        }

        weatherDay(day);
        feaDayWeather(day + 2);
        feaDayWeather(day + 3);
        feaDayWeather(day + 4);

        document.getElementById('todayWeather').innerText = obj.weather[day].weather;
        document.getElementById('todayWeathertemp').innerText = '今日温度：' + obj.weather[day].temp;
      }
    };

    document.getElementById('weather').hidden = false;

    setTimeout(() => {
      if (document.getElementById('button').innerText == '暂时没有有连接到可以访问互联网的网络哦~') {
        document.getElementById('weatherMain').style = `
        justify-content: center;
        align-items: center;
        width: 270px;
        font-size: 20px;
        font-weight: bold;
        background-color: #ffffff70;
        border-radius: 10px;
        `
        document.getElementById('weatherMain').innerText = '无网络连接';
        document.getElementById('weatherImg').src = 'imgs/dLinkIcon.png';
      }
    }, 300)
  }
}
