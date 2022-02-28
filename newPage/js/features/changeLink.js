function changeLink(){
    function linkChange(){
        elemenetGetId('changeLink').style.display = '';
        elemenetGetId('blackBack').style.zIndex = '201';
        elemenetGetId('blackBack').style.backgroundColor = '#00000050';
    }
    elemenetGetId('link1CH').onclick = function(){
        linkChange();
        elemenetGetId('linkNum').className = 'link1';
    }
    elemenetGetId('link2CH').onclick = function(){
        linkChange();
        elemenetGetId('linkNum').className = 'link2';
    }
    elemenetGetId('link3CH').onclick = function(){
        linkChange();
        elemenetGetId('linkNum').className = 'link3';
    }
    elemenetGetId('link4CH').onclick = function(){
        linkChange();
        elemenetGetId('linkNum').className = 'link4';
    }
    elemenetGetId('link5CH').onclick = function(){
        linkChange();
        elemenetGetId('linkNum').className = 'link5';
    }
    elemenetGetId('link6CH').onclick = function(){
        linkChange();
        elemenetGetId('linkNum').className = 'link6';
    }
    elemenetGetId('link7CH').onclick = function(){
        linkChange();
        elemenetGetId('linkNum').className = 'link7';
    }
    elemenetGetId('link8CH').onclick = function(){
        linkChange();
        elemenetGetId('linkNum').className = 'link8';
    }
    elemenetGetId('link9CH').onclick = function(){
        linkChange();
        elemenetGetId('linkNum').className = 'link9';
    }
    elemenetGetId('link10CH').onclick = function(){
        linkChange();
        elemenetGetId('linkNum').className = 'link10';
    }
}

function useChangeLink(){
    var numi = 0;
    var num = Number(elemenetGetId('paddingNum').innerText);
    function close(){
        elemenetGetId('changeLink').style.display = 'none';
        elemenetGetId('blackBack').style.zIndex = '110';
        num = 25;
        numi = 0;
        elemenetGetId('paddingNum').innerText = num;
        elemenetGetId('linkImg').src = 'imgs/dLinkIcon.png';
        elemenetGetId('linkImg').hidden = true;
        elemenetGetId('linkChangePadding').style.padding = num + 'px';
        elemenetGetId('linkChangePadding').style.width = numi * 2 + 50 + 'px';
        elemenetGetId('linkChangePadding').style.height = numi * 2 + 50 + 'px';
        elemenetGetId('changeLinkInput').value = 'http://'
    }
    elemenetGetId('closeChangeLink').onclick = function(){
        close();
    }
    elemenetGetId('linkUpload').onchange = function(){
        let file = this.files[0];
        let reader = new FileReader;
        reader.readAsDataURL(file);
        reader.onload = function(e){
            elemenetGetId('linkImg').src = e.target.result;
            elemenetGetId('linkImg').hidden = false;
        }
    }
    elemenetGetId('small').onclick = function(){
        numi = numi - 1;
        num = num + 1;
        let size = (numi * 2 + 50)/2;
        elemenetGetId('paddingNum').innerText = size;
        elemenetGetId('linkChangePadding').style.padding = num + 'px';
        elemenetGetId('linkChangePadding').style.width = numi * 2 + 50 + 'px';
        elemenetGetId('linkChangePadding').style.height = numi * 2 + 50 + 'px';
    }
    elemenetGetId('big').onclick = function(){
        numi = numi + 1;
        num = num - 1;
        let size = (numi * 2 + 50)/2;
        elemenetGetId('paddingNum').innerText = size;
        elemenetGetId('linkChangePadding').style.padding = num + 'px';
        elemenetGetId('linkChangePadding').style.width = numi * 2 + 50 + 'px';
        elemenetGetId('linkChangePadding').style.height = numi * 2 + 50 + 'px';
    }
    elemenetGetId('useLink').onclick = function(){
        let linkImgUrl = elemenetGetId('linkImg').src;
        let linkPadding = elemenetGetId('linkChangePadding').style.padding;
        let linkWidth = elemenetGetId('linkChangePadding').style.width;
        let linkHeight = elemenetGetId('linkChangePadding').style.height;
        let changeLinkInput = elemenetGetId('changeLinkInput').value;
        function change(num){
            elemenetGetId('link'+ num +'Img').src = linkImgUrl;
            elemenetGetId('link'+ num +'Padding').style.padding = linkPadding;
            elemenetGetId('link'+ num +'Padding').style.width = linkWidth;
            elemenetGetId('link'+ num +'Padding').style.height = linkHeight;
            elemenetGetId('link'+ num +'Imgs').src = linkImgUrl;
            elemenetGetId('link'+ num +'Paddings').style.padding = linkPadding;
            elemenetGetId('link'+ num +'Paddings').style.width = linkWidth;
            elemenetGetId('link'+ num +'Paddings').style.height = linkHeight;
        }
        if(changeLinkInput == 'http://'){
            elemenetGetId('toast').style.display = '';
            elemenetGetId('blackBack').style.zIndex = '251';
            elemenetGetId('Msg').innerText = '链接不能为空';
            elemenetGetId('toastButton').onclick = function(){
                elemenetGetId('toast').style.display = 'none';
                elemenetGetId('blackBack').style.zIndex = '201';
            }
        }else if(changeLinkInput.slice(0,7) == 'http://' || changeLinkInput.slice(0,8) == 'https://' || changeLinkInput == ''){
            if(elemenetGetId('linkNum').className == 'link1'){
                chrome.storage.local.set({'link1Img':linkImgUrl});
                chrome.storage.local.set({'link1Padding':num});
                chrome.storage.local.set({'link1Width':numi * 2 + 50});
                chrome.storage.local.set({'link1Height':numi * 2 + 50});
                chrome.storage.local.set({'link1':changeLinkInput})
                change('1');
                elemenetGetId('link1').href = changeLinkInput;
                close();
            }
            if(elemenetGetId('linkNum').className == 'link2'){
                chrome.storage.local.set({'link2Img':linkImgUrl});
                chrome.storage.local.set({'link2Padding':num});
                chrome.storage.local.set({'link2Width':numi * 2 + 50});
                chrome.storage.local.set({'link2Height':numi * 2 + 50});
                chrome.storage.local.set({'link2':changeLinkInput})
                change('2');
                elemenetGetId('link2').href = changeLinkInput;
                close();
            }
            if(elemenetGetId('linkNum').className == 'link3'){
                chrome.storage.local.set({'link3Img':linkImgUrl});
                chrome.storage.local.set({'link3Padding':num});
                chrome.storage.local.set({'link3Width':numi * 2 + 50});
                chrome.storage.local.set({'link3Height':numi * 2 + 50});
                chrome.storage.local.set({'link3':changeLinkInput})
                change('3');
                elemenetGetId('link3').href = changeLinkInput;
                close();
            }
            if(elemenetGetId('linkNum').className == 'link4'){
                chrome.storage.local.set({'link4Img':linkImgUrl});
                chrome.storage.local.set({'link4Padding':num});
                chrome.storage.local.set({'link4Width':numi * 2 + 50});
                chrome.storage.local.set({'link4Height':numi * 2 + 50});
                chrome.storage.local.set({'link4':changeLinkInput})
                change('4');
                elemenetGetId('link4').href = changeLinkInput;
                close();
            }
            if(elemenetGetId('linkNum').className == 'link5'){
                chrome.storage.local.set({'link5Img':linkImgUrl});
                chrome.storage.local.set({'link5Padding':num});
                chrome.storage.local.set({'link5Width':numi * 2 + 50});
                chrome.storage.local.set({'link5Height':numi * 2 + 50});
                chrome.storage.local.set({'link5':changeLinkInput})
                change('5');
                elemenetGetId('link5').href = changeLinkInput;
                close();
            }
            if(elemenetGetId('linkNum').className == 'link6'){
                chrome.storage.local.set({'link6Img':linkImgUrl});
                chrome.storage.local.set({'link6Padding':num});
                chrome.storage.local.set({'link6Width':numi * 2 + 50});
                chrome.storage.local.set({'link6Height':numi * 2 + 50});
                chrome.storage.local.set({'link6':changeLinkInput})
                change('6');
                elemenetGetId('ithome').href = changeLinkInput;
                close();
            }
            if(elemenetGetId('linkNum').className == 'link7'){
                chrome.storage.local.set({'link7Img':linkImgUrl});
                chrome.storage.local.set({'link7Padding':num});
                chrome.storage.local.set({'link7Width':numi * 2 + 50});
                chrome.storage.local.set({'link7Height':numi * 2 + 50});
                chrome.storage.local.set({'link7':changeLinkInput})
                change('7');
                elemenetGetId('chromeStore').href = changeLinkInput;
                close();
            }
            if(elemenetGetId('linkNum').className == 'link8'){
                chrome.storage.local.set({'link8Img':linkImgUrl});
                chrome.storage.local.set({'link8Padding':num});
                chrome.storage.local.set({'link8Width':numi * 2 + 50});
                chrome.storage.local.set({'link8Height':numi * 2 + 50});
                chrome.storage.local.set({'link8':changeLinkInput})
                change('8');
                elemenetGetId('aliyun').href = changeLinkInput;
                close();
            }
            if(elemenetGetId('linkNum').className == 'link9'){
                chrome.storage.local.set({'link9Img':linkImgUrl});
                chrome.storage.local.set({'link9Padding':num});
                chrome.storage.local.set({'link9Width':numi * 2 + 50});
                chrome.storage.local.set({'link9Height':numi * 2 + 50});
                chrome.storage.local.set({'link9':changeLinkInput})
                change('9');
                elemenetGetId('azure').href = changeLinkInput;
                close();
            }
            if(elemenetGetId('linkNum').className == 'link10'){
                chrome.storage.local.set({'link10Img':linkImgUrl});
                chrome.storage.local.set({'link10Padding':num});
                chrome.storage.local.set({'link10Width':numi * 2 + 50});
                chrome.storage.local.set({'link10Height':numi * 2 + 50});
                chrome.storage.local.set({'link10':changeLinkInput})
                change('10');
                elemenetGetId('link10').href = changeLinkInput;
                close();
            }
        }else{
            elemenetGetId('toast').style.display = '';
            elemenetGetId('blackBack').style.zIndex = '251';
            elemenetGetId('Msg').innerText = '链接格式不对';
            elemenetGetId('toastButton').onclick = function(){
                elemenetGetId('toast').style.display = 'none';
                elemenetGetId('blackBack').style.zIndex = '201';
            }
            console.log(changeLinkInput.slice(0,8));
        }
    }
}
function useLinkChange(){
    chrome.storage.local.get(['link1Img','link1Padding','link1Width','link1Height','link1'],function(budget){
        let num = '1';
        let linkImg = budget.link1Img;
        let linkPadding = budget.link1Padding + 'px';
        let linkWidth = budget.link1Width + 'px';
        let linkHeight = budget.link1Height + 'px';
        let link = budget.link1
        if(typeof(budget.link1) == 'undefined'){
            link = '';
        }
        if(link != ''){
            elemenetGetId('link' + num + 'Img').src = linkImg;
            elemenetGetId('link' + num + 'Padding').style.padding = linkPadding;
            elemenetGetId('link' + num + 'Padding').style.width = linkWidth;
            elemenetGetId('link' + num + 'Padding').style.height = linkHeight;
            elemenetGetId('link1').href = link;
            elemenetGetId('link' + num + 'Imgs').src = linkImg;
            elemenetGetId('link' + num + 'Paddings').style.padding = linkPadding;
            elemenetGetId('link' + num + 'Paddings').style.width = linkWidth;
            elemenetGetId('link' + num + 'Paddings').style.height = linkHeight;
            elemenetGetId('link' + num + 'Img').hidden = false;
        }else{
            elemenetGetId('link' + num + 'Img').hidden = false;
        }
    })
    chrome.storage.local.get(['link2Img','link2Padding','link2Width','link2Height','link2'],function(budget){
        let num = '2'
        let linkImg = budget.link2Img;
        let linkPadding = budget.link2Padding + 'px';
        let linkWidth = budget.link2Width + 'px';
        let linkHeight = budget.link2Height + 'px';
        let link = budget.link2
        if(typeof(budget.link2) == 'undefined'){
            link = '';
        }
        if(link != ''){
            elemenetGetId('link' + num + 'Img').src = linkImg;
            elemenetGetId('link' + num + 'Padding').style.padding = linkPadding;
            elemenetGetId('link' + num + 'Padding').style.width = linkWidth;
            elemenetGetId('link' + num + 'Padding').style.height = linkHeight;
            elemenetGetId('link2').href = link;
            elemenetGetId('link' + num + 'Imgs').src = linkImg;
            elemenetGetId('link' + num + 'Paddings').style.padding = linkPadding;
            elemenetGetId('link' + num + 'Paddings').style.width = linkWidth;
            elemenetGetId('link' + num + 'Paddings').style.height = linkHeight;
            elemenetGetId('link' + num + 'Img').hidden = false;
        }else{
            elemenetGetId('link' + num + 'Img').hidden = false;
        }
    })
    chrome.storage.local.get(['link3Img','link3Padding','link3Width','link3Height','link3'],function(budget){
        let num = '3';
        let linkImg = budget.link3Img;
        let linkPadding = budget.link3Padding + 'px';
        let linkWidth = budget.link3Width + 'px';
        let linkHeight = budget.link3Height + 'px';
        let link = budget.link3
        if(typeof(budget.link3) == 'undefined'){
            link = '';
        }
        if(link != ''){
            elemenetGetId('link' + num + 'Img').src = linkImg;
            elemenetGetId('link' + num + 'Padding').style.padding = linkPadding;
            elemenetGetId('link' + num + 'Padding').style.width = linkWidth;
            elemenetGetId('link' + num + 'Padding').style.height = linkHeight;
            elemenetGetId('link3').href = link;
            elemenetGetId('link' + num + 'Imgs').src = linkImg;
            elemenetGetId('link' + num + 'Paddings').style.padding = linkPadding;
            elemenetGetId('link' + num + 'Paddings').style.width = linkWidth;
            elemenetGetId('link' + num + 'Paddings').style.height = linkHeight;
            elemenetGetId('link' + num + 'Img').hidden = false;
        }else{
            elemenetGetId('link' + num + 'Img').hidden = false;
        }
    })
    chrome.storage.local.get(['link4Img','link4Padding','link4Width','link4Height','link4'],function(budget){
        let num = '4';
        let linkImg = budget.link4Img;
        let linkPadding = budget.link4Padding + 'px';
        let linkWidth = budget.link4Width + 'px';
        let linkHeight = budget.link4Height + 'px';
        let link = budget.link4
        if(typeof(budget.link4) == 'undefined'){
            link = '';
        }
        if(link != ''){
            elemenetGetId('link' + num + 'Img').src = linkImg;
            elemenetGetId('link' + num + 'Padding').style.padding = linkPadding;
            elemenetGetId('link' + num + 'Padding').style.width = linkWidth;
            elemenetGetId('link' + num + 'Padding').style.height = linkHeight;
            elemenetGetId('link4').href = link;
            elemenetGetId('link' + num + 'Imgs').src = linkImg;
            elemenetGetId('link' + num + 'Paddings').style.padding = linkPadding;
            elemenetGetId('link' + num + 'Paddings').style.width = linkWidth;
            elemenetGetId('link' + num + 'Paddings').style.height = linkHeight;
            elemenetGetId('link' + num + 'Img').hidden = false;
        }else{
            elemenetGetId('link' + num + 'Img').hidden = false;
        }
    })
    chrome.storage.local.get(['link5Img','link5Padding','link5Width','link5Height','link5'],function(budget){
        let num = '5';
        let linkImg = budget.link5Img;
        let linkPadding = budget.link5Padding + 'px';
        let linkWidth = budget.link5Width + 'px';
        let linkHeight = budget.link5Height + 'px';
        let link = budget.link5
        if(typeof(budget.link5) == 'undefined'){
            link = '';
        }
        if(link != ''){
            elemenetGetId('link' + num + 'Img').src = linkImg;
            elemenetGetId('link' + num + 'Padding').style.padding = linkPadding;
            elemenetGetId('link' + num + 'Padding').style.width = linkWidth;
            elemenetGetId('link' + num + 'Padding').style.height = linkHeight;
            elemenetGetId('link5').href = link;
            elemenetGetId('link' + num + 'Imgs').src = linkImg;
            elemenetGetId('link' + num + 'Paddings').style.padding = linkPadding;
            elemenetGetId('link' + num + 'Paddings').style.width = linkWidth;
            elemenetGetId('link' + num + 'Paddings').style.height = linkHeight;
            elemenetGetId('link' + num + 'Img').hidden = false;
        }else{
            elemenetGetId('link' + num + 'Img').hidden = false;
        }
    })
    chrome.storage.local.get(['link6Img','link6Padding','link6Width','link6Height','link6'],function(budget){
        let num = '6';
        let linkImg = budget.link6Img;
        let linkPadding = budget.link6Padding + 'px';
        let linkWidth = budget.link6Width + 'px';
        let linkHeight = budget.link6Height + 'px';
        let link = budget.link6
        if(typeof(budget.link6) == 'undefined'){
            link = '';
        }
        if(link != ''){
            elemenetGetId('link' + num + 'Img').src = linkImg;
            elemenetGetId('link' + num + 'Padding').style.padding = linkPadding;
            elemenetGetId('link' + num + 'Padding').style.width = linkWidth;
            elemenetGetId('link' + num + 'Padding').style.height = linkHeight;
            elemenetGetId('ithome').href = link;
            elemenetGetId('link' + num + 'Imgs').src = linkImg;
            elemenetGetId('link' + num + 'Paddings').style.padding = linkPadding;
            elemenetGetId('link' + num + 'Paddings').style.width = linkWidth;
            elemenetGetId('link' + num + 'Paddings').style.height = linkHeight;
            elemenetGetId('link' + num + 'Img').hidden = false;
        }else{
            elemenetGetId('link' + num + 'Img').hidden = false;
        }
    })
    chrome.storage.local.get(['link7Img','link7Padding','link7Width','link7Height','link7'],function(budget){
        let num = '7';
        let linkImg = budget.link7Img;
        let linkPadding = budget.link7Padding + 'px';
        let linkWidth = budget.link7Width + 'px';
        let linkHeight = budget.link7Height + 'px';
        let link = budget.link7
        if(typeof(budget.link7) == 'undefined'){
            link = '';
        }
        if(link != ''){
            elemenetGetId('link' + num + 'Img').src = linkImg;
            elemenetGetId('link' + num + 'Padding').style.padding = linkPadding;
            elemenetGetId('link' + num + 'Padding').style.width = linkWidth;
            elemenetGetId('link' + num + 'Padding').style.height = linkHeight;
            elemenetGetId('chromeStore').href = link;
            elemenetGetId('link' + num + 'Imgs').src = linkImg;
            elemenetGetId('link' + num + 'Paddings').style.padding = linkPadding;
            elemenetGetId('link' + num + 'Paddings').style.width = linkWidth;
            elemenetGetId('link' + num + 'Paddings').style.height = linkHeight;
            elemenetGetId('link' + num + 'Img').hidden = false;
        }else{
            elemenetGetId('link' + num + 'Img').hidden = false;
        }
    })
    chrome.storage.local.get(['link8Img','link8Padding','link8Width','link8Height','link8'],function(budget){
        let num = '8';
        let linkImg = budget.link8Img;
        let linkPadding = budget.link8Padding + 'px';
        let linkWidth = budget.link8Width + 'px';
        let linkHeight = budget.link8Height + 'px';
        let link = budget.link8
        if(typeof(budget.link8) == 'undefined'){
            link = '';
        }
        if(link != ''){
            elemenetGetId('link' + num + 'Img').src = linkImg;
            elemenetGetId('link' + num + 'Padding').style.padding = linkPadding;
            elemenetGetId('link' + num + 'Padding').style.width = linkWidth;
            elemenetGetId('link' + num + 'Padding').style.height = linkHeight;
            elemenetGetId('aliyun').href = link;
            elemenetGetId('link' + num + 'Imgs').src = linkImg;
            elemenetGetId('link' + num + 'Paddings').style.padding = linkPadding;
            elemenetGetId('link' + num + 'Paddings').style.width = linkWidth;
            elemenetGetId('link' + num + 'Paddings').style.height = linkHeight;
            elemenetGetId('link' + num + 'Img').hidden = false;
        }else{
            elemenetGetId('link' + num + 'Img').hidden = false;
        }
    })
    chrome.storage.local.get(['link9Img','link9Padding','link9Width','link9Height','link9'],function(budget){
        let num = '9';
        let linkImg = budget.link9Img;
        let linkPadding = budget.link9Padding + 'px';
        let linkWidth = budget.link9Width + 'px';
        let linkHeight = budget.link9Height + 'px';
        let link = budget.link9
        if(typeof(budget.link9) == 'undefined'){
            link = '';
        }
        if(link != ''){
            elemenetGetId('link' + num + 'Img').src = linkImg;
            elemenetGetId('link' + num + 'Padding').style.padding = linkPadding;
            elemenetGetId('link' + num + 'Padding').style.width = linkWidth;
            elemenetGetId('link' + num + 'Padding').style.height = linkHeight;
            elemenetGetId('azure').href = link;
            elemenetGetId('link' + num + 'Imgs').src = linkImg;
            elemenetGetId('link' + num + 'Paddings').style.padding = linkPadding;
            elemenetGetId('link' + num + 'Paddings').style.width = linkWidth;
            elemenetGetId('link' + num + 'Paddings').style.height = linkHeight;
            elemenetGetId('link' + num + 'Img').hidden = false;
        }else{
            elemenetGetId('link' + num + 'Img').hidden = false;
        }
    })
    chrome.storage.local.get(['link10Img','link10Padding','link10Width','link10Height','link10'],function(budget){
        let num = '10';
        let linkImg = budget.link10Img;
        let linkPadding = budget.link10Padding + 'px';
        let linkWidth = budget.link10Width + 'px';
        let linkHeight = budget.link10Height + 'px';
        let link = budget.link10
        if(typeof(budget.link10) == 'undefined'){
            link = '';
        }
        if(link != ''){
            elemenetGetId('link' + num + 'Img').src = linkImg;
            elemenetGetId('link' + num + 'Padding').style.padding = linkPadding;
            elemenetGetId('link' + num + 'Padding').style.width = linkWidth;
            elemenetGetId('link' + num + 'Padding').style.height = linkHeight;
            elemenetGetId('link10').href = link;
            elemenetGetId('link' + num + 'Imgs').src = linkImg;
            elemenetGetId('link' + num + 'Paddings').style.padding = linkPadding;
            elemenetGetId('link' + num + 'Paddings').style.width = linkWidth;
            elemenetGetId('link' + num + 'Paddings').style.height = linkHeight;
            elemenetGetId('link' + num + 'Img').hidden = false;
        }else{
            elemenetGetId('link' + num + 'Img').hidden = false;
        }
    })
}