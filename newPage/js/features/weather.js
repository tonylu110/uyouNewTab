function weatherGet(city, day) {
    var httpRequest = new XMLHttpRequest();
    day = day - 1;

    function dayTo(str) {
        return str.match(/\（([^)]*)\）/);
    }
    function dayTo2(str) {
        return str.split(/\（.*?\）/);
    }

    var weatherTime = '';

    httpRequest.open('GET', 'https://query.asilu.com/weather/baidu/?city=' + city, true);
    httpRequest.send();

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var obj = JSON.parse(httpRequest.responseText);

            function weatherDay(day) {
                if (obj.weather[day].weather.search("多云") != -1) {
                    elemenetGetId('weatherImg').src = 'imgs/weather/00.png';
                } else if (obj.weather[day].weather.search("晴") != -1) {
                    elemenetGetId('weatherImg').src = 'imgs/weather/01.png';
                } else if (obj.weather[day].weather.search("阴") != -1) {
                    elemenetGetId('weatherImg').src = 'imgs/weather/02.png';
                } else if (obj.weather[day].weather.search("雪") != -1) {
                    elemenetGetId('weatherImg').src = 'imgs/weather/03.png';
                } else if (obj.weather[day].weather.search("雨") != -1) {
                    elemenetGetId('weatherImg').src = 'imgs/weather/04.png';
                } else {
                    elemenetGetId('weatherImg').src = 'imgs/dLinkIcon.png';
                }
                elemenetGetId('weatherCityIn').placeholder = '当前城市：' + obj.city;
            }

            function feaDayWeather(dayfea) {
                var weatherImg = '';
                if (obj.weather[dayfea - 1].weather.search("雪") != -1) {
                    weatherImg = 'imgs/weather/03.png';
                } else if (obj.weather[dayfea - 1].weather.search("雨") != -1) {
                    weatherImg = 'imgs/weather/04.png';
                } else if (obj.weather[dayfea - 1].weather.search("多云") != -1) {
                    weatherImg = 'imgs/weather/00.png';
                } else if (obj.weather[dayfea - 1].weather.search("晴") != -1) {
                    weatherImg = 'imgs/weather/01.png';
                } else if (obj.weather[dayfea - 1].weather.search("阴") != -1) {
                    weatherImg = 'imgs/weather/02.png';
                } else {
                    weatherImg = 'imgs/dLinkIcon.png';
                }

                if (dayfea < 4) {
                    weatherTime = dayTo(obj.weather[dayfea - 1].date)[1];
                } else {
                    weatherTime = dayTo2(obj.weather[dayfea - 1].date)[0]
                }

                elemenetGetId('time' + dayfea).innerText = weatherTime;
                elemenetGetId('day' + dayfea + 'Weather').innerText = obj.weather[dayfea - 1].weather;
                elemenetGetId('day' + dayfea + 'Img').src = weatherImg;
                elemenetGetId('day' + dayfea + 'Temp').innerText = obj.weather[dayfea - 1].temp;
            }

            weatherDay(day);
            feaDayWeather(day + 2);
            feaDayWeather(day + 3);
            feaDayWeather(day + 4);

            elemenetGetId('todayWeather').innerText = obj.weather[day].weather;
            elemenetGetId('todayWeathertemp').innerText = '今日温度：' + obj.weather[day].temp;
        }
    };

    elemenetGetId('weather').hidden = false;

    setTimeout(function () {
        if (elemenetGetId('button').innerText == '暂时没有有连接到可以访问互联网的网络哦~') {
            elemenetGetId('weatherMain').style.justifyContent = 'center';
            elemenetGetId('weatherMain').style.alignItems = 'center';
            elemenetGetId('weatherMain').style.width = '270px';
            elemenetGetId('weatherMain').innerText = '无网络连接';
            elemenetGetId('weatherMain').style.fontSize = '20px';
            elemenetGetId('weatherMain').style.fontWeight = 'bold';
            elemenetGetId('weatherMain').style.background = '#ffffff70';
            elemenetGetId('weatherMain').style.borderRadius = '10px';
            elemenetGetId('weatherImg').src = 'imgs/dLinkIcon.png';
        }
    }, 300)
}
function weatherUse() {
    var screenWidth = body().offsetWidth;//get screen width
    var weatherHide = true
    chrome.storage.sync.get(['weatherCity'], function (budget) {
        let weatherCity = budget.weatherCity
        if (typeof (weatherCity) == 'undefined') {
            weatherCity = '';
        }
        if (weatherCity == '') {
            weatherCity = '北京';
        }
        weatherGet(weatherCity, 1)
    })
    setTimeout(function () {
        elemenetGetId('weatherImg').hidden = false;
    }, 200)
    elemenetGetId('weatherImg').onclick = function () {
        if (weatherHide) {
            weatherHide = !weatherHide;
            elemenetGetId('weather').style.width = '350px';
            elemenetGetId('weather').style.height = '230px';
            elemenetGetId('weatherImg').style.width = '60px';
            elemenetGetId('weatherImg').style.height = '60px';
            elemenetGetId('weather').style.padding = '20px';
            if (screenWidth <= 813) {
                let weatherLeft = -(90 - (screenWidth - 310) / 2);
                elemenetGetId('weather').style.width = '270px';
                elemenetGetId('weather').style.height = '310px';
                elemenetGetId('weather').style.transform = 'translateX(' + weatherLeft + 'px) translateY(100px)';
                elemenetGetId('blackBack').style.zIndex = 101;
                elemenetGetId('blackBack').style.backgroundColor = '#00000050';
                elemenetGetId('weather').style.flexDirection = 'column';
                elemenetGetId('weatherMain').style.marginTop = '10px';
                elemenetGetId('weatherMain').style.marginLeft = '0px';
                elemenetGetId('dayWeather').style.top = '137px';
                if (elemenetGetId('button').innerText == '暂时没有有连接到可以访问互联网的网络哦~') {
                    elemenetGetId('weatherMain').style.display = 'flex';
                }
                elemenetGetId('blackBack').onclick = function () {
                    elemenetGetId('weather').style.width = '30px';
                    elemenetGetId('weather').style.height = '30px';
                    elemenetGetId('weatherImg').style.width = '30px';
                    elemenetGetId('weatherImg').style.height = '30px';
                    elemenetGetId('weather').style.padding = '10px';
                    elemenetGetId('weatherMain').style.display = 'none';
                    elemenetGetId('weather').style.position = '';
                    elemenetGetId('weather').style.marginTop = '15px';
                    elemenetGetId('weather').style.marginLeft = '20px';
                    elemenetGetId('blackBack').style.zIndex = -1;
                    elemenetGetId('blackBack').style.backgroundColor = '#00000010';
                    elemenetGetId('weather').style.transform = '';
                    weatherHide = !weatherHide;
                }
            } else {
                elemenetGetClass('feaWeatherbox')[0].style.marginLeft = '-3px';
                elemenetGetClass('feaWeatherbox')[2].style.marginRight = '-3px';
                elemenetGetClass('feaWeatherbox')[0].style.width = '74px';
                elemenetGetClass('feaWeatherbox')[1].style.width = '74px';
                elemenetGetClass('feaWeatherbox')[2].style.width = '74px';
                elemenetGetClass('feaWeather')[0].style.marginBottom = '4px';
                elemenetGetId('weather').style.height = '250px'
                
            }
            setTimeout(function () {
                elemenetGetId('weatherMain').style.display = '';
                if (elemenetGetId('button').innerText == '暂时没有有连接到可以访问互联网的网络哦~') {
                    elemenetGetId('weatherMain').style.display = 'flex';
                }
            }, 300)
            elemenetGetId('click').onclick = function () {
                elemenetGetId('weather').style.width = '30px';
                elemenetGetId('weather').style.height = '30px';
                elemenetGetId('weatherImg').style.width = '30px';
                elemenetGetId('weatherImg').style.height = '30px';
                elemenetGetId('weather').style.padding = '10px';
                elemenetGetId('weatherMain').style.display = 'none';
                weatherHide = !weatherHide;
            }
        } else {
            elemenetGetId('weather').style.width = '30px';
            elemenetGetId('weather').style.height = '30px';
            elemenetGetId('weatherImg').style.width = '30px';
            elemenetGetId('weatherImg').style.height = '30px';
            elemenetGetId('weather').style.padding = '10px';
            elemenetGetId('weatherMain').style.display = 'none';
            if (screenWidth <= 813) {
                elemenetGetId('weather').style.transform = '';
                elemenetGetId('blackBack').style.zIndex = -1;
                elemenetGetId('blackBack').style.backgroundColor = '#00000010';
            }
            weatherHide = !weatherHide;
        }
    }
    elemenetGetId('weatherCityUp').onclick = function () {
        var city = elemenetGetId('weatherCityIn').value
        weatherGet(city, 1)
        chrome.storage.sync.set({ 'weatherCity': city })
    }
}