import list from './list.js'

export default class helpMain extends HTMLElement {
  constructor() {
    super()
    this._data = {
      list
    }
    this.render()
  }
  render() {
    this.id = 'helpMain'
    this.className = 'otherInfo'
    this.style = 'display: none;'
    this.innerHTML = `
    <div class="settingsInnerTitle">
      <div class="helpTitle">帮助 Q&A</div>
    </div>
    <div class="helpInner">
      ${this._data.list.map(item => {
        return `
        <div class="helpBox">
          <div class="helpQ">${item.helpQ}</div>
          <div class="helpA">${item.helpA}</div>
        </div>
        `
      }).join('')}
    </div>
    `
  }
}