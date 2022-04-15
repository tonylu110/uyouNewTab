import { elemenetGetId, elemenetGetClass } from './function.js'

//dark mode to change style
function dark(alpha) {
    elemenetGetId('click').style.background = '#000000' + alpha;
    document.getElementsByTagName('html')[0].className = 'dark';
    elemenetGetId('hideImg').src = 'imgs/dark/hide.png';
    elemenetGetId('historyImg').src = 'imgs/dark/fy_ic_history.png';
    elemenetGetId('reloadImg').src = 'imgs/dark/reload.png';
    elemenetGetId('calImg').src = 'imgs/dark/calculator.png';
    elemenetGetId('clockImg').src = 'imgs/dark/timer.png';
    elemenetGetId('settingImg').src = 'imgs/dark/setting.png';
    elemenetGetId('downImg').src = 'imgs/dark/down.png';
    elemenetGetId('infoImg').src = 'imgs/dark/info.png';
    elemenetGetId('infoimgbefore').src = 'imgs/dark/back.png';
    elemenetGetId('imgbefore').src = 'imgs/dark/back.png';
    elemenetGetId('oneCloseImg').src = 'imgs/dark/close.png';
    elemenetGetId('settingCloseImg').src = 'imgs/dark/close.png';
    elemenetGetId('backSettingImg').src = 'imgs/dark/to.png';
    elemenetGetClass('feaImg')[0].src = 'imgs/dark/hide.png';
    elemenetGetClass('feaImg')[1].src = 'imgs/dark/fy_ic_history.png';
    elemenetGetClass('feaImg')[2].src = 'imgs/dark/reload.png';
    elemenetGetClass('feaImg')[3].src = 'imgs/dark/calculator.png';
    elemenetGetClass('feaImg')[4].src = 'imgs/dark/timer.png';
    elemenetGetClass('feaImg')[5].src = 'imgs/dark/down.png';
    elemenetGetClass('feaImg')[6].src = 'imgs/dark/info.png';
    elemenetGetId('dlAn').innerText = '暗色';
    elemenetGetClass('otherBtn')[1].style.background = '#44444470';
    elemenetGetClass('otherBtn')[1].style.borderRadius = '10px 10px 0px 0px';
    elemenetGetClass('otherBtn')[2].style.display = '';
}

//light mode to change style
function light() {
    elemenetGetId('click').style.background = '';
    document.getElementsByTagName('html')[0].className = '';
    elemenetGetId('hideImg').src = 'imgs/hide.png';
    elemenetGetId('historyImg').src = 'imgs/fy_ic_history.png';
    elemenetGetId('reloadImg').src = 'imgs/reload.png';
    elemenetGetId('calImg').src = 'imgs/calculator.png';
    elemenetGetId('clockImg').src = 'imgs/timer.png';
    elemenetGetId('settingImg').src = 'imgs/setting.png';
    elemenetGetId('downImg').src = 'imgs/down.png';
    elemenetGetId('infoImg').src = 'imgs/info.png';
    elemenetGetId('infoimgbefore').src = 'imgs/back_black.png';
    elemenetGetId('imgbefore').src = 'imgs/back_black.png';
    elemenetGetId('oneCloseImg').src = 'imgs/close.png';
    elemenetGetId('settingCloseImg').src = 'imgs/close.png';
    elemenetGetId('backSettingImg').src = 'imgs/to.png';
    elemenetGetClass('feaImg')[0].src = 'imgs/hide.png';
    elemenetGetClass('feaImg')[1].src = 'imgs/fy_ic_history.png';
    elemenetGetClass('feaImg')[2].src = 'imgs/reload.png';
    elemenetGetClass('feaImg')[3].src = 'imgs/calculator.png';
    elemenetGetClass('feaImg')[4].src = 'imgs/timer.png';
    elemenetGetClass('feaImg')[5].src = 'imgs/down.png';
    elemenetGetClass('feaImg')[6].src = 'imgs/info.png';
    elemenetGetId('dlAn').innerText = '亮色'
    elemenetGetClass('otherBtn')[1].style.background = '';
    elemenetGetClass('otherBtn')[1].style.borderRadius = '';
    elemenetGetClass('otherBtn')[2].style.display = 'none';

}

export function loadTheme() {
    //onload to dark or light mode
    chrome.storage.sync.get(['dlMode', 'alphaColor', 'dlAlpha'], function (budget) {
        let dlMode = budget.dlMode;
        let alphaColor = budget.alphaColor;
        let dlAlpha = budget.dlAlpha;
        if (typeof (dlMode) == 'undefined') {
            dlMode = '';
        }
        if (typeof (alphaColor) == 'undefined') {
            alphaColor = '50';
        }
        if (typeof (dlAlpha) == 'undefined') {
            dlAlpha = 'show';
        }
        elemenetGetId('click').className = alphaColor;
        if (dlAlpha == 'hide') {
            alphaColor = '00';
            elemenetGetId('blackBackShow').innerText = '隐藏';
            elemenetGetId('blackBackShow').className = 'otherFeaturesBefore';
            elemenetGetId('backAlpha').style.display = 'none';
            elemenetGetClass('dlMore')[1].style.display = 'none';
            elemenetGetClass('dlMore')[0].style.marginBottom = '';
            elemenetGetId('click').style.background = '#00000000';
        }
        if (dlMode == '') {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                dark(alphaColor);
            }
            window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
                if (event.matches) {
                    dark(alphaColor);
                } else {
                    light();
                }
            })
        } else if (dlMode == 'dark') {
            dark(alphaColor);
            elemenetGetId('click').className = alphaColor;
            elemenetGetId('colorMode').innerText = '深色模式'
            elemenetGetId('reDlAn').className = 'otherFeaturesBefore'
        } else {
            elemenetGetId('colorMode').innerText = '亮色模式'
            elemenetGetId('reDlAn').className = 'otherFeaturesBefore'
        }
        elemenetGetId('backAlpha').innerText = '当前背景暗色遮罩深度为：' + alphaColor;
    })
}

//customize the dark or light mode
export function dlUse() {
    elemenetGetId('dlAn').onclick = function () {
        if (elemenetGetId('dlAn').innerText == '暗色') {
            light();
            elemenetGetId('otherSettings').style.background = '#ffffff70';
            chrome.storage.sync.set({ 'dlMode': 'light' });
            if (elemenetGetId('loadingAn').innerText == '隐藏') {
                elemenetGetClass('otherBtn')[0].style.background = '#ffffff50';
            } else {
                elemenetGetClass('otherBtn')[0].style.background = '#ffffff90';
            }
            elemenetGetId('colorMode').innerText = '亮色模式';
        } else {
            dark(elemenetGetId('click').className);
            elemenetGetId('otherSettings').style.background = '#44444470';
            chrome.storage.sync.set({ 'dlMode': 'dark' });
            if (elemenetGetId('loadingAn').innerText == '隐藏') {
                elemenetGetClass('otherBtn')[0].style.background = '#44444450';
            } else {
                elemenetGetClass('otherBtn')[0].style.background = '#44444490';
            }
            elemenetGetId('colorMode').innerText = '深色模式'
        }
        elemenetGetId('reDlAn').className = 'otherFeaturesBefore'
    }
    elemenetGetId('reDlAn').onclick = function () {
        chrome.storage.sync.set({ 'dlMode': '' });
        location.reload();
    }
    elemenetGetId('setBackAlpha').onclick = function () {
        let alphaColor = elemenetGetId('blackBackColor').value;
        if (Number(alphaColor) < 10) {
            alphaColor = '0' + alphaColor;
        }
        chrome.storage.sync.set({ 'alphaColor': alphaColor });
        dark(alphaColor);
        elemenetGetId('click').className = alphaColor;
        elemenetGetId('backAlpha').innerText = '当前背景暗色遮罩深度为：' + alphaColor;
    }
    elemenetGetId('blackBackShow').onclick = function () {
        let isHide = elemenetGetId('blackBackShow').innerText;
        let alphaColor = elemenetGetId('click').className;
        if (isHide == '显示') {
            elemenetGetId('blackBackShow').innerText = '隐藏';
            elemenetGetId('blackBackShow').className = 'otherFeaturesBefore';
            elemenetGetId('backAlpha').style.display = 'none';
            elemenetGetClass('dlMore')[1].style.display = 'none';
            elemenetGetClass('dlMore')[0].style.marginBottom = '';
            elemenetGetId('click').style.background = '#00000000';
            chrome.storage.sync.set({ 'dlAlpha': 'hide' });
        } else {
            elemenetGetId('blackBackShow').innerText = '显示';
            elemenetGetId('blackBackShow').className = 'otherFeatures';
            elemenetGetId('backAlpha').style.display = '';
            elemenetGetClass('dlMore')[1].style.display = '';
            elemenetGetClass('dlMore')[0].style.marginBottom = '10px';
            elemenetGetId('click').style.background = '#000000' + alphaColor;
            chrome.storage.sync.set({ 'dlAlpha': 'show' });
        }
    }
}