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
    elemenetGetId('button').onclick = function(){
        elemenetGetId('blackBack').style.zIndex = 150;
        elemenetGetId('blackBack').style.backgroundColor = '#00000050';
        elemenetGetId('oneMain').style.display = '';
    }
    elemenetGetId('closeButton').onclick = function(){
        elemenetGetId('blackBack').style.zIndex = -1;
        elemenetGetId('blackBack').style.backgroundColor = '#00000010';
        elemenetGetId('oneMain').style.display = 'none';
    }
}