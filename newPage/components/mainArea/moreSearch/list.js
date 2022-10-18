export function changeImg (img) {
  document.getElementById('moreSearch').style = `
    opacity: 0.0;
    transform: ;
    z-index: 3;
  `
  document.getElementById('searchEngine').src = img
}

export default [
  {
    name: 'google',
    img: 'imgs/google.png'
  },
  {
    name: 'bing',
    img: 'imgs/bing-logo.png'
  },
  {
    name: 'baidu',
    img: 'imgs/baidu.png'
  },
  {
    name: 'ddg',
    img: 'imgs/ddg.svg'
  },
  {
    name: 'yandex',
    img: 'imgs/yandex.png'
  },
  {
    name: 'sougou',
    img: 'imgs/sougou.png'
  },
  {
    name: 'cus',
    img: 'imgs/search.png'
  }
]
