export default class donateMain extends HTMLElement {
  constructor() {
    super()
    this.render()
  }
  render() {
    this.id = 'donateMain'
    this.className = 'otherInfo'
    this.style = 'display: none;'
    this.innerHTML = `
    <div class="settingsInnerTitle">
      <div class="donateTitle">捐赠</div>
    </div>
    <div class="donateInner">
      <div class="donateMsg">如果你觉得这个项目帮到你的话可以请我喝杯咖啡吗？</div>
      <div class="donateImg" id="donateImg">
        <img class="dotImg" src="imgs/donate/donate1.png">
        <img class="dotImg" src="imgs/donate/donate2.jpg">
        <img class="dotImg" src="imgs/donate/donate3.png">
      </div>
    </div>
    `
  }
}