export default function (weather) {
  if (weather.search("雪") != -1) {
    return 'imgs/weather/03.png';
  } else if (weather.search("雨") != -1) {
    return'imgs/weather/04.png';
  } else if (weather.search("多云") != -1) {
    return 'imgs/weather/00.png';
  } else if (weather.search("晴") != -1) {
    return 'imgs/weather/01.png';
  } else if (weather.search("阴") != -1) {
    return  'imgs/weather/02.png';
  } else {
    return 'imgs/dLinkIcon.png';
  }
}
