import searchBar from "./mainArea/searchBar.js";
import moreSearch from "./mainArea/moreSearch.js"
import links from "./mainArea/links.js";
import mainCalc from "./calc.js";
import mainArea from "./mainArea/index.js";

customElements.define('search-bar', searchBar)
customElements.define('more-search', moreSearch)
customElements.define('main-link', links)
customElements.define('main-calc', mainCalc)
customElements.define('main-area', mainArea)