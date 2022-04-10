import { elemenetGetId, elemenetGetClass, body, elemIdSty } from '../main/function.js'

function menuStyle() {
    elemenetGetId('backgroundSettings').style.backgroundColor = 'transparent';
    elemenetGetId('festuresSettings').style.backgroundColor = 'transparent';
    elemenetGetId('linkSettings').style.backgroundColor = 'transparent';
    elemenetGetId('searchSettings').style.backgroundColor = 'transparent';
    elemenetGetId('helpInfo').style.backgroundColor = 'transparent';
    elemenetGetId('donateInfo').style.backgroundColor = 'transparent';
    elemenetGetId('otherSettings').style.backgroundColor = 'transparent'
}
function hideMenu() {
    elemenetGetId('backgroundSetting').style.display = 'none';
    elemenetGetId('festuresSetting').style.display = 'none';
    elemenetGetId('linkSetting').style.display = 'none';
    elemenetGetId('searchSetting').style.display = 'none';
    elemenetGetId('helpMain').style.display = 'none';
    elemenetGetId('donateMain').style.display = 'none';
    elemenetGetId('otherSetting').style.display = 'none';
}
export default function settingMenus() {
    var screenWidth = body().offsetWidth;//get screen width
    function mobileUse(num, name) {
        var settingMainWidth = elemenetGetId('settingMain').offsetWidth;
        elemenetGetId('settingMenu').style.display = 'none';
        elemenetGetId('settingInnerMain').style.display = '';
        elemenetGetId('backSettingMenus').style.display = '';
        elemenetGetId('settingInnerMain').style.marginTop = '20px';
        elemenetGetId('settingInnerMain').style.borderRadius = '8px';
        elemenetGetId('settingMain').style.paddingLeft = '20px';
        elemenetGetId('settingMain').style.paddingRight = '20px';
        elemenetGetId('settingMain').style.width = settingMainWidth - 42 + 'px';
        elemenetGetId('settingMain').style.transition = 'padding 0s';
        elemenetGetClass('settingsInnerTitle')[num].style.display = 'none';
        elemenetGetId('backSettingMenuName').innerText = name;
        elemIdSty('backSettingMenu').display = ''
    }
    elemenetGetId('backSettingMenu').onclick = () => {
        var settingMainWidth = elemenetGetId('settingMain').offsetWidth;
        elemenetGetId('settingMenu').style.display = '';
        elemenetGetId('settingInnerMain').style.display = 'none';
        elemenetGetId('backSettingMenus').style.display = 'none';
        elemenetGetId('settingMain').style.padding = '40px';
        elemenetGetId('settingMain').style.width = settingMainWidth - 82 + 'px';
        elemenetGetId('settingMain').style.transition = 'padding 0s';
    }
    elemenetGetId('backgroundSettings').onclick = () => {
        menuStyle();
        chrome.storage.sync.get(['dlMode'], (budget) => {
            let dlMode = budget.dlMode;
            if (typeof (dlMode) == 'undefined') {
                dlMode = '';
            }
            if (dlMode == '') {
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    elemenetGetId('backgroundSettings').style.backgroundColor = '#44444470';
                } else {
                    elemenetGetId('backgroundSettings').style.backgroundColor = '#ffffff70';
                }
            } else if (dlMode == 'dark') {
                elemenetGetId('backgroundSettings').style.backgroundColor = '#44444470';
            } else if (dlMode == 'light') {
                elemenetGetId('backgroundSettings').style.backgroundColor = '#ffffff70';
            }
        })
        hideMenu();
        elemenetGetId('backgroundSetting').style.display = '';
        var settingWidth = elemenetGetId('settingMain').offsetWidth;
        if (screenWidth <= 813) {
            mobileUse(0, '背景设置');
            elemenetGetId('mbackground1').style.width = settingWidth / 3 - 20 + 'px';
            elemenetGetId('mbackground2').style.width = settingWidth / 3 - 21 + 'px';
            elemenetGetId('mbackground3').style.width = settingWidth / 3 - 21 + 'px';
            elemenetGetId('mbackground3').style.marginRight = '0px';
            elemenetGetId('mbackground4').style.width = settingWidth / 3 - 20 + 'px';
            elemenetGetId('mbackground5').style.width = settingWidth / 3 - 21 + 'px';
            elemenetGetId('uploadBtn').style.width = settingWidth - 62 + 'px';
            elemenetGetId('onlinePicUrl').style.width = settingWidth - 97 + 'px';
            elemenetGetId('review').style.width = '70px';
            elemenetGetClass('apiImgButton')[2].style.width = settingWidth / 2 - 46.5 + 'px';
            elemenetGetClass('apiImgButton')[3].style.width = settingWidth / 2 - 46.5 + 'px';
            elemIdSty('cusApiPic').width = settingWidth - 160 + 'px';
        }
    }
    elemenetGetId('festuresSettings').onclick = () => {
        menuStyle();
        chrome.storage.sync.get(['dlMode'], (budget) => {
            let dlMode = budget.dlMode;
            if (typeof (dlMode) == 'undefined') {
                dlMode = '';
            }
            if (dlMode == '') {
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    elemenetGetId('festuresSettings').style.backgroundColor = '#44444470';
                } else {
                    elemenetGetId('festuresSettings').style.backgroundColor = '#ffffff70';
                }
            } else if (dlMode == 'dark') {
                elemenetGetId('festuresSettings').style.backgroundColor = '#44444470';
            } else if (dlMode == 'light') {
                elemenetGetId('festuresSettings').style.backgroundColor = '#ffffff70';
            }
        })
        hideMenu();
        elemenetGetId('festuresSetting').style.display = '';
        if (screenWidth <= 813) {
            mobileUse(1, '功能设置');
        }
    }
    elemenetGetId('linkSettings').onclick = () => {
        menuStyle();
        chrome.storage.sync.get(['dlMode'], (budget) => {
            let dlMode = budget.dlMode;
            if (typeof (dlMode) == 'undefined') {
                dlMode = '';
            }
            if (dlMode == '') {
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    elemenetGetId('linkSettings').style.backgroundColor = '#44444470';
                } else {
                    elemenetGetId('linkSettings').style.backgroundColor = '#ffffff70';
                }
            } else if (dlMode == 'dark') {
                elemenetGetId('linkSettings').style.backgroundColor = '#44444470';
            } else if (dlMode == 'light') {
                elemenetGetId('linkSettings').style.backgroundColor = '#ffffff70';
            }
        })
        hideMenu();
        elemenetGetId('linkSetting').style.display = '';
        if (screenWidth <= 813) {
            mobileUse(2, '书签设置');
        }
    }
    elemenetGetId('searchSettings').onclick = () => {
        menuStyle();
        chrome.storage.sync.get(['dlMode'], (budget) => {
            let dlMode = budget.dlMode;
            if (typeof (dlMode) == 'undefined') {
                dlMode = '';
            }
            if (dlMode == '') {
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    elemenetGetId('searchSettings').style.backgroundColor = '#44444470';
                } else {
                    elemenetGetId('searchSettings').style.backgroundColor = '#ffffff70';
                }
            } else if (dlMode == 'dark') {
                elemenetGetId('searchSettings').style.backgroundColor = '#44444470';
            } else if (dlMode == 'light') {
                elemenetGetId('searchSettings').style.backgroundColor = '#ffffff70';
            }
        })
        hideMenu();
        elemenetGetId('searchSetting').style.display = '';
        if (screenWidth <= 813) {
            mobileUse(3, '搜索引擎');
        }
    }
    elemenetGetId('otherSettings').onclick = () => {
        menuStyle();
        chrome.storage.sync.get(['dlMode'], (budget) => {
            let dlMode = budget.dlMode;
            if (typeof (dlMode) == 'undefined') {
                dlMode = '';
            }
            if (dlMode == '') {
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    elemenetGetId('otherSettings').style.backgroundColor = '#44444470';
                } else {
                    elemenetGetId('otherSettings').style.backgroundColor = '#ffffff70';
                }
            } else if (dlMode == 'dark') {
                elemenetGetId('otherSettings').style.backgroundColor = '#44444470';
            } else if (dlMode == 'light') {
                elemenetGetId('otherSettings').style.backgroundColor = '#ffffff70';
            }
        })
        hideMenu();
        elemenetGetId('otherSetting').style.display = '';
        if (screenWidth <= 813) {
            mobileUse(4, '其他设置');
            var otherBtnWidth = elemenetGetClass('otherBtn')[0].offsetWidth;
            var msWidth = elemenetGetClass('ms')[0].offsetWidth;
            elemenetGetId('loadingTimeNum').style.width = otherBtnWidth - 150 - msWidth + 'px';
        } else {
            var otherBtnWidth = elemenetGetClass('otherBtn')[0].offsetWidth;
            var msWidth = elemenetGetClass('ms')[0].offsetWidth;
            elemenetGetId('loadingTimeNum').style.width = otherBtnWidth - 140 - msWidth + 'px';
        }
    }
    elemenetGetId('helpInfo').onclick = () => {
        menuStyle();
        chrome.storage.sync.get(['dlMode'], (budget) => {
            let dlMode = budget.dlMode;
            if (typeof (dlMode) == 'undefined') {
                dlMode = '';
            }
            if (dlMode == '') {
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    elemenetGetId('helpInfo').style.backgroundColor = '#44444470';
                } else {
                    elemenetGetId('helpInfo').style.backgroundColor = '#ffffff70';
                }
            } else if (dlMode == 'dark') {
                elemenetGetId('helpInfo').style.backgroundColor = '#44444470';
            } else if (dlMode == 'light') {
                elemenetGetId('helpInfo').style.backgroundColor = '#ffffff70';
            }
        })
        hideMenu();
        elemenetGetId('helpMain').style.display = '';
        if (screenWidth <= 813) {
            mobileUse(5, '帮助 Q&A');
        }
    }
    elemenetGetId('donateInfo').onclick = () => {
        menuStyle();
        chrome.storage.sync.get(['dlMode'], (budget) => {
            let dlMode = budget.dlMode;
            if (typeof (dlMode) == 'undefined') {
                dlMode = '';
            }
            if (dlMode == '') {
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    elemenetGetId('donateInfo').style.backgroundColor = '#44444470';
                } else {
                    elemenetGetId('donateInfo').style.backgroundColor = '#ffffff70';
                }
            } else if (dlMode == 'dark') {
                elemenetGetId('donateInfo').style.backgroundColor = '#44444470';
            } else if (dlMode == 'light') {
                elemenetGetId('donateInfo').style.backgroundColor = '#ffffff70';
            }
        })
        hideMenu();
        elemenetGetId('donateMain').style.display = '';
        var settingWidth = elemenetGetId('settingMain').offsetWidth;
        if (screenWidth <= 813) {
            elemenetGetClass('dotImg')[1].style.marginRight = '0px';
            elemenetGetClass('dotImg')[0].style.maxWidth = settingWidth / 2 - 26.5 + 'px';
            elemenetGetClass('dotImg')[1].style.maxWidth = settingWidth / 2 - 26.5 + 'px';
            elemenetGetClass('dotImg')[2].style.maxWidth = settingWidth / 2 - 26.5 + 'px';
            mobileUse(6, '捐赠');
        }
    }
}