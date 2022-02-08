var httpRequest = new XMLHttpRequest();
function one(){
    httpRequest.open('GET', 'https://v1.hitokoto.cn/', true);
    httpRequest.send();
            
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var obj = JSON.parse(httpRequest.responseText);

            elemenetGetId('button').innerHTML = obj.hitokoto;
            elemenetGetId('oneNum').innerHTML = '#' + obj.id;
            elemenetGetId('oneTxt').innerHTML = obj.hitokoto;
            elemenetGetId('oneFrom').innerHTML = '————' + obj.from;
        }
    };
}

function oneUse(){
    var screenWidth = body().offsetWidth;//get screen width
    var blackBack = elemenetGetId('blackBack');
    var oneMain = elemenetGetId('oneMain');
    var closeButton = elemenetGetId('closeButton');
    var oneNum = elemenetGetId('oneNum');
    var oneTxt = elemenetGetId('oneTxt');
    var oneFrom = elemenetGetId('oneFrom');
    elemenetGetId('button').onclick = function(){
        blackBack.style.zIndex = 150;
        blackBack.style.backgroundColor = '#00000050';
        oneMain.style.display = '';
        oneMain.className = 'oneMain';
        closeButton.style.width = '14px';
        closeButton.style.height = '14px';
        closeButton.style.padding = '8px';
        if(screenWidth <= 813){
            oneNum.style.fontSize = '20px';
            oneTxt.style.fontSize = '30px';
            oneFrom.style.fontSize = '25px';
            oneMain.style.width = '270px';
            oneMain.style.height = '400px';
            oneMain.style.padding = '40px';
        }else{
            oneNum.style.fontSize = '25px';
            oneTxt.style.fontSize = '40px';
            oneFrom.style.fontSize = '30px';
        }
        oneNum.style.color = 'black';
        oneTxt.style.color = 'black';
        oneFrom.style.color = 'black';
        oneNum.style.transition = '0.5s';
        oneTxt.style.transition = '0.5s';
        oneFrom.style.transition = '0.5s';
    }
    closeButton.onclick = function(){
        blackBack.style.zIndex = -1;
        blackBack.style.backgroundColor = '#00000010';
        if(screenWidth <= 813){
            oneMain.style.width = '0px';
            oneMain.style.height = '0px';
            oneMain.style.padding = '0px';
            oneMain.className = 'oneMainBeforeMobile';
        }else{
            oneMain.className = 'oneMainBefore';
        }
        closeButton.style.width = '0px';
        closeButton.style.height = '0px';
        closeButton.style.padding = '0px';
        oneNum.style.fontSize = '0px';
        oneTxt.style.fontSize = '0px';
        oneFrom.style.fontSize = '0px';
        oneNum.style.transition = '0s';
        oneTxt.style.transition = '0s';
        oneFrom.style.transition = '0s';
        setTimeout(function(){
            elemenetGetId('oneNum').style.color = 'transparent';
            elemenetGetId('oneTxt').style.color = 'transparent';
            elemenetGetId('oneFrom').style.color = 'transparent';
        },502);
        setTimeout(function(){
            elemenetGetId('oneNum').style.transition = '0.5s';
            elemenetGetId('oneTxt').style.transition = '0.5s';
            elemenetGetId('oneFrom').style.transition = '0.5s';
        },1000);
    }
}