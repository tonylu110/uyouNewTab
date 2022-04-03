import settingMenus from '../features/settingMenu.js';
import otherFeatures from '../features/otherSetting.js';
import { moreSearch } from '../features/search.js';
import { hsFeature } from '../features/hsFeature.js';
import { hsLink } from '../features/hsLink.js';
import { changeLink, useChangeLink } from '../features/changeLink.js';
import { elemenetGetId, body } from './function.js';
import { background, loaclImgChange, apiImg } from '../features/backgroud.js'

export default function settingUse() {
    var screenWidth = body().offsetWidth;//get screen width
    var settingMain = elemenetGetId('settingMain');
    var settingInnerMain = elemenetGetId('settingInnerMain');
    var settingCloseButton = elemenetGetId('settingCloseButton');
    var blackBack = elemenetGetId('blackBack');
    var settingMenu = elemenetGetId('settingMenu');
    var backSettingMenu = elemenetGetId('backSettingMenus');
    function closeSttingMain() {
        elemenetGetId('settingMain').style.transition = '0.5s';
        settingMain.className = 'settingMainBefore';
        settingCloseButton.style.display = 'none';
        backSettingMenu.style.display = 'none';
        settingInnerMain.style.display = 'none';
        settingMenu.style.display = 'none';
        blackBack.style.zIndex = -1;
        blackBack.style.backgroundColor = '#00000010';
        viewImg.style.display = 'none';
        fileName.innerText = '选择你的图片';
        backgroundSetButton.hidden = true;
        onlinePicUrl.value = '';
        picError.hidden = true;
        elemenetGetId('exImg').style.display = '';
        if (screenWidth <= 813) {
            settingMenu.style.display = 'none';
            settingMain.style.width = '0px';
            settingMain.style.height = '0px';
            settingMain.style.padding = '0px';
        }
    }
    elemenetGetId('settings').onclick = function () {
        settingMain.className = 'settingMain';
        elemenetGetId('settingMain').style.transition = '0.5s';
        setTimeout(function () {
            if (screenWidth <= 813) {
                settingInnerMain.style.display = 'none';
                settingMenu.style.marginRight = '-20px';
            } else {
                settingInnerMain.style.display = '';
            }
            settingCloseButton.style.display = '';
            settingMenu.style.display = '';
        }, 450)
        blackBack.style.zIndex = 150;
        blackBack.style.backgroundColor = '#00000050';
        if (screenWidth <= 813) {
            settingMain.style.width = '70%';
            settingMain.style.height = '50%';
            settingMain.style.padding = '40px';
            settingMenu.style.display = 'none';
        }
        blackBack.addEventListener("click", function () {
            if (elemenetGetId('changeLink').style.display == 'none' && elemenetGetId('toast').style.display == "none") {
                closeSttingMain();
            }
        })

    }
    settingCloseButton.onclick = function () {
        closeSttingMain();
    }

    background();
    hsFeature();
    hsLink();
    changeLink();
    useChangeLink();
    settingMenus();
    loaclImgChange();
    otherFeatures();
    moreSearch();
    apiImg();
}