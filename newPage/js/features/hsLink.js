function hsLink(){
    var link1HS = elemenetGetId('link1HS');
    var link2HS = elemenetGetId('link2HS');
    var link3HS = elemenetGetId('link3HS');
    var link4HS = elemenetGetId('link4HS');
    var link5HS = elemenetGetId('link5HS');
    var link6HS = elemenetGetId('link6HS');
    var link7HS = elemenetGetId('link7HS');
    var link8HS = elemenetGetId('link8HS');
    var link9HS = elemenetGetId('link9HS');
    var link10HS = elemenetGetId('link10HS');
    link1HS.onclick = function(){
        if(link1HS.className == 'hsFeature'){
            chrome.storage.local.set({'link1HS':'hide'});
            link1HS.className = 'hsFeatureHide';
            link1HS.innerText = '隐藏';
            elemenetGetId('link1').style.display = 'none'
        }else{
            chrome.storage.local.set({'link1HS':'show'});
            link1HS.className = 'hsFeature';
            link1HS.innerText = '显示';
            elemenetGetId('link1').style.display = ''
        }
    }
    link2HS.onclick = function(){
        if(link2HS.className == 'hsFeature'){
            chrome.storage.local.set({'link2HS':'hide'});
            link2HS.className = 'hsFeatureHide';
            link2HS.innerText = '隐藏';
            elemenetGetId('link2').style.display = 'none'
        }else{
            chrome.storage.local.set({'link2HS':'show'});
            link2HS.className = 'hsFeature';
            link2HS.innerText = '显示';
            elemenetGetId('link2').style.display = ''
        }
    }
    link3HS.onclick = function(){
        if(link3HS.className == 'hsFeature'){
            chrome.storage.local.set({'link3HS':'hide'});
            link3HS.className = 'hsFeatureHide';
            link3HS.innerText = '隐藏';
            elemenetGetId('link3').style.display = 'none'
        }else{
            chrome.storage.local.set({'link3HS':'show'});
            link3HS.className = 'hsFeature';
            link3HS.innerText = '显示';
            elemenetGetId('link3').style.display = ''
        }
    }
    link4HS.onclick = function(){
        if(link4HS.className == 'hsFeature'){
            chrome.storage.local.set({'link4HS':'hide'});
            link4HS.className = 'hsFeatureHide';
            link4HS.innerText = '隐藏';
            elemenetGetId('link4').style.display = 'none'
        }else{
            chrome.storage.local.set({'link4HS':'show'});
            link4HS.className = 'hsFeature';
            link4HS.innerText = '显示';
            elemenetGetId('link4').style.display = ''
        }
    }
    link5HS.onclick = function(){
        if(link5HS.className == 'hsFeature'){
            chrome.storage.local.set({'link5HS':'hide'});
            link5HS.className = 'hsFeatureHide';
            link5HS.innerText = '隐藏';
            elemenetGetId('link5').style.display = 'none'
        }else{
            chrome.storage.local.set({'link5HS':'show'});
            link5HS.className = 'hsFeature';
            link5HS.innerText = '显示';
            elemenetGetId('link5').style.display = ''
        }
    }
    link6HS.onclick = function(){
        if(link6HS.className == 'hsFeature'){
            chrome.storage.local.set({'link6HS':'hide'});
            link6HS.className = 'hsFeatureHide';
            link6HS.innerText = '隐藏';
            elemenetGetId('ithome').style.display = 'none'
        }else{
            chrome.storage.local.set({'link6HS':'show'});
            link6HS.className = 'hsFeature';
            link6HS.innerText = '显示';
            elemenetGetId('ithome').style.display = ''
        }
    }
    link7HS.onclick = function(){
        if(link7HS.className == 'hsFeature'){
            chrome.storage.local.set({'link7HS':'hide'});
            link7HS.className = 'hsFeatureHide';
            link7HS.innerText = '隐藏';
            elemenetGetId('chromeStore').style.display = 'none'
        }else{
            chrome.storage.local.set({'link7HS':'show'});
            link7HS.className = 'hsFeature';
            link7HS.innerText = '显示';
            elemenetGetId('chromeStore').style.display = ''
        }
    }
    link8HS.onclick = function(){
        if(link8HS.className == 'hsFeature'){
            chrome.storage.local.set({'link8HS':'hide'});
            link8HS.className = 'hsFeatureHide';
            link8HS.innerText = '隐藏';
            elemenetGetId('aliyun').style.display = 'none'
        }else{
            chrome.storage.local.set({'link8HS':'show'});
            link8HS.className = 'hsFeature';
            link8HS.innerText = '显示';
            elemenetGetId('aliyun').style.display = ''
        }
    }
    link9HS.onclick = function(){
        if(link9HS.className == 'hsFeature'){
            chrome.storage.local.set({'link9HS':'hide'});
            link9HS.className = 'hsFeatureHide';
            link9HS.innerText = '隐藏';
            elemenetGetId('azure').style.display = 'none'
        }else{
            chrome.storage.local.set({'link9HS':'show'});
            link9HS.className = 'hsFeature';
            link9HS.innerText = '显示';
            elemenetGetId('azure').style.display = ''
        }
    }
    link10HS.onclick = function(){
        if(link10HS.className == 'hsFeature'){
            chrome.storage.local.set({'link10HS':'hide'});
            link10HS.className = 'hsFeatureHide';
            link10HS.innerText = '隐藏';
            elemenetGetId('link10').style.display = 'none'
        }else{
            chrome.storage.local.set({'link10HS':'show'});
            link10HS.className = 'hsFeature';
            link10HS.innerText = '显示';
            elemenetGetId('link10').style.display = ''
        }
    }
}
function hsLinkUse(){
    chrome.storage.local.get(['link1HS','link2HS','link3HS','link4HS','link5HS','link6HS','link7HS','link8HS','link9HS','link10HS'],function(budget){
        let link1HS = budget.link1HS;
        let link2HS = budget.link2HS;
        let link3HS = budget.link3HS;
        let link4HS = budget.link4HS;
        let link5HS = budget.link5HS;
        let link6HS = budget.link6HS;
        let link7HS = budget.link7HS;
        let link8HS = budget.link8HS;
        let link9HS = budget.link9HS;
        let link10HS = budget.link10HS;
        if(link1HS == 'hide'){
            elemenetGetId('link1HS').className = 'hsFeatureHide';
            elemenetGetId('link1HS').innerText = '隐藏';
            elemenetGetId('link1').style.display = 'none'
        }
        if(link2HS == 'hide'){
            elemenetGetId('link2HS').className = 'hsFeatureHide';
            elemenetGetId('link2HS').innerText = '隐藏';
            elemenetGetId('link2').style.display = 'none'
        }
        if(link3HS == 'hide'){
            elemenetGetId('link3HS').className = 'hsFeatureHide';
            elemenetGetId('link3HS').innerText = '隐藏';
            elemenetGetId('link3').style.display = 'none'
        }
        if(link4HS == 'hide'){
            elemenetGetId('link4HS').className = 'hsFeatureHide';
            elemenetGetId('link4HS').innerText = '隐藏';
            elemenetGetId('link4').style.display = 'none'
        }
        if(link5HS == 'hide'){
            elemenetGetId('link5HS').className = 'hsFeatureHide';
            elemenetGetId('link5HS').innerText = '隐藏';
            elemenetGetId('link5').style.display = 'none'
        }
        if(link6HS == 'hide'){
            elemenetGetId('link6HS').className = 'hsFeatureHide';
            elemenetGetId('link6HS').innerText = '隐藏';
            elemenetGetId('ithome').style.display = 'none'
        }
        if(link7HS == 'hide'){
            elemenetGetId('link7HS').className = 'hsFeatureHide';
            elemenetGetId('link7HS').innerText = '隐藏';
            elemenetGetId('chromeStore').style.display = 'none'
        }
        if(link8HS == 'hide'){
            elemenetGetId('link8HS').className = 'hsFeatureHide';
            elemenetGetId('link8HS').innerText = '隐藏';
            elemenetGetId('aliyun').style.display = 'none'
        }
        if(link9HS == 'hide'){
            elemenetGetId('link9HS').className = 'hsFeatureHide';
            elemenetGetId('link9HS').innerText = '隐藏';
            elemenetGetId('azure').style.display = 'none'
        }
        if(link10HS == 'hide'){
            elemenetGetId('link10HS').className = 'hsFeatureHide';
            elemenetGetId('link10HS').innerText = '隐藏';
            elemenetGetId('link10').style.display = 'none'
        }
    })
}