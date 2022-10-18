import searchBar from "./searchBar/searchBar.js";
import moreSearch from "./moreSearch/index.js"
import links from "./links.js";

export default class mainArea extends HTMLElement {
  constructor() {
    super()
    customElements.define('search-bar', searchBar)
    customElements.define('more-search', moreSearch)
    customElements.define('main-link', links)
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
