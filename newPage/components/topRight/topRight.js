export default class topRight extends HTMLElement {
  constructor() {
    super()
    this.render()
  }
  render() {
    this.className = 'title'
    this.id = 'title'
    this.style = 'top: 0;'
    this.innerHTML = `
    <div class="titleButton" id="hide" hidden><img src="imgs/hide.png" id="hideImg"></div><!--hide button-->
    <div class="titleButton" id="history" hidden><img src="imgs/fy_ic_history.png" id="historyImg"></div><!--history button-->
    <div class="titleButton" id="reload" hidden><img src="imgs/reload.png" id="reloadImg"></div><!--reload button-->
    <div class="titleButton" id="cal" hidden><img src="imgs/calculator.png" id="calImg"></div><!--calculator button-->
    <div class="titleButton" id="clock" hidden><img src="imgs/timer.png" id="clockImg"></div><!--clock button-->
    `
  }
}