export default class mainArea extends HTMLElement {
  constructor() {
    super()
    this.render()
  }
  render() {
    this.className = 'main'
    this.id = 'main'
    this.innerHTML = `
    <search-bar></search-bar>
    <more-search></more-search>
    <main-link></main-link>
    `
  }
}