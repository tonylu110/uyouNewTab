export default class exImgs extends HTMLElement {
  constructor() {
    super()
    this.render()
  }
  render() {
    this.id = 'exImg'
    this.innerHTML = `
    <div class="backgroundTitile">本地图片</div>
    <div class="exImgs" id="exImgs">
      <img id="background0" src="imgs/background - 0.jpg">
      <img id="background1" src="imgs/background - 1.jpg">
      <img id="background2" src="imgs/background - 2.jpg">
      <img id="background3" src="imgs/background - 3.jpg">
      <img id="background4" src="imgs/background - 4.jpg">
      <img id="background5" src="imgs/background - 5.jpg">
    </div>
    <div class="mobileExImgs" style="display: none;">
      <img id="mbackground1" src="imgs/mobile/background - 1.jpg">
      <img id="mbackground2" src="imgs/mobile/background - 2.jpg">
      <img id="mbackground3" src="imgs/mobile/background - 3.jpg">
      <img id="mbackground4" src="imgs/mobile/background - 4.jpg">
      <img id="mbackground5" src="imgs/mobile/background - 5.jpg">
    </div>
    `
  }
}