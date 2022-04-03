import { elemenetGetId, elemenetGetClass } from "../main/function.js";

export default function otherFeatures() {
    elemenetGetId('loadingAn').onclick = function () {
        if (elemenetGetId('loadingAn').className == 'otherFeaturesBefore') {
            elemenetGetId('loadingAn').className = 'otherFeatures';
            elemenetGetId('loadingAn').innerText = '显示';
            elemenetGetId('loadingTimeBtn').style.display = '';
            elemenetGetClass('otherBtn')[0].style.borderRadius = '10px 10px 0px 0px';
            elemenetGetClass('otherBtn')[0].style.borderBottom = '1px solid #00000020';
            chrome.storage.sync.get(['dlMode'], function (budget) {
                let dlMode = budget.dlMode;
                if (typeof (dlMode) == 'undefined') {
                    dlMode = '';
                }
                if (dlMode == '') {
                    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                        elemenetGetClass('otherBtn')[0].style.backgroundColor = '#44444490';
                    } else {
                        elemenetGetClass('otherBtn')[0].style.backgroundColor = '#ffffff90';
                    }
                } else if (dlMode == 'dark') {
                    elemenetGetClass('otherBtn')[0].style.backgroundColor = '#44444490';
                } else if (dlMode == 'light') {
                    elemenetGetClass('otherBtn')[0].style.backgroundColor = '#ffffff90';
                }
            })
            chrome.storage.local.set({ 'loadingAn': 'show' });
        } else {
            elemenetGetId('loadingAn').className = 'otherFeaturesBefore';
            elemenetGetId('loadingAn').innerText = '隐藏';
            elemenetGetId('loadingTimeBtn').style.display = 'none';
            elemenetGetClass('otherBtn')[0].style.borderRadius = '10px';
            elemenetGetClass('otherBtn')[0].style.borderBottom = '0px';
            chrome.storage.sync.get(['dlMode'], function (budget) {
                let dlMode = budget.dlMode;
                if (typeof (dlMode) == 'undefined') {
                    dlMode = '';
                }
                if (dlMode == '') {
                    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                        elemenetGetClass('otherBtn')[0].style.backgroundColor = '#44444450';
                    } else {
                        elemenetGetClass('otherBtn')[0].style.backgroundColor = '#ffffff50';
                    }
                } else if (dlMode == 'dark') {
                    elemenetGetClass('otherBtn')[0].style.backgroundColor = '#44444450';
                } else if (dlMode == 'light') {
                    elemenetGetClass('otherBtn')[0].style.backgroundColor = '#ffffff50';
                }
            })
            
            chrome.storage.local.set({ 'loadingAn': 'hide' });
        }
    }
    elemenetGetId('setLoadingTime').onclick = function () {
        let loadingTime = elemenetGetId('loadingTimeNum').value;
        elemenetGetId('newTimeout').innerText = loadingTime;
        chrome.storage.local.set({ 'loadingTime': loadingTime });
    }
}