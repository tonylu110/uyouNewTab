function settingUse(){
    var screenWidth = body().offsetWidth;//get screen width
    elemenetGetId('settings').onclick = function(){
        elemenetGetId('settingMain').className = 'settingMain';
        setTimeout(function(){
            elemenetGetId('settingInnerMain').style.display = '';
            elemenetGetId('settingCloseButton').style.display = '';
        },450)
        elemenetGetId('blackBack').style.zIndex = 150;
        elemenetGetId('blackBack').style.backgroundColor = '#00000050';
        if(screenWidth <= 813){
            elemenetGetId('settingMain').style.width = '270px';
            elemenetGetId('settingMain').style.height = '400px';
            elemenetGetId('settingMain').style.padding = '40px';
        }
    }
    elemenetGetId('settingCloseButton').onclick = function(){
        elemenetGetId('settingMain').className = 'settingMainBefore';
        elemenetGetId('settingCloseButton').style.display = 'none';
        elemenetGetId('settingInnerMain').style.display = 'none';
        elemenetGetId('blackBack').style.zIndex = -1;
        elemenetGetId('blackBack').style.backgroundColor = '#00000010';
        elemenetGetId('viewImg').style.display = 'none';
        elemenetGetId('fileName').innerText = '选择你的图片';
        elemenetGetId('backgroundSetButton').hidden = true;
        if(screenWidth <= 813){
            elemenetGetId('settingMain').style.width = '0px';
            elemenetGetId('settingMain').style.height = '0px';
            elemenetGetId('settingMain').style.padding = '0px';
        }
    }
    elemenetGetId('backgroundUpload').onchange = function(){
        let file = this.files[0];
        let reader = new FileReader;
        reader.readAsDataURL(file);
        reader.onload = function(e){
            elemenetGetId('backgroundSetButton').hidden = false;
            elemenetGetId('viewImg').style.display = '';
            elemenetGetId('viewImg').hidden = false;
            elemenetGetId('viewImg').src = e.target.result;
            if(screenWidth <= 813){
                elemenetGetId('viewImg').style.maxWidth = '130px'
            }
            elemenetGetId('fileName').innerText = file.name;
            var picUrl = e.target.result
            elemenetGetId('backgroundSetButton').onclick = function(){
                chrome.storage.local.set({'picUrl':picUrl});
                location.reload();
            }
        }
    }
    elemenetGetId('backgroundBefore').onclick = function(){
        chrome.storage.local.set({'picUrl':''});
        location.reload();
    }
}