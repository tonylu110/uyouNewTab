import oneDataGet from "./oneDataGet.js";
import isMobile from "../../util/isMobile.js";
import openOneWindow from "./openOneWindow.js";

export default class oneWindow extends HTMLElement {
  constructor() {
    super()
    this.render()
    oneDataGet()
    openOneWindow()
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
    document.getElementById('closeButton').addEventListener('click', () => {
      this.closeOneWindow()
    })
  }
  closeOneWindow() {
    document.getElementById('blackBack').style = `
    z-index: -1;
    background-color: #00000010;
    `
    if (isMobile()) {
      document.getElementById('oneMain').style = `
      width: 0px;
      height: 0px;
      padding: 0px;
      margin-bottom: 20vh;
      `
      document.getElementById('oneMain').className = 'oneMainBeforeMobile'
    } else {
      document.getElementById('oneMain').className = 'oneMainBefore'
    }
    document.getElementById('closeButton').style = `
    width: 0px;
    height: 0px;
    padding: 0px;
    `
    document.getElementById('oneNum').style.fontSize = '0px'
    document.getElementById('oneTxt').style.fontSize = '0px'
    document.getElementById('oneFrom').style.fontSize = '0px'
    document.getElementById('oneNum').style.transition = '0s'
    document.getElementById('oneTxt').style.transition = '0s'
    document.getElementById('oneFrom').style.transition = '0s'
    setTimeout(() => {
      document.getElementById('oneNum').style.color = 'transparent'
      document.getElementById('oneTxt').style.color = 'transparent'
      document.getElementById('oneFrom').style.color = 'transparent'
    }, 502)
    setTimeout(() => {
      document.getElementById('oneNum').style.transition = '0.5s'
      document.getElementById('oneTxt').style.transition = '0.5s'
      document.getElementById('oneFrom').style.transition = '0.5s'
    }, 1000)
  }
}
