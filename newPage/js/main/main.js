function getTime(){
  var time=new Date();
  var timeele = elemenetGetId('time')
  var h=time.getHours();
  var m=time.getMinutes();
  var s=time.getSeconds();

  timeele.innerHTML=h+":"+m+":"+s;
}

// get screen width to change style
function changeStyle(){
  var screenWidth = body().offsetWidth;//get screen width
  var bottom_right = elemenetGetId('bottom-right');
  var down = elemenetGetId('down');
  var searchbar = elemenetGetId('searchbar');
  var mainlink = elemenetGetId('mainlink');
  var title = elemenetGetId('title');
  var cal = elemenetGetId('cal');
  var clock = elemenetGetId('clock');
  var history = elemenetGetId('history');
  var button = elemenetGetId('button');
  var oneMain = elemenetGetId('oneMain');
  var azure = elemenetGetId('azure');
  var ithome = elemenetGetId('ithome');
  var chromeStore = elemenetGetId('chromeStore');
  var aliyun = elemenetGetId('aliyun');
  var main = elemenetGetId('main');
  var uploadBtn = elemenetGetId('uploadBtn');
  var backgroundSetButton = elemenetGetId('backgroundSetButton');
  var backgroundBefore = elemenetGetId('backgroundBefore');
  var donateImg = elemenetGetId('donateImg');
  //if screen is phone to phone style
  if(screenWidth <= 813){
    bottom_right.style.marginTop = '20px';
    bottom_right.style.top = '0';
    bottom_right.style.bottom = '';
    down.style.marginBottom = '-50px';
    down.style.marginLeft = '-65px';
    searchbar.style.width = '324px';//set search bar to phone style
    mainlink.style.width = '366px';//set links to phone style
    title.style.display = 'flex';
    //set tools button style
    title.style.justifyContent = 'center';
    title.style.bottom = '0';
    title.style.top = '';
    title.style.width = '100%';
    title.style.marginBottom = '40px';
    cal.style.marginRight = '0';//set calculator button margin right to 0px
    clock.hidden = true; //hide clock button
    history.hidden = true; //hide history button
    button.style.marginBottom = '150px';//chenge ui button
    button.style.maxWidth = '280px';
    button.style.transition = 'margin 0.5s';
    button.style.zIndex = '100';
    oneMain.style.width = '0px';
    oneMain.style.height = '0px';
    oneMain.style.padding = '0px';
    oneMain.className = 'oneMainBeforeMobile';
    //hide links button
    azure.hidden = true;
    ithome.hidden = true;
    chromeStore.hidden = true;
    aliyun.hidden = true;
    main.style.marginTop = '-160px';//set search area margin top
    uploadBtn.style.width = '200px';
    backgroundSetButton.style.flex = '1';
    backgroundBefore.style.flex = '1';
    donateImg.style.flexDirection = 'column';
    elemenetGetId('historyFeatureBtn').style.display = 'none';
    elemenetGetId('clockFeatureBtn').style.display = 'none';
    elemenetGetId('hide').style.marginRight = '0px';
    elemenetGetId('reload').style.marginLeft = '20px';
    elemenetGetId('reload').style.marginRight = '0px';
    elemenetGetId('cal').style.marginLeft = '20px';
    elemenetGetId('link6Btn').style.display = 'none';
    elemenetGetId('link7Btn').style.display = 'none';
    elemenetGetId('link8Btn').style.display = 'none';
    elemenetGetId('link9Btn').style.display = 'none';
    elemenetGetId('backgroundSettings').style.backgroundColor = 'transparent';
    elemenetGetId('exImg').style.display = 'none';
    elemenetGetClass('featureNames')[0].style.display = 'none';
    elemenetGetClass('featureNames')[1].style.display = 'none';
    elemenetGetClass('featureNames')[2].style.display = 'none';
    elemenetGetClass('featureNames')[3].style.display = 'none';
    elemenetGetClass('featureNames')[4].style.display = 'none';
    elemenetGetClass('featureNames')[5].style.display = 'none';
    elemenetGetClass('featureNames')[6].style.display = 'none';
  }else{
    button.style.marginBottom = '20px'
    oneMain.className = 'oneMainBefore';
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
            var obj = JSON.parse(httpRequest.responseText);
            var pic = obj.pic;

            elemenetGetId('picurl').className = pic;
        }
    };
  }
  chrome.storage.local.get(['picUrl'],function(budget){
    var picUrl = budget.picUrl;
    var background = elemenetGetId('background');
    var down = elemenetGetId('down');
    var button = elemenetGetId('button');
    var picurl = elemenetGetId('picurl');
    var oneMain = elemenetGetId('oneMain');
    if(typeof(budget.picUrl) == 'undefined'){
      picUrl = '';
    }
    if(picUrl != ''){
      background.style.backgroundImage = 'url(' + budget.picUrl + ')';
      down.style.display = 'none';
    }else{
      elemenetGetId('backgroundBefore').hidden = true;
      elemenetGetId('backgroundSetButton').style.marginRight = '0px';
      //This is onload script
      //else load 'imgs/background.png'
      var screenWidth = body().offsetWidth;
      if(screenWidth <= 813){
        picget('http://mark.tnyl.xyz/api/API/mp.php?type=json');
        setTimeout(function(){
          if(button.innerHTML != ''){
            print('network is working');
            background.style.backgroundImage = "url(" + picurl.className + ")";
            setTimeout(function(){
              if(background.style.backgroundImage == 'url("")'){
                background.style.backgroundImage = "url(" + picurl.className + ")";
              }
            },200)
          }else{
            print('network is not working');
            background.style.backgroundImage = "url('imgs/mobile/background - " + Math.ceil(Math.random()*5) + ".jpg')";
            button.innerHTML = '暂时没有有连接到可以访问互联网的网络哦~';
            button.onclick = oneMain.style.display = 'none';
            down.onclick = function(){
              button.innerHTML = '本地图片无法下载哦~';
              setTimeout(function(){
                button.innerHTML = '暂时没有有连接到可以访问互联网的网络哦~';
              },2500)
            }
          }
        },300)
        setTimeout(function(){
          if(picurl.className != ''){
            if(background.style.backgroundImage == 'url("")'){
              background.style.backgroundImage = "url(" + picurl.className + ")";
            }
          }else{
            if(background.style.backgroundImage == 'url("")'){
              background.style.backgroundImage = "url('imgs/mobile/background - " + Math.ceil(Math.random()*5) + ".jpg')";
              setTimeout(function(){
                button.innerHTML = '在线图片加载失败，已加载内建图片哦~';
              },500)
              button.onclick = oneMain.style.display = 'none';
              down.onclick = function(){
                button.innerHTML = '本地图片无法下载哦~';
                setTimeout(function(){
                  button.innerHTML = '在线图片加载失败，已加载内建图片哦~';
                },2500)
              }
            }
          }
        },1000)
      }else{
        picget('http://mark.tnyl.xyz/api/API/pc.php?type=json');
        setTimeout(function(){
          if(button.innerHTML != ''){  
            print('network is working');
            background.style.backgroundImage = "url(" + picurl.className + ")";
            setTimeout(function(){
              if(background.style.backgroundImage == 'url("")'){
                background.style.backgroundImage = "url(" + picurl.className + ")";
              }
            },200)
          }else{  
            print('network is not working');
            background.style.backgroundImage = "url('imgs/background - " + Math.ceil(Math.random()*5) + ".jpg')";
            button.innerHTML = '暂时没有有连接到可以访问互联网的网络哦~';
            button.onclick = oneMain.style.display = 'none';
            down.onclick = function(){
              button.innerHTML = '本地图片无法下载哦~';
              setTimeout(function(){
                button.innerHTML = '暂时没有有连接到可以访问互联网的网络哦~';
              },2500)
            }
          }
        },300)
        setTimeout(function(){
          if(picurl.className != ''){
            if(background.style.backgroundImage == 'url("")'){
              background.style.backgroundImage = "url(" + picurl.className + ")";
            }
          }else{
            if(background.style.backgroundImage == 'url("")'){
              background.style.backgroundImage = "url('imgs/background - " + Math.ceil(Math.random()*5) + ".jpg')";
              setTimeout(function(){
                button.innerHTML = '在线图片加载失败，已加载内建图片哦~';
              },500)
              button.onclick = oneMain.style.display = 'none';
              down.onclick = function(){
                button.innerHTML = '本地图片无法下载哦~';
                setTimeout(function(){
                  button.innerHTML = '在线图片加载失败，已加载内建图片哦~';
                },2500)
              }
            }
          }
        },1000)
      }
    }
  })
  elemenetGetId('down').onclick = function(){
    chrome.downloads.download({ 
      url: picurl.className, 
      filename: "pic-"+ Math.ceil(Math.random()*1000) +".png" 
    }); 
  }

  chrome.storage.local.get(['loadingAn'],function(budget){
    var loadingAn = budget.loadingAn;
    if(loadingAn == 'show'){
      elemenetGetId('loadingAn').className = 'otherFeatures';
      elemenetGetId('loadingAn').innerText = '显示';
      elemenetGetId('loading').style.zIndex = '300';
      elemenetGetId('loading').style.display = '';
      setTimeout(function(){
        elemenetGetId('loading').style.zIndex = '-3';
        elemenetGetId('loading').style.display = 'none';
      },500)
    }
  })

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
    setInterval(function(){
      var time=new Date();
      var timeele = elemenetGetId('time')
      var h=time.getHours();
      var m=time.getMinutes();
      var s=time.getSeconds();
    
      timeele.innerHTML=h+":"+m+":"+s;
    },1000);
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