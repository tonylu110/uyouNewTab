function settingUse(){
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
    elemenetGetId('settings').onclick = function(){
        settingMain.className = 'settingMain';
        setTimeout(function(){
            settingInnerMain.style.display = '';
            settingCloseButton.style.display = '';
        },450)
        blackBack.style.zIndex = 150;
        blackBack.style.backgroundColor = '#00000050';
        if(screenWidth <= 813){
            settingMain.style.width = '270px';
            settingMain.style.height = '400px';
            settingMain.style.padding = '40px';
        }
    }
    settingCloseButton.onclick = function(){
        settingMain.className = 'settingMainBefore';
        settingCloseButton.style.display = 'none';
        settingInnerMain.style.display = 'none';
        blackBack.style.zIndex = -1;
        blackBack.style.backgroundColor = '#00000010';
        viewImg.style.display = 'none';
        fileName.innerText = '选择你的图片';
        backgroundSetButton.hidden = true;
        onlinePicUrl.value = '';
        picError.hidden = true;
        if(screenWidth <= 813){
            settingMain.style.width = '0px';
            settingMain.style.height = '0px';
            settingMain.style.padding = '0px';
        }
    }
    elemenetGetId('backgroundUpload').onchange = function(){
        let file = this.files[0];
        let reader = new FileReader;
        reader.readAsDataURL(file);
        reader.onload = function(e){
            backgroundSetButton.hidden = false;
            viewImg.style.display = '';
            viewImg.hidden = false;
            viewImg.src = e.target.result;
            if(screenWidth <= 813){
                viewImg.style.maxWidth = '130px'
            }
            fileName.innerText = file.name;
            var picUrl = e.target.result
            backgroundSetButton.onclick = function(){
                chrome.storage.local.set({'picUrl':picUrl});
                location.reload();
            }
        }
    }
    elemenetGetId('review').onclick = function(){
        viewImg.src = onlinePicUrl.value
        viewImg.onerror = function(){
            picError.innerText = '请输入正确的图片链接'
            picError.hidden = false;
        }
        viewImg.onload = function(){
            picError.hidden = true;
            viewImg.style.display = '';
            viewImg.hidden = false;
            backgroundSetButton.hidden = false;
        }
        backgroundSetButton.onclick = function(){
            chrome.storage.local.set({'picUrl':onlinePicUrl.value});
            location.reload();
        }
    }
    elemenetGetId('backgroundBefore').onclick = function(){
        chrome.storage.local.set({'picUrl':''});
        location.reload();
    }
}