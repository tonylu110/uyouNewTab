import settingUse from './settings.js'
import printInfo from './print.js'
import { hsFeatureUse } from '../features/hsFeature.js'
import { hsLinkUse } from '../features/hsLink.js'
import { useLinkChange } from '../features/changeLink.js'
import { loadTheme, dlUse } from './dark2light.js'
import { getTime, fesUse, otherSettingOnLoad, changeStyle } from './onLoadFeature.js'
import { searchUse, showOrHideSearch } from '../features/search.js'

printInfo();//prtint info

document.addEventListener('DOMContentLoaded', () => {
    settingUse();
    loadTheme();
    fesUse();
    otherSettingOnLoad();
    dlUse();
    hsFeatureUse();
    hsLinkUse();
    useLinkChange();
    getTime();
    changeStyle();
    searchUse();
    showOrHideSearch();
})
