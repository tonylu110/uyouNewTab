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
import toast from "./toast/toast.js";

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
customElements.define('toast-main', toast)

document.body.innerHTML = `
<div id="loading" style="display: none;">
  <div>加载中...</div>
</div>
<div id="blackBack"></div>
<div id="click"></div>
<div id="picurl"></div>
<change-link></change-link>
<toast-main></toast-main>
<setting-main></setting-main>
<!-- This is top-right button -->
<top-right></top-right>
<!-- This is top-left button -->
<top-left></top-left>
<!-- This is bottom-right button -->
<bottom-right></bottom-right>
<!-- This is history bar -->
<history-bar></history-bar>
<!-- This is info bar -->
<info-bar></info-bar>
<!-- This is searchmain area -->
<main-area></main-area>
<!-- This is calculator area -->
<main-calc></main-calc>
<!-- This is Clock area -->
<div class="mainClock" id="mainClock" style="display: none;">
  <div id="time"></div>
</div>
<one-window></one-window>
<a class="button" id="button"></a>
`
