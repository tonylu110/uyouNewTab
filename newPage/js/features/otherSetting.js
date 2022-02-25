function otherFeatures(){
    elemenetGetId('loadingAn').onclick = function(){
        if(elemenetGetId('loadingAn').className == 'otherFeaturesBefore'){
            elemenetGetId('loadingAn').className = 'otherFeatures';
            elemenetGetId('loadingAn').innerText = '显示';
            elemenetGetId('loadingTimeBtn').style.display = '';
            elemenetGetClass('otherBtn')[0].style.borderRadius = '10px 10px 0px 0px';
            elemenetGetClass('otherBtn')[0].style.borderBottom = '1px solid #00000020';
            elemenetGetClass('otherBtn')[0].style.backgroundColor = '#ffffff90';
            chrome.storage.local.set({'loadingAn':'show'});
        }else{
            elemenetGetId('loadingAn').className = 'otherFeaturesBefore';
            elemenetGetId('loadingAn').innerText = '隐藏';
            elemenetGetId('loadingTimeBtn').style.display = 'none';
            elemenetGetClass('otherBtn')[0].style.borderRadius = '10px';
            elemenetGetClass('otherBtn')[0].style.borderBottom = '0px';
            elemenetGetClass('otherBtn')[0].style.backgroundColor = '#ffffff50';
            chrome.storage.local.set({'loadingAn':'hide'});
        }
    }
    elemenetGetId('setLoadingTime').onclick = function(){
        let loadingTime = elemenetGetId('loadingTimeNum').value;
        elemenetGetId('newTimeout').innerText = loadingTime;
        chrome.storage.local.set({'loadingTime':loadingTime});
    }
}