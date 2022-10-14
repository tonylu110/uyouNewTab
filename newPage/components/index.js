import mainCalc from "./calculator/calc.js";
import mainArea from "./mainArea/index.js";
import infoBar from "./infoBar/infoBar.js";
import historyBar from "./historyBar/historyBar.js";
import bottomRight from "./bottomRight/bottomRight.js";
import topRight from "./topRight/topRight.js";

customElements.define('main-calc', mainCalc)
customElements.define('main-area', mainArea)
customElements.define('info-bar', infoBar)
customElements.define('history-bar', historyBar)
customElements.define('bottom-right', bottomRight)
customElements.define('top-right', topRight)