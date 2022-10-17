import mainCalc from "./calculator/calc.js";
import mainArea from "./mainArea/index.js";
import infoBar from "./infoBar/infoBar.js";
import historyBar from "./historyBar/historyBar.js";
import bottomRight from "./bottomRight/bottomRight.js";
import topRight from "./topRight/topRight.js";
import topLeft from "./topLeft/topLeft.js";
import oneWindow from "./oneWindow/index.js";
import settingMain from "./settingMain/index.js";
import changeLink from "./changeLink/changeLink.js";

customElements.define('main-calc', mainCalc)
customElements.define('main-area', mainArea)
customElements.define('info-bar', infoBar)
customElements.define('history-bar', historyBar)
customElements.define('bottom-right', bottomRight)
customElements.define('top-right', topRight)
customElements.define('top-left', topLeft)
customElements.define('one-window', oneWindow)
customElements.define('setting-main', settingMain)
customElements.define('change-link', changeLink)
