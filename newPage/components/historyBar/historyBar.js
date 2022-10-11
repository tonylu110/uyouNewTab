export default class historyBar extends HTMLElement {
  constructor() {
    super()
    this.render()
  }
  render() {
    this.className = 'bar'
    this.id = 'bar'
    this.innerHTML = `
    <div class="historyButton">
      <div class="historyback" id="historyback">
        <img id="imgbefore" src="imgs/back_black.png">
      </div>
    </div>
    <div id="historyIn"></div>
    `
  }
}