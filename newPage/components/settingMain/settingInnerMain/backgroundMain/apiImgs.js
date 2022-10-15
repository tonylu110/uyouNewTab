export default class apiimgs extends HTMLElement {
  constructor() {
    super()
    this.render()
  }
  render() {
    this.id = 'apiImg'
    this.innerHTML = `
    <div class="backgroundTitile">自动切换图片</div>
    <div id="apiImgs">
      <div class="apiImgButton" id="bingImg">Bing 每日一图</div>
      <div class="apiImgButton" id="cwImg">东方 Project</div>
    </div>
    <div id="mobileApiImgs" style="display: none;">
      <div class="apiImgButton" id="bingImgMobile">Bing 每日一图</div>
      <div class="apiImgButton" id="cwImgMobile">东方 Project</div>
    </div>
    <div class="cusApiImg">
      <input type="text" placeholder="请输入你需要的 api 链接" id="cusApiPic">
      <div class="otherFeatures" id="cusImgApi">确定</div>
    </div>
    `
  }
}