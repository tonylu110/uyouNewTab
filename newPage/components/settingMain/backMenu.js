export default class backMenu extends HTMLElement {
  constructor() {
    super()
    this.render()
  }
  render() {
    this.id = 'backSettingMenus'
    this.style = 'display: none;'
    this.innerHTML = `
    <div id="backSettingMenu">
      <img src="imgs/to.png" id="backSettingImg">
    </div>
    <div id="backSettingMenuName"></div>
    `
  }
}