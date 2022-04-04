import { elemenetGetId, elemenetGetClass, body, onHide, onShow } from "./function.js";

export function getTime() {
    setInterval(() => {
        var time = new Date();
        var timeele = elemenetGetId('time')
        var h = time.getHours();
        var m = time.getMinutes();
        var s = time.getSeconds();

        if (h < 10) {
            h = '0' + h;
        }
        if (m < 10) {
            m = '0' + m
        }
        if (s < 10) {
            s = '0' + s
        }

        timeele.innerHTML = h + ":" + m + ":" + s;
    }, 1000)
}

export function fesUse() {
    elemenetGetId('down').onclick = () => {
        chrome.downloads.download({
            url: elemenetGetId('picurl').className,
            filename: "pic-" + Math.ceil(Math.random() * 1000) + ".png"
        });
    }

    //This is historybar function
    elemenetGetId('history').onclick = () => {
        elemenetGetId('bar').className = 'barSel'; //change historyBar style to barSelect style
        elemenetGetId('imgbefore').className = 'imgafter' //change historyBarIcon style to historyBarIconSelect style1
        elemenetGetId('click').onclick = () => {
            elemenetGetId('bar').className = 'bar'; //change hidtoryBar style to barBefore style
            elemenetGetId('imgbefore').className = 'imgbefore' //change historyBarIcon style to historyBayIconBefore style
        }
    }

    //This is historybar back function
    elemenetGetId('historyback').onclick = () => {
        elemenetGetId('bar').className = 'bar'; //change hidtoryBar style to barBefore style
        elemenetGetId('imgbefore').className = 'imgbefore' //change historyBarIcon style to historyBayIconBefore style
    }

    elemenetGetId('reload').onclick = () => {
        location.reload();
    }

    //This is calculator function
    elemenetGetId('cal').onclick = () => {
        var screenWidth = body().offsetWidth;
        var hide = elemenetGetId('button').hidden;
        if (hide == false) {
            elemenetGetId('mainCal').hidden = false; //show calculator element
            onHide();
            elemenetGetId('cal').hidden = false; //show calculator button
            if (screenWidth <= 813) {
                elemenetGetId('cal').style.marginLeft = '0px';
            }
        } else {
            elemenetGetId('mainCal').hidden = true; //hide calculator element
            onShow();
            if (screenWidth <= 813) {
                elemenetGetId('history').hidden = true; //hide history button
                elemenetGetId('clock').hidden = true; //hide clock button
                elemenetGetId('cal').style.marginLeft = '20px';
            }
        }
    }

    elemenetGetId('clock').onclick = () => {
        var hide = elemenetGetId('button').hidden;
        if (hide == false) {
            elemenetGetId('mainClock').style.display = ""; //show clock element
            onHide();
            elemenetGetId('clock').hidden = false; //show calculator button
        } else {
            elemenetGetId('mainClock').style.display = "none"; //hide clock element
            onShow();
        }
    }
}

export function otherSettingOnLoad() {
    chrome.storage.local.get(['loadingAn', 'loadingTime'], (budget) => {
        var loadingAn = budget.loadingAn;
        var loadingTime = budget.loadingTime;
        if (typeof (loadingTime) == 'undefined') {
            loadingTime = '300';
        }
        elemenetGetId('newTimeout').innerHTML = loadingTime;
        if (loadingAn == 'show') {
            elemenetGetId('loadingAn').className = 'otherFeatures';
            elemenetGetId('loadingAn').innerText = '显示';
            elemenetGetId('loading').style.zIndex = '300';
            elemenetGetId('loading').style.display = '';
            elemenetGetId('loadingTimeBtn').style.display = '';
            elemenetGetClass('otherBtn')[0].style.borderRadius = '10px 10px 0px 0px';
            elemenetGetClass('otherBtn')[0].style.borderBottom = '1px solid #00000020';
            chrome.storage.sync.get(['dlMode'], (budget) => {
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
            setTimeout(() => {
                elemenetGetId('loading').style.zIndex = '-3';
                elemenetGetId('loading').style.display = 'none';
            }, Number(loadingTime))
        }
    })

    chrome.storage.sync.get(['dlMode'], (budget) => {
        let dlMode = budget.dlMode;
        if (typeof (dlMode) == 'undefined') {
            dlMode = '';
        }
        if (dlMode == '') {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                if (elemenetGetId('loadingAn').innerText == '隐藏') {
                    elemenetGetClass('otherBtn')[0].style.background = '#44444450';
                } else {
                    elemenetGetClass('otherBtn')[0].style.background = '#44444490';
                }
            }
        } else if (dlMode == 'dark') {
            if (elemenetGetId('loadingAn').innerText == '隐藏') {
                elemenetGetClass('otherBtn')[0].style.background = '#44444450';
            } else {
                elemenetGetClass('otherBtn')[0].style.background = '#44444490';
            }
        }
    })
}

export function changeStyle() {
    var screenWidth = body().offsetWidth;//get screen width
    var screenHeight = document.documentElement.clientHeight;
    var bottom_right = elemenetGetId('bottom-right');
    var down = elemenetGetId('down');
    var searchbar = elemenetGetId('searchbar');
    var mainlink = elemenetGetId('mainlink');
    var title = elemenetGetId('title');
    var cal = elemenetGetId('cal');
    var clock = elemenetGetId('clock');
    var history = elemenetGetId('history');
    var button = elemenetGetId('button');
    var oneMain = elemenetGetId('oneMain');
    var azure = elemenetGetId('azure');
    var ithome = elemenetGetId('ithome');
    var chromeStore = elemenetGetId('chromeStore');
    var aliyun = elemenetGetId('aliyun');
    var main = elemenetGetId('main');
    var backgroundSetButton = elemenetGetId('backgroundSetButton');
    var backgroundBefore = elemenetGetId('backgroundBefore');
    var msgTitleColor = '';
    //if screen is phone to phone style
    if (screenWidth <= 813) {
        bottom_right.style.marginTop = '15px';
        bottom_right.style.top = '0';
        bottom_right.style.bottom = '';
        down.style.marginBottom = '-50px';
        down.style.marginLeft = '-65px';
        searchbar.style.width = '324px';//set search bar to phone style
        mainlink.style.width = '366px';//set links to phone style
        title.style.display = 'flex';
        //set tools button style
        title.style.justifyContent = 'center';
        title.style.bottom = '0';
        title.style.top = '';
        title.style.width = '100%';
        title.style.marginBottom = '5vh';
        cal.style.marginRight = '0';//set calculator button margin right to 0px
        clock.hidden = true; //hide clock button
        history.hidden = true; //hide history button
        button.style.marginBottom = '20vh';//chenge ui button
        button.style.maxWidth = '280px';
        button.style.transition = 'margin 0.5s';
        button.style.zIndex = '100';
        oneMain.style.width = '0px';
        oneMain.style.height = '0px';
        oneMain.style.padding = '0px';
        oneMain.className = 'oneMainBeforeMobile';
        //hide links button
        azure.hidden = true;
        ithome.hidden = true;
        chromeStore.hidden = true;
        aliyun.hidden = true;
        main.style.marginTop = - (screenHeight / 4) + 20 + 'px';//set search area margin top
        backgroundSetButton.style.flex = '1';
        backgroundBefore.style.flex = '1';
        elemenetGetId('infoBar').style.height = screenHeight + 'px';
        elemenetGetId('background').style.height = screenHeight + 'px';
        elemenetGetId('settings').style.marginTop = '15px';
        elemenetGetId('historyFeatureBtn').style.display = 'none';
        elemenetGetId('clockFeatureBtn').style.display = 'none';
        elemenetGetId('hide').style.marginRight = '0px';
        elemenetGetId('reload').style.marginLeft = '20px';
        elemenetGetId('reload').style.marginRight = '0px';
        elemenetGetId('cal').style.marginLeft = '20px';
        elemenetGetId('link6Btn').style.display = 'none';
        elemenetGetId('link7Btn').style.display = 'none';
        elemenetGetId('link8Btn').style.display = 'none';
        elemenetGetId('link9Btn').style.display = 'none';
        elemenetGetId('backgroundSettings').style.backgroundColor = 'transparent';
        elemenetGetId('exImgs').style.display = 'none';
        elemenetGetId('searchEngines').style.maxWidth = '300px';
        elemenetGetId('settingCloseButton').style.top = '20px';
        elemenetGetId('settingCloseButton').style.right = '20px';
        elemenetGetId('top-right').style.display = 'flex';
        elemenetGetId('top-right').style.flexDirection = 'row';
        elemenetGetId('weather').style.marginTop = '15px';
        elemenetGetId('top-right').style.zIndex = 102;
        elemenetGetId('apiImgs').style.display = 'none';
        elemenetGetId('mobileApiImgs').style.display = '';
        elemenetGetClass('mobileExImgs')[0].style.display = '';
        elemenetGetClass('donateMsg')[0].style.borderRadius = '10px';
        elemenetGetClass('donateMsg')[0].style.padding = '10px';
        chrome.storage.sync.get(['dlMode'], (budget) => {
            let dlMode = budget.dlMode;
            if (typeof (dlMode) == 'undefined') {
                dlMode = '';
            }
            if (dlMode == '') {
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    msgTitleColor = '#44444450';
                } else {
                    msgTitleColor = '#ffffff70';
                }
            } else if (dlMode == 'dark') {
                msgTitleColor = '#44444450';
            } else if (dlMode == 'light') {
                msgTitleColor = '#ffffff70';
            }
            function titleBack(num) {
                elemenetGetClass('backgroundTitile')[num].style.backgroundColor = msgTitleColor;
                elemenetGetClass('backgroundTitile')[num].style.borderRadius = '10px';
                elemenetGetClass('backgroundTitile')[num].style.padding = '10px';
                if (num == 0 || num == 1 || num == 2 || num == 3) {
                    elemenetGetClass('backgroundTitile')[num].style.width = 'fit-content';
                }
                if (num == 1) {
                    elemenetGetClass('backgroundTitile')[num].style.marginTop = '10px';
                }
            }
            elemenetGetClass('donateMsg')[0].style.backgroundColor = msgTitleColor;
            titleBack(0);
            titleBack(1);
            titleBack(2);
            titleBack(3);
            titleBack(4);
            titleBack(5);
            titleBack(6);
        })
        window.onresize = () => {
            var nowHeight = document.documentElement.clientHeight;
            if (screenHeight - nowHeight > 50) {
                elemenetGetId('button').style.transition = '0s';
                elemenetGetId('button').style.marginBottom = '-60px';
                elemenetGetId('title').style.marginBottom = '-60px';
            } else {
                elemenetGetId('button').style.marginBottom = '20vh';
                elemenetGetId('title').style.marginBottom = '5vh';
            }
        }
    } else {
        button.style.marginBottom = '20px'
        oneMain.className = 'oneMainBefore';
    }
}