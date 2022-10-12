export default class bottomRight extends HTMLElement {
  constructor() {
    super()
    this.render()
  }
  render() {
    this.className = 'bottom-right'
    this.id = 'bottom-right'
    this.style = 'bottom: 0;'
    this.innerHTML = `
    <div class="bottomButton" id="down" hidden><img src="imgs/down.png" id="downImg"></div>
    <div class="bottomButton" id="info" hidden><img src="imgs/info.png" id="infoImg"></div><!--info button-->
    `
  }
}