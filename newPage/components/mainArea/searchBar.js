export default class searchBar extends HTMLElement {
  constructor() {
    super()
    this.render()
  } 
  render() {
    this.className = 'searchbar'
    this.id = 'searchbar'
    this.style.display = 'none'
    this.innerHTML = `
    <img id="searchEngine" hidden>
    <input type="text" id="keywords">
    <div class="keywordsRight" style="display: none;"></div>
    <div id="searchBtn" style="color: transparent;">搜索</div>
    `
  }
}