import searchBar from "./mainArea/searchBar.js";
import moreSearch from "./mainArea/moreSearch.js"
import links from "./mainArea/links.js";
import mainCalc from "./calculator/calc.js";
import mainArea from "./mainArea/index.js";
import infoBar from "./infoBar/infoBar.js";
import historyBar from "./historyBar/historyBar.js";
import bottomRight from "./bottomRight/bottomRight.js";

customElements.define('search-bar', searchBar)
customElements.define('more-search', moreSearch)
customElements.define('main-link', links)
customElements.define('main-calc', mainCalc)
customElements.define('main-area', mainArea)
customElements.define('info-bar', infoBar)
customElements.define('history-bar', historyBar)
customElements.define('bottom-right', bottomRight)