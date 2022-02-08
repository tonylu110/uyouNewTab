function menuStyle(){
    elemenetGetId('backgroundSettings').style.backgroundColor = 'transparent';
    elemenetGetId('festuresSettings').style.backgroundColor = 'transparent';
    elemenetGetId('linkSettings').style.backgroundColor = 'transparent';
    elemenetGetId('helpInfo').style.backgroundColor = 'transparent';
    elemenetGetId('donateInfo').style.backgroundColor = 'transparent';
    elemenetGetId('otherSettings').style.backgroundColor = 'transparent'
}
function hideMenu(){
    elemenetGetId('backgroundSetting').style.display = 'none';
    elemenetGetId('festuresSetting').style.display = 'none';
    elemenetGetId('linkSetting').style.display = 'none';
    elemenetGetId('helpMain').style.display = 'none';
    elemenetGetId('donateMain').style.display = 'none';
    elemenetGetId('otherSetting').style.display = 'none';
}
function settingMenus(){
    elemenetGetId('backgroundSettings').onclick = function(){
        menuStyle();
        elemenetGetId('backgroundSettings').style.backgroundColor = '#ffffff70';
        hideMenu();
        elemenetGetId('backgroundSetting').style.display = '';
    }
    elemenetGetId('festuresSettings').onclick = function(){
        menuStyle();
        elemenetGetId('festuresSettings').style.backgroundColor = '#ffffff70';
        hideMenu();
        elemenetGetId('festuresSetting').style.display = '';
    }
    elemenetGetId('linkSettings').onclick = function(){
        menuStyle();
        elemenetGetId('linkSettings').style.backgroundColor = '#ffffff70';
        hideMenu();
        elemenetGetId('linkSetting').style.display = '';
    }
    elemenetGetId('otherSettings').onclick = function(){
        menuStyle();
        elemenetGetId('otherSettings').style.backgroundColor = '#ffffff70';
        hideMenu();
        elemenetGetId('otherSetting').style.display = '';
    }
    elemenetGetId('helpInfo').onclick = function(){
        menuStyle();
        elemenetGetId('helpInfo').style.backgroundColor = '#ffffff70';
        hideMenu();
        elemenetGetId('helpMain').style.display = '';
    }
    elemenetGetId('donateInfo').onclick = function(){
        menuStyle();
        elemenetGetId('donateInfo').style.backgroundColor = '#ffffff70';
        hideMenu();
        elemenetGetId('donateMain').style.display = '';
    }
}

function loaclImgChange(){
    elemenetGetId('background0').onclick = function(){
        chrome.storage.local.set({'picUrl':"'imgs/background - 0.jpg'"});
        elemenetGetId('background').style.backgroundImage = 'url("imgs/background - 0.jpg")';
    }
    elemenetGetId('background1').onclick = function(){
        chrome.storage.local.set({'picUrl':"'imgs/background - 1.jpg'"});
        elemenetGetId('background').style.backgroundImage = 'url("imgs/background - 1.jpg")';
    }
    elemenetGetId('background2').onclick = function(){
        chrome.storage.local.set({'picUrl':"'imgs/background - 2.jpg'"});
        elemenetGetId('background').style.backgroundImage = 'url("imgs/background - 2.jpg")';
    }
    elemenetGetId('background3').onclick = function(){
        chrome.storage.local.set({'picUrl':"'imgs/background - 3.jpg'"});
        elemenetGetId('background').style.backgroundImage = 'url("imgs/background - 3.jpg")';
    }
    elemenetGetId('background4').onclick = function(){
        chrome.storage.local.set({'picUrl':"'imgs/background - 4.jpg'"});
        elemenetGetId('background').style.backgroundImage = 'url("imgs/background - 4.jpg")';
    }
    elemenetGetId('background5').onclick = function(){
        chrome.storage.local.set({'picUrl':"'imgs/background - 5.jpg'"});
        elemenetGetId('background').style.backgroundImage = 'url("imgs/background - 5.jpg")';
    }
}
function otherFeatures(){
    elemenetGetId('loadingAn').onclick = function(){
        if(elemenetGetId('loadingAn').className == 'otherFeaturesBefore'){
            elemenetGetId('loadingAn').className = 'otherFeatures';
            elemenetGetId('loadingAn').innerText = '显示';
            chrome.storage.local.set({'loadingAn':'show'});
        }else{
            elemenetGetId('loadingAn').className = 'otherFeaturesBefore';
            elemenetGetId('loadingAn').innerText = '隐藏';
            chrome.storage.local.set({'loadingAn':'hide'});
        }
    }
}