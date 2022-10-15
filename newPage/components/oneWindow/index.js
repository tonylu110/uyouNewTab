export default class oneWindow extends HTMLElement {
  constructor() {
    super()
    this.render()
  }
  render() {
    this.className = 'oneMainBefore'
    this.id = 'oneMain'
    this.innerHTML = `
    <div id="closeButton"><img src="imgs/close.png" id="oneCloseImg"></div>
    <div id="innerMain">
      <div id="oneNum" style="font-size: 0px;"></div>
      <div id="oneTxt" style="font-size: 0px;"></div>
      <div id="oneFrom" style="font-size: 0px;"></div>
    </div>
    `
  }
}