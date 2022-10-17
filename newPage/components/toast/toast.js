export default class toast extends HTMLElement {
  constructor() {
    super();
    this.render()
  }
  render() {
    this.id = 'toast'
    this.style = 'display: none;'
    this.innerHTML = `
    <div id="Msg"></div>
    <div id="toastButton">确认</div>
    `
  }
}
