import hideUse from '../features/hide.js'
import weatherUse from '../features/weather.js'
import calUse from '../features/cal.js'
import infoUse from '../features/info.js'
import historyUse from '../features/history.js'
import settingUse from './settings.js'
import printInfo from './print.js'
import { hsFeatureUse } from '../features/hsFeature.js'
import { hsLinkUse } from '../features/hsLink.js'
import { useLinkChange } from '../features/changeLink.js'
import { one, oneUse } from '../features/one.js'
import { loadTheme, dlUse } from './dark2light.js'
import { searchUse, searchOnload, searchChangeUse } from '../features/search.js'
import { mainUse, changeStyle, getTime } from './main.js'

printInfo();

window.onload = function () {
    settingUse();
    loadTheme();
    mainUse();
    dlUse();
    weatherUse();
    hideUse();
    hsFeatureUse();
    hsLinkUse();
    useLinkChange();
    calUse();
    getTime();
    one();
    oneUse();
    changeStyle();
    infoUse();
    historyUse();
    searchUse();
    searchChangeUse();
    searchOnload();
}