function settingUse() {
    var screenWidth = body().offsetWidth;//get screen width
    var settingMain = elemenetGetId('settingMain');
    var settingInnerMain = elemenetGetId('settingInnerMain');
    var settingCloseButton = elemenetGetId('settingCloseButton');
    var blackBack = elemenetGetId('blackBack');
    var viewImg = elemenetGetId('viewImg');
    var fileName = elemenetGetId('fileName');
    var backgroundSetButton = elemenetGetId('backgroundSetButton');
    var onlinePicUrl = elemenetGetId('onlinePicUrl');
    var picError = elemenetGetId('picError');
    var settingMenu = elemenetGetId('settingMenu');
    var backSettingMenu = elemenetGetId('backSettingMenus');
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
        blackBack.onclick = function () {
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
    }
    settingCloseButton.onclick = function () {
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
    elemenetGetId('backgroundUpload').onchange = function () {
        let file = this.files[0];
        let reader = new FileReader;
        elemenetGetId('exImg').style.display = 'none';
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            backgroundSetButton.hidden = false;
            viewImg.style.display = '';
            viewImg.hidden = false;
            viewImg.src = e.target.result;
            if (screenWidth <= 813) {
                viewImg.style.maxWidth = '130px'
            }
            fileName.innerText = file.name;
            var picUrl = e.target.result
            backgroundSetButton.onclick = function () {
                chrome.storage.local.set({ 'picUrl': picUrl });
                location.reload();
            }
        }
    }
    elemenetGetId('review').onclick = function () {
        viewImg.src = onlinePicUrl.value
        viewImg.onerror = function () {
            picError.innerText = '请输入正确的图片链接'
            picError.hidden = false;
        }
        viewImg.onload = function () {
            elemenetGetId('exImg').style.display = 'none';
            picError.hidden = true;
            viewImg.style.display = '';
            viewImg.hidden = false;
            backgroundSetButton.hidden = false;
        }
        backgroundSetButton.onclick = function () {
            chrome.storage.local.set({ 'picUrl': onlinePicUrl.value });
            location.reload();
        }
    }
    elemenetGetId('backgroundBefore').onclick = function () {
        chrome.storage.local.set({ 'picUrl': '' });
        location.reload();
    }
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