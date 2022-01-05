function getTime(){
  var time=new Date();
  var h=time.getHours();
  var m=time.getMinutes();
  var s=time.getSeconds();

  elemenetGetId("time").innerHTML=h+":"+m+":"+s;
}

// get screen width to change style
function changeStyle(){
  var screenWidth = body().offsetWidth;//get screen width
  var screenHeight = body().offsetHeight - 140;//get tools button margin top
  //if screen is phone to phone style
  if(screenWidth <= 813){
    elemenetGetId('bottom-right').style.marginTop = '20px';
    elemenetGetId('bottom-right').style.top = '0';
    elemenetGetId('bottom-right').style.bottom = '';
    elemenetGetId('down').style.marginBottom = '-50px';
    elemenetGetId('down').style.marginLeft = '-65px';
    elemenetGetId('searchbar').style.width = '324px';//set search bar to phone style
    elemenetGetId('mainlink').style.width = '366px';//set links to phone style
    elemenetGetId('title').style.display = 'flex';
    //set tools button style
    elemenetGetId('title').style.justifyContent = 'center';
    elemenetGetId('title').style.bottom = '0';
    elemenetGetId('title').style.top = '';
    elemenetGetId('title').style.width = '100%';
    elemenetGetId('title').style.marginBottom = '40px';
    elemenetGetId('cal').style.marginRight = '0';//set calculator button margin right to 0px
    elemenetGetId('clock').hidden = true; //hide clock button
    elemenetGetId('history').hidden = true; //hide history button
    elemenetGetId('button').style.marginBottom = '150px';//chenge ui button
    elemenetGetId('button').style.maxWidth = '280px';
    elemenetGetId('button').style.transition = 'margin 0.5s';
    elemenetGetId('button').style.zIndex = '100';
    elemenetGetId('oneMain').style.width = '0px';
    elemenetGetId('oneMain').style.height = '0px';
    elemenetGetId('oneMain').style.padding = '0px';
    elemenetGetId('oneMain').className = 'oneMainBeforeMobile';
    //hide links button
    elemenetGetId('azure').hidden = true;
    elemenetGetId('ithome').hidden = true;
    elemenetGetId('chromeStore').hidden = true;
    elemenetGetId('aliyun').hidden = true;
    elemenetGetId('main').style.marginTop = '-160px';//set search area margin top
  }else{
    elemenetGetId('button').style.marginBottom = '20px'
    elemenetGetId('oneMain').className = 'oneMainBefore';
  }
}

//This is show all element function
function onShow(){
  elemenetGetId('mainlink').style.display=""; //show link element
  elemenetGetId('button').hidden = false; //show bottom button
  elemenetGetId('history').hidden = false; //show history button
  elemenetGetId('reload').hidden = false; //show reload button
  elemenetGetId('info').hidden = false; //show info button
  elemenetGetId('cal').hidden = false; // show calculator button
  elemenetGetId('hide').hidden = false; // show hide button
  elemenetGetId('searchbar').style.display=""; //show searchBar button
  elemenetGetId('clock').hidden = false; //show clock button
  elemenetGetId('down').hidden = false; 
  elemenetGetId('settings').hidden = false; 
}

//This is hide all element function
function onHide(){
  elemenetGetId("mainlink").style.display="none"; //hide link elemnet
  elemenetGetId('button').hidden = true; //hide bottom button
  elemenetGetId('history').hidden = true; //hide history button
  elemenetGetId('reload').hidden = true; //hide reload button
  elemenetGetId('info').hidden = true; //hide info button
  elemenetGetId('cal').hidden = true; //hide calculator button
  elemenetGetId('hide').hidden = true; //hide hide button
  elemenetGetId('searchbar').style.display="none"; //hide searchBar button
  elemenetGetId('clock').hidden = true; //hide clock button
  elemenetGetId('down').hidden = true;
  elemenetGetId('settings').hidden = true;
}


function mainUse(){
  var httpRequest = new XMLHttpRequest();
  function picget(url){
    httpRequest.open('GET', url, true);
    httpRequest.send();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var pic = httpRequest.responseText;

            var obj = eval("(" + pic + ")");
            var pic = obj.pic;

            console.log(obj);
            elemenetGetId('picurl').className = pic;
        }
    };
  }
  //This is onload script
  //else load 'imgs/background.png'
  var screenWidth = body().offsetWidth;
  if(screenWidth <= 813){
    picget('http://mark.tnyl.xyz/api/API/mp.php?type=json');
    setTimeout(function(){
      if(elemenetGetId('button').innerHTML != ''){
        print('network is working');
        elemenetGetId('background').style.backgroundImage = "url(" + elemenetGetId('picurl').className + ")";
        setTimeout(function(){
          if(elemenetGetId('background').style.backgroundImage == 'url("")'){
            elemenetGetId('background').style.backgroundImage = "url(" + elemenetGetId('picurl').className + ")";
          }
        },200)
      }else{
        print('network is not working');
        elemenetGetId('background').style.backgroundImage = "url('imgs/mobile/background - " + Math.ceil(Math.random()*5) + ".jfif')";
        elemenetGetId('button').innerHTML = '暂时没有有连接到可以访问互联网的网络哦~';
        elemenetGetId('button').onclick = elemenetGetId('oneMain').style.display = 'none';
        elemenetGetId('down').onclick = function(){
          elemenetGetId('button').innerHTML = '本地图片无法下载哦~';
          setTimeout(function(){
            elemenetGetId('button').innerHTML = '暂时没有有连接到可以访问互联网的网络哦~';
          },2500)
        }
      }
    },300)
    setTimeout(function(){
      if(elemenetGetId('picurl').className != ''){
        if(elemenetGetId('background').style.backgroundImage == 'url("")'){
          elemenetGetId('background').style.backgroundImage = "url(" + elemenetGetId('picurl').className + ")";
        }
      }else{
        if(elemenetGetId('background').style.backgroundImage == 'url("")'){
          elemenetGetId('background').style.backgroundImage = "url('imgs/mobile/background - " + Math.ceil(Math.random()*5) + ".jfif')";
          setTimeout(function(){
            elemenetGetId('button').innerHTML = '在线图片加载失败，已加载内建图片哦~';
          },500)
          elemenetGetId('button').onclick = elemenetGetId('oneMain').style.display = 'none';
          elemenetGetId('down').onclick = function(){
            elemenetGetId('button').innerHTML = '本地图片无法下载哦~';
            setTimeout(function(){
              elemenetGetId('button').innerHTML = '在线图片加载失败，已加载内建图片哦~';
            },2500)
          }
        }
      }
    },1000)
  }else{
    picget('http://mark.tnyl.xyz/api/API/pc.php?type=json');
    setTimeout(function(){
      if(elemenetGetId('button').innerHTML != ''){  
        print('network is working');
        elemenetGetId('background').style.backgroundImage = "url(" + elemenetGetId('picurl').className + ")";
        setTimeout(function(){
          if(elemenetGetId('background').style.backgroundImage == 'url("")'){
            elemenetGetId('background').style.backgroundImage = "url(" + elemenetGetId('picurl').className + ")";
          }
        },200)
      }else{  
        print('network is not working');
        elemenetGetId('background').style.backgroundImage = "url('imgs/background - " + Math.ceil(Math.random()*5) + ".jpg')";
        elemenetGetId('button').innerHTML = '暂时没有有连接到可以访问互联网的网络哦~';
        elemenetGetId('button').onclick = elemenetGetId('oneMain').style.display = 'none';
        elemenetGetId('down').onclick = function(){
          elemenetGetId('button').innerHTML = '本地图片无法下载哦~';
          setTimeout(function(){
            elemenetGetId('button').innerHTML = '暂时没有有连接到可以访问互联网的网络哦~';
          },2500)
        }
      }
    },300)
    setTimeout(function(){
      if(elemenetGetId('picurl').className != ''){
        if(elemenetGetId('background').style.backgroundImage == 'url("")'){
          elemenetGetId('background').style.backgroundImage = "url(" + elemenetGetId('picurl').className + ")";
        }
      }else{
        if(elemenetGetId('background').style.backgroundImage == 'url("")'){
          elemenetGetId('background').style.backgroundImage = "url('imgs/background - " + Math.ceil(Math.random()*5) + ".jpg')";
          setTimeout(function(){
            elemenetGetId('button').innerHTML = '在线图片加载失败，已加载内建图片哦~';
          },500)
          elemenetGetId('button').onclick = elemenetGetId('oneMain').style.display = 'none';
          elemenetGetId('down').onclick = function(){
            elemenetGetId('button').innerHTML = '本地图片无法下载哦~';
            setTimeout(function(){
              elemenetGetId('button').innerHTML = '在线图片加载失败，已加载内建图片哦~';
            },2500)
          }
        }
      }
    },1000)
  }

  elemenetGetId('down').onclick = function(){
    chrome.downloads.download({ 
      url: elemenetGetId('picurl').className, 
      filename: "pic-"+ Math.ceil(Math.random()*1000) +".png" 
    }); 
  }

  //This is historybar function
  elemenetGetId('history').onclick = function onBarButton(){
    elemenetGetId('bar').className = 'barSel'; //change historyBar style to barSelect style
    elemenetGetId('imgbefore').className = 'imgafter' //change historyBarIcon style to historyBarIconSelect style1
  }

  //This is historybar back function
  elemenetGetId('historyback').onclick = function onBarButtonBack(){
    elemenetGetId('bar').className = 'bar'; //change hidtoryBar style to barBefore style
    elemenetGetId('imgbefore').className = 'imgbefore' //change historyBarIcon style to historyBayIconBefore style
  }

  elemenetGetId('reload').onclick = function(){
    location.reload();
  }

  //This is calculator function
  elemenetGetId('cal').onclick = function onCal(){
    var screenWidth = body().offsetWidth;
    var hide = elemenetGetId('button').hidden;
    if(hide == false){
      elemenetGetId('mainCal').hidden = false; //show calculator element
      onHide();
      elemenetGetId('cal').hidden = false; //show calculator button
    }else{
      elemenetGetId('mainCal').hidden = true; //hide calculator element
      onShow();
      if(screenWidth <= 813){
        elemenetGetId('history').hidden = true; //hide history button
        elemenetGetId('clock').hidden = true; //hide clock button
      }
    }
  }

  //This is clock function
  elemenetGetId('background').onload = function time(){
    getTime();
  }

  elemenetGetId('clock').onclick = function onClock(){
    setInterval("getTime()",1000);
    var hide = elemenetGetId('button').hidden;
    if(hide == false){
      elemenetGetId('mainClock').style.display=""; //show clock element
      onHide();
      elemenetGetId('clock').hidden = false; //show calculator button
    }else{
      elemenetGetId('mainClock').style.display="none"; //hide clock element
      onShow();
    }
  }
}