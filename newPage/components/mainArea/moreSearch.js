export default class moreSearch extends HTMLElement {
  constructor() {
    super()
    this.render()
  }
  render() {
    this.className = 'moreSearch'
    this.id = 'moreSearch'
    this.style.opacity = '0.0'
    this.innerHTML = `
    <div class="searchEngines" id="searchEngines"><!--set search engine-->
      <div id="cus" style="display: none;"><img src="imgs/search.png"></div>
      <div id="google"><img src="imgs/google.png"></div><!--google-->
      <div id="bing" style="padding: 15px; width: 70px; height: 70px;"><img src="imgs/bing-logo.png" style="width: 70px; height: 70px;"></div><!--bing-->
      <div id="baidu" style="padding: 20px; height: 60px; width: 60px;"><img src="imgs/baidu.png" style="width: 60px; height: 60px;"></div><!--baidu-->
      <div id="ddg" style="display: none;"><img src="imgs/ddg.svg"></div>
      <div id="yandex" style="display: none;"><img src="imgs/yandex.png"></div>
      <div id="sougou" style="display: none;"><img src="imgs/sougou.png"></div>
    </div>
    `
  }
}