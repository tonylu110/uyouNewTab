function chageOneFontSize(){
    elemenetGetId('oneNum').style.color = 'transparent';
    elemenetGetId('oneTxt').style.color = 'transparent';
    elemenetGetId('oneFrom').style.color = 'transparent';
}
function chageOneAni(){
    elemenetGetId('oneNum').style.transition = '0.5s';
    elemenetGetId('oneTxt').style.transition = '0.5s';
    elemenetGetId('oneFrom').style.transition = '0.5s';
}

var httpRequest = new XMLHttpRequest();
function one(){
    httpRequest.open('GET', 'https://v1.hitokoto.cn/', true);
    // httpRequest.overrideMimeType('application/xml');
    httpRequest.send();
            
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var one = httpRequest.responseText;

            var obj = eval("(" + one + ")");

            elemenetGetId('button').innerHTML = obj.hitokoto;
            elemenetGetId('oneNum').innerHTML = '#' + obj.id;
            elemenetGetId('oneTxt').innerHTML = obj.hitokoto;
            elemenetGetId('oneFrom').innerHTML = '————' + obj.from;
            console.log(obj);
        }
    };
}

function oneUse(){
    var screenWidth = body().offsetWidth;//get screen width
    elemenetGetId('button').onclick = function(){
        elemenetGetId('blackBack').style.zIndex = 150;
        elemenetGetId('blackBack').style.backgroundColor = '#00000050';
        elemenetGetId('oneMain').style.display = '';
        elemenetGetId('oneMain').className = 'oneMain';
        elemenetGetId('closeButton').style.width = '14px';
        elemenetGetId('closeButton').style.height = '14px';
        elemenetGetId('closeButton').style.padding = '8px';
        if(screenWidth <= 813){
            elemenetGetId('oneNum').style.fontSize = '20px';
            elemenetGetId('oneTxt').style.fontSize = '30px';
            elemenetGetId('oneFrom').style.fontSize = '25px';
            elemenetGetId('oneMain').style.width = '270px';
            elemenetGetId('oneMain').style.height = '400px';
            elemenetGetId('oneMain').style.padding = '40px';
        }else{
            elemenetGetId('oneNum').style.fontSize = '25px';
            elemenetGetId('oneTxt').style.fontSize = '40px';
            elemenetGetId('oneFrom').style.fontSize = '30px';
        }
        elemenetGetId('oneNum').style.color = 'black';
        elemenetGetId('oneTxt').style.color = 'black';
        elemenetGetId('oneFrom').style.color = 'black';
        elemenetGetId('oneNum').style.transition = '0.5s';
        elemenetGetId('oneTxt').style.transition = '0.5s';
        elemenetGetId('oneFrom').style.transition = '0.5s';
    }
    elemenetGetId('closeButton').onclick = function(){
        elemenetGetId('blackBack').style.zIndex = -1;
        elemenetGetId('blackBack').style.backgroundColor = '#00000010';
        if(screenWidth <= 813){
            elemenetGetId('oneMain').style.width = '0px';
            elemenetGetId('oneMain').style.height = '0px';
            elemenetGetId('oneMain').style.padding = '0px';
            elemenetGetId('oneMain').className = 'oneMainBeforeMobile';
        }else{
            elemenetGetId('oneMain').className = 'oneMainBefore';
        }
        elemenetGetId('closeButton').style.width = '0px';
        elemenetGetId('closeButton').style.height = '0px';
        elemenetGetId('closeButton').style.padding = '0px';
        elemenetGetId('oneNum').style.fontSize = '0px';
        elemenetGetId('oneTxt').style.fontSize = '0px';
        elemenetGetId('oneFrom').style.fontSize = '0px';
        elemenetGetId('oneNum').style.transition = '0s';
        elemenetGetId('oneTxt').style.transition = '0s';
        elemenetGetId('oneFrom').style.transition = '0s';
        setTimeout('chageOneFontSize()',502);
        setTimeout('chageOneAni()',1000);
    }
}