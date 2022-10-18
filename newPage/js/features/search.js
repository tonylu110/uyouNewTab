import { elemenetGetId, elemenetGetClass, body, elemIdSty, elemClassSty } from "../main/function.js";

export function searchUse() {
    //This is searchBar function
    elemenetGetId('keywords').onclick = () => { //get searchEngin img
        getSearchEngine();
    }
    function getSearchEngine() { //get searchEngin img
        var s = elemenetGetId('searchEngine').src;
        var engine = s.substring(s.lastIndexOf("/") + 1)
    }

    elemenetGetId('setCus').onclick = () => {
        var cusSea = elemenetGetId('cusSeaIn').value;
        chrome.storage.sync.set({ 'cusSea': cusSea });
        searchChangeUse();
    }
}

export function searchOnload() {
    chrome.storage.sync.get(['search'], (budget) => {
        if (budget.search == 'google') {
            elemenetGetId('searchEngine').hidden = false;
            elemenetGetId('searchEngine').src = 'imgs/google.png';// change search engine image to google
        } else if (budget.search == 'bing') {
            elemenetGetId('searchEngine').hidden = false;
            elemenetGetId('searchEngine').src = 'imgs/bing-logo.png';// change search engine image to bing
        } else if (budget.search == 'ddg') {
            elemenetGetId('searchEngine').hidden = false;
            elemenetGetId('searchEngine').src = 'imgs/ddg.svg';
        } else if (budget.search == 'yandex') {
            elemenetGetId('searchEngine').hidden = false;
            elemenetGetId('searchEngine').src = 'imgs/yandex.png';
        } else if (budget.search == 'sougou') {
            elemenetGetId('searchEngine').hidden = false;
            elemenetGetId('searchEngine').src = 'imgs/sougou.png';
        } else if (budget.search == 'cus') {
            elemenetGetId('searchEngine').hidden = false;
            elemenetGetId('searchEngine').src = 'imgs/search.png';
        } else {
            elemenetGetId('searchEngine').hidden = false;
            elemenetGetId('searchEngine').src = 'imgs/baidu.png';//change search engine image to baidu
        }
    })
}

export function moreSearch() {
    function changeAn(an, button) {
        if (elemenetGetId(an).className == 'otherFeatures') {
            elemenetGetId(an).className = 'otherFeaturesBefore';
            if (an == 'cusAn') {
                elemenetGetId(an).innerText = '禁用';
            } else {
                elemenetGetId(an).innerText = '隐藏';
            }
            elemenetGetId(button).style.display = 'none';
        } else {
            if (an == 'cusAn') {
                elemenetGetId(an).innerText = '启用';
            } else {
                elemenetGetId(an).innerText = '显示';
            }
            elemenetGetId(an).className = 'otherFeatures';

            elemenetGetId(button).style.display = '';
        }
    }
    elemenetGetId('cusAn').onclick = () => {
        changeAn('cusAn', 'cus');
        if (elemenetGetId('cusAn').className == 'otherFeaturesBefore') {
            chrome.storage.sync.set({ 'cus': 'hide' });
            elemenetGetId('seaIn').style.display = 'none';
            elemenetGetClass('seaBtn')[0].style.borderRadius = '';
            elemenetGetClass('seaBtn')[0].style.background = ''
        } else {
            chrome.storage.sync.set({ 'cus': 'show' });
            elemenetGetId('seaIn').style.display = '';
            elemenetGetClass('seaBtn')[0].style.borderRadius = '10px 10px 0px 0px';
            chrome.storage.sync.get(['dlMode'], (budget) => {
                let dlMode = budget.dlMode;
                if (typeof (dlMode) == 'undefined') {
                    dlMode = '';
                }
                if (dlMode == '') {
                    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                        elemenetGetClass('seaBtn')[0].style.background = '#44444470'
                    } else {
                        elemenetGetClass('seaBtn')[0].style.background = '#ffffff70'
                    }
                } else if (dlMode == 'dark') {
                    elemenetGetClass('seaBtn')[0].style.background = '#44444470'
                } else if (dlMode == 'light') {
                    elemenetGetClass('seaBtn')[0].style.background = '#ffffff70'
                }
            })

        }
    }
    elemenetGetId('googleAn').onclick = () => {
        changeAn('googleAn', 'google');
        if (elemenetGetId('googleAn').className == 'otherFeaturesBefore') {
            chrome.storage.sync.set({ 'google': 'hide' });
        } else {
            chrome.storage.sync.set({ 'google': 'show' });
        }
    }
    elemenetGetId('bingAn').onclick = () => {
        changeAn('bingAn', 'bing');
        if (elemenetGetId('bingAn').className == 'otherFeaturesBefore') {
            chrome.storage.sync.set({ 'bing': 'hide' });
        } else {
            chrome.storage.sync.set({ 'bing': 'show' });
        }
    }
    elemenetGetId('baiduAn').onclick = () => {
        changeAn('baiduAn', 'baidu');
        if (elemenetGetId('baiduAn').className == 'otherFeaturesBefore') {
            chrome.storage.sync.set({ 'baidu': 'hide' });
        } else {
            chrome.storage.sync.set({ 'baidu': 'show' });
        }
    }
    elemenetGetId('ddgAn').onclick = () => {
        changeAn('ddgAn', 'ddg');
        if (elemenetGetId('ddgAn').className == 'otherFeaturesBefore') {
            chrome.storage.sync.set({ 'ddg': 'hide' });
        } else {
            chrome.storage.sync.set({ 'ddg': 'show' });
        }
    }
    elemenetGetId('yandexAn').onclick = () => {
        changeAn('yandexAn', 'yandex');
        if (elemenetGetId('yandexAn').className == 'otherFeaturesBefore') {
            chrome.storage.sync.set({ 'yandex': 'hide' });
        } else {
            chrome.storage.sync.set({ 'yandex': 'show' });
        }
    }
    elemenetGetId('sougouAn').onclick = () => {
        changeAn('sougouAn', 'sougou');
        if (elemenetGetId('sougouAn').className == 'otherFeaturesBefore') {
            chrome.storage.sync.set({ 'sougou': 'hide' });
        } else {
            chrome.storage.sync.set({ 'sougou': 'show' });
        }
    }
    chrome.storage.sync.get(['google', 'bing', 'baidu', 'ddg', 'yandex', 'sougou', 'cus', 'cusSea'], (budget) => {
        let google = budget.google;
        let bing = budget.bing;
        let baidu = budget.baidu;
        let ddg = budget.ddg;
        let yandex = budget.yandex;
        let sougou = budget.sougou;
        let cus = budget.cus;
        function showLoadSearch(an, button) {
            elemenetGetId(an).className = 'otherFeatures';
            if (an == 'cusAn') {
                elemenetGetId(an).innerText = '启用';
            } else {
                elemenetGetId(an).innerText = '显示';
            }
            elemenetGetId(button).style.display = '';
        }
        function hideLoadSearch(an, button) {
            elemenetGetId(an).className = 'otherFeaturesBefore';
            if (an == 'cusAn') {
                elemenetGetId(an).innerText = '禁用';
            } else {
                elemenetGetId(an).innerText = '隐藏';
            }
            elemenetGetId(button).style.display = 'none';
        }
        if (typeof (google) == 'undefined') {
            google = 'show';
        }
        if (typeof (bing) == 'undefined') {
            bing = 'show';
        }
        if (typeof (baidu) == 'undefined') {
            baidu = 'show';
        }
        if (typeof (ddg) == 'undefined') {
            ddg = 'hide';
        }
        if (typeof (yandex) == 'undefined') {
            yandex = 'hide';
        }
        if (typeof (sougou) == 'undefined') {
            sougou = 'hide';
        }
        if (typeof (cus) == 'undefined') {
            cus = 'hide';
        }
        if (google == 'show') {
            showLoadSearch('googleAn', 'google')
        } else if (google == 'hide') {
            hideLoadSearch('googleAn', 'google')
        }
        if (bing == 'show') {
            showLoadSearch('bingAn', 'bing')
        } else if (bing == 'hide') {
            hideLoadSearch('bingAn', 'bing')
        }
        if (baidu == 'show') {
            showLoadSearch('baiduAn', 'baidu')
        } else if (baidu == 'hide') {
            hideLoadSearch('baiduAn', 'baidu')
        }
        if (ddg == 'show') {
            showLoadSearch('ddgAn', 'ddg')
        } else if (ddg == 'hide') {
            hideLoadSearch('ddgAn', 'ddg')
        }
        if (yandex == 'show') {
            showLoadSearch('yandexAn', 'yandex')
        } else if (yandex == 'hide') {
            hideLoadSearch('yandexAn', 'yandex')
        }
        if (sougou == 'show') {
            showLoadSearch('sougouAn', 'sougou')
        } else if (sougou == 'hide') {
            hideLoadSearch('sougouAn', 'sougou')
        }
        if (cus == 'show') {
            showLoadSearch('cusAn', 'cus')
            elemenetGetId('seaIn').style.display = '';
            elemenetGetClass('seaBtn')[0].style.borderRadius = '10px 10px 0px 0px';
            chrome.storage.sync.get(['dlMode'], (budget) => {
                let dlMode = budget.dlMode;
                if (typeof (dlMode) == 'undefined') {
                    dlMode = '';
                }
                if (dlMode == '') {
                    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                        elemenetGetClass('seaBtn')[0].style.background = '#44444470'
                    } else {
                        elemenetGetClass('seaBtn')[0].style.background = '#ffffff70'
                    }
                } else if (dlMode == 'dark') {
                    elemenetGetClass('seaBtn')[0].style.background = '#44444470'
                } else if (dlMode == 'light') {
                    elemenetGetClass('seaBtn')[0].style.background = '#ffffff70'
                }
            })
        } else if (cus == 'hide') {
            hideLoadSearch('cusAn', 'cus')
        }
    })
}

export function showOrHideSearch() {
    var hideSearchBar = elemenetGetId('hideSearchBar')
    hideSearchBar.onclick = () => {
        if (hideSearchBar.innerText == '显示') {
            hideSearchBar.innerText = '隐藏'
            hideSearchBar.className = 'otherFeaturesBefore'
            hideOrShow('hide')
        } else {
            hideSearchBar.innerText = '显示'
            hideSearchBar.className = 'otherFeatures'
            hideOrShow('show')
        }
    }
    function hideOrShow(hs) {
        if (hs == 'show') {
            elemIdSty('searchbar').display = ''
            chrome.storage.sync.set({ 'seaBarHS': hs });
        } else {
            elemIdSty('searchbar').display = 'none'
            chrome.storage.sync.set({ 'seaBarHS': hs });
        }
    }
    chrome.storage.sync.get(['seaBarHS'], (budget) => {
        var seaBarHS = budget.seaBarHS;
        if (typeof (seaBarHS) == 'undefined') {
            seaBarHS = 'show';
        }
        if (seaBarHS == 'hide') {
            hideSearchBar.innerText = '隐藏'
            hideSearchBar.className = 'otherFeaturesBefore'
            elemIdSty('searchbar').display = 'none'
        }
    })
}
