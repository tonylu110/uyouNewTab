import { elemenetGetId, body, onShow, onHide } from "../main/function.js";

export function hsFeature() {
    var screenWidth = body().offsetWidth;//get screen width
    var hideHS = elemenetGetId('hideHS');
    var historyHS = elemenetGetId('historyHS');
    var reloadHS = elemenetGetId('reloadHS');
    var calHS = elemenetGetId('calHS');
    var timeHS = elemenetGetId('timeHS');
    var downHS = elemenetGetId('downHS');
    var infoHS = elemenetGetId('infoHS');
    var oneHS = elemenetGetId('oneHS');
    hideHS.onclick = function () {
        if (hideHS.className == 'hsFeatures') {
            chrome.storage.local.set({ 'hideHS': 'hide' });
            hideHS.className = 'hsFeatureHides';
            hideHS.innerText = '隐藏';
            elemenetGetId('hide').hidden = true;
            if (screenWidth <= 813) {
                elemenetGetId('reload').style.marginLeft = '0px'
                if (historyHS.className == 'hsFeatureHides') {
                    elemenetGetId('cal').style.marginLeft = '0px'
                }
            }
        } else {
            chrome.storage.local.set({ 'hideHS': 'show' });
            hideHS.className = 'hsFeatures';
            hideHS.innerText = '显示';
            elemenetGetId('hide').hidden = false;
            if (screenWidth <= 813) {
                elemenetGetId('reload').style.marginLeft = '20px'
                elemenetGetId('cal').style.marginLeft = '20px'
            }
        }
    }
    historyHS.onclick = function () {
        if (historyHS.className == 'hsFeatures') {
            chrome.storage.local.set({ 'historyHS': 'hide' });
            historyHS.className = 'hsFeatureHides';
            historyHS.innerText = '隐藏';
            elemenetGetId('history').hidden = true;
        } else {
            chrome.storage.local.set({ 'historyHS': 'show' });
            historyHS.className = 'hsFeatures';
            historyHS.innerText = '显示';
            elemenetGetId('history').hidden = false;
        }
    }
    reloadHS.onclick = function () {
        if (reloadHS.className == 'hsFeatures') {
            chrome.storage.local.set({ 'reloadHS': 'hide' });
            reloadHS.className = 'hsFeatureHides';
            reloadHS.innerText = '隐藏';
            elemenetGetId('reload').hidden = true;
            if (screenWidth <= 813 && hideHS.className == 'hsFeatureHides') {
                elemenetGetId('cal').style.marginLeft = '0px'
            }
        } else {
            chrome.storage.local.set({ 'reloadHS': 'show' });
            reloadHS.className = 'hsFeatures';
            reloadHS.innerText = '显示';
            elemenetGetId('reload').hidden = false;
            if (screenWidth <= 813 && hideHS.className == 'hsFeatureHides') {
                elemenetGetId('cal').style.marginLeft = '20px'
            }
        }
    }
    calHS.onclick = function () {
        if (calHS.className == 'hsFeatures') {
            chrome.storage.local.set({ 'calHS': 'hide' });
            calHS.className = 'hsFeatureHides';
            calHS.innerText = '隐藏';
            elemenetGetId('cal').hidden = true;
        } else {
            chrome.storage.local.set({ 'calHS': 'show' });
            calHS.className = 'hsFeatures';
            calHS.innerText = '显示';
            elemenetGetId('cal').hidden = false;
            if (screenWidth <= 813 && hideHS.className == 'hsFeatures') {
                elemenetGetId('cal').style.marginLeft = '20px'
            }
        }
    }
    timeHS.onclick = function () {
        if (timeHS.className == 'hsFeatures') {
            chrome.storage.local.set({ 'timeHS': 'hide' });
            timeHS.className = 'hsFeatureHides';
            timeHS.innerText = '隐藏';
            elemenetGetId('clock').hidden = true;
        } else {
            chrome.storage.local.set({ 'timeHS': 'show' });
            timeHS.className = 'hsFeatures';
            timeHS.innerText = '显示';
            elemenetGetId('clock').hidden = false;
        }
    }
    weatherHS.onclick = function () {
        if (weatherHS.className == 'hsFeatures') {
            chrome.storage.local.set({ 'weatherHS': 'hide' });
            weatherHS.className = 'hsFeatureHides';
            weatherHS.innerText = '隐藏';
            elemenetGetId('weather').style.display = 'none';
        } else {
            chrome.storage.local.set({ 'weatherHS': 'show' });
            weatherHS.className = 'hsFeatures';
            weatherHS.innerText = '显示';
            elemenetGetId('weather').style = '';
        }
    }
    downHS.onclick = function () {
        if (downHS.className == 'hsFeatures') {
            chrome.storage.local.set({ 'downHS': 'hide' });
            downHS.className = 'hsFeatureHides';
            downHS.innerText = '隐藏';
            elemenetGetId('down').hidden = true;
        } else {
            chrome.storage.local.set({ 'downHS': 'show' });
            downHS.className = 'hsFeatures';
            downHS.innerText = '显示';
            elemenetGetId('down').hidden = false;
        }
    }
    infoHS.onclick = function () {
        if (infoHS.className == 'hsFeatures') {
            chrome.storage.local.set({ 'infoHS': 'hide' });
            infoHS.className = 'hsFeatureHides';
            infoHS.innerText = '隐藏';
            elemenetGetId('info').hidden = true;
        } else {
            chrome.storage.local.set({ 'infoHS': 'show' });
            infoHS.className = 'hsFeatures';
            infoHS.innerText = '显示';
            elemenetGetId('info').hidden = false;
        }
    }
    oneHS.onclick = function () {
        if (oneHS.className == 'hsFeatures') {
            chrome.storage.local.set({ 'oneHS': 'hide' });
            oneHS.className = 'hsFeatureHides';
            oneHS.innerText = '隐藏';
            elemenetGetId('button').style.marginBottom = '-100px';
        } else {
            chrome.storage.local.set({ 'oneHS': 'show' });
            oneHS.className = 'hsFeatures';
            oneHS.innerText = '显示';
            if (screenWidth <= 813) {
                elemenetGetId('button').style.marginBottom = '150px';
            } else {
                elemenetGetId('button').style.marginBottom = '20px';
            }
        }
    }
}

export function hsFeatureUse() {
    chrome.storage.local.get(['hideHS', 'historyHS', 'reloadHS', 'calHS', 'timeHS', 'weatherHS', 'downHS', 'infoHS', 'oneHS', 'hs'], function (budget) {
        let hideHS = budget.hideHS;
        let historyHS = budget.historyHS;
        let reloadHS = budget.reloadHS;
        let calHS = budget.calHS;
        let timeHS = budget.timeHS;
        let weatherHS = budget.weatherHS;
        let downHS = budget.downHS;
        let infoHS = budget.infoHS;
        let oneHS = budget.oneHS;
        var hide = elemenetGetId('hide');
        var info = elemenetGetId('info');
        let hs = budget.hs;
        loadHs(hideHS, historyHS, reloadHS, calHS, timeHS, weatherHS, downHS, infoHS, oneHS, hs, hide, info)
    })
}

export function loadHs(hideHS, historyHS, reloadHS, calHS, timeHS, weatherHS, downHS, infoHS, oneHS, hs, hide, info) {
    var screenWidth = body().offsetWidth;//get screen width
    if (hs == 'show') {
        onHide();
        hide.hidden = false; //show hide button
        chrome.storage.sync.get(['seaBarHS'], (budget) => {
            var seaBarHS = budget.seaBarHS;
            if (typeof (seaBarHS) == 'undefined') {
                seaBarHS = 'show';
            }
            if (seaBarHS == 'show') {
                elemenetGetId('searchbar').style.display = ""; //show searchBar element
            }
        })
        if (screenWidth <= 813) {
            hide.style.marginRight = '0px';
            info.hidden = true; //hide info button
        }
    } else {
        onShow();
        if (screenWidth <= 813) {
            elemenetGetId('history').hidden = true; //hide history button
            elemenetGetId('clock').hidden = true; //hide clock button
            info.hidden = false; //hide info button
        }
        if (hideHS == 'hide') {
            elemenetGetId('hide').hidden = true;
            elemenetGetId('hideHS').className = 'hsFeatureHides';
            elemenetGetId('hideHS').innerText = '隐藏';
            if (screenWidth <= 813) {
                elemenetGetId('reload').style.marginLeft = '0px'
                if (elemenetGetId('historyHS').className == 'hsFeatureHides') {
                    elemenetGetId('cal').style.marginLeft = '0px'
                }
            }
        } else {
            elemenetGetId('hide').hidden = false;
        }
        if (historyHS == 'hide') {
            elemenetGetId('history').hidden = true;
            elemenetGetId('historyHS').className = 'hsFeatureHides';
            elemenetGetId('historyHS').innerText = '隐藏';
        } else {
            if (screenWidth > 813) {
                elemenetGetId('history').hidden = false;
            }
        }
        if (reloadHS == 'hide') {
            elemenetGetId('reload').hidden = true;
            elemenetGetId('reloadHS').className = 'hsFeatureHides';
            elemenetGetId('reloadHS').innerText = '隐藏';
            if (screenWidth <= 813 && elemenetGetId('hideHS').className == 'hsFeatureHides') {
                elemenetGetId('cal').style.marginLeft = '0px'
            }
        } else {
            elemenetGetId('reload').hidden = false;
        }
        if (calHS == 'hide') {
            elemenetGetId('cal').hidden = true;
            elemenetGetId('calHS').className = 'hsFeatureHides';
            elemenetGetId('calHS').innerText = '隐藏';
        } else if (calHS == 'show') {
            elemenetGetId('calHS').className = 'hsFeatures';
            elemenetGetId('calHS').innerText = '显示';
            if (screenWidth <= 813 && elemenetGetId('hideHS').className == 'hsFeatures') {
                elemenetGetId('cal').style.marginLeft = '20px'
            }
            elemenetGetId('cal').hidden = false;
        }
        if (timeHS == 'hide') {
            elemenetGetId('clock').hidden = true;
            elemenetGetId('timeHS').className = 'hsFeatureHides';
            elemenetGetId('timeHS').innerText = '隐藏';
        } else {
            if (screenWidth > 813) {
                elemenetGetId('clock').hidden = false;
            }
        }
        if (weatherHS == 'hide') {
            elemenetGetId('weather').style.display = 'none';
            elemenetGetId('weatherHS').className = 'hsFeatureHides';
            elemenetGetId('weatherHS').innerText = '隐藏';
        } else {
            elemenetGetId('weather').style.display = '';
        }
        if (downHS == 'hide') {
            elemenetGetId('down').hidden = true;
            elemenetGetId('downHS').className = 'hsFeatureHides';
            elemenetGetId('downHS').innerText = '隐藏';
        } else {
            elemenetGetId('down').hidden = false;
        }
        if (infoHS == 'hide') {
            elemenetGetId('info').hidden = true;
            elemenetGetId('infoHS').className = 'hsFeatureHides';
            elemenetGetId('infoHS').innerText = '隐藏';
        } else {
            elemenetGetId('info').hidden = false;
        }
        if (oneHS == 'hide') {
            elemenetGetId('button').style.marginBottom = '-100px';
            elemenetGetId('oneHS').className = 'hsFeatureHides';
            elemenetGetId('oneHS').innerText = '隐藏';
        }
    }
}