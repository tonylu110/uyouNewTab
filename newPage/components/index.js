import mainCalc from "./calculator/calc.js";
import mainArea from "./mainArea/index.js";
import infoBar from "./infoBar/infoBar.js";
import historyBar from "./historyBar/historyBar.js";
import bottomRight from "./bottomRight/bottomRight.js";
import topRight from "./topRight/topRight.js";
import topLeft from "./topLeft/topLeft.js";
import oneWindow from "./oneWindow/index.js";
import backMenu from "./settingMain/backMenu.js";
import settingMenu from "./settingMain/settingMenu/index.js";
import backgroundMain from "./settingMain/settingInnerMain/backgroundMain/index.js";
import festuresSetting from "./settingMain/settingInnerMain/featuresSetting/index.js";
import linkSetting from "./settingMain/settingInnerMain/linkSetting/index.js";
import searchSetting from "./settingMain/settingInnerMain/searchSetting/index.js";
import otherSetting from "./settingMain/settingInnerMain/otherSetting/index.js";

customElements.define('main-calc', mainCalc)
customElements.define('main-area', mainArea)
customElements.define('info-bar', infoBar)
customElements.define('history-bar', historyBar)
customElements.define('bottom-right', bottomRight)
customElements.define('top-right', topRight)
customElements.define('top-left', topLeft)
customElements.define('one-window', oneWindow)

customElements.define('back-menu', backMenu)
customElements.define('setting-menu', settingMenu)
customElements.define('background-main', backgroundMain)
customElements.define('features-setting', festuresSetting)
customElements.define('link-setting', linkSetting)
customElements.define('search-setting', searchSetting)
customElements.define('other-setting', otherSetting)