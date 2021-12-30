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
    elemenetGetId('searchbar').style.width = '330px';//set search bar to phone style
    elemenetGetId('mainlink').style.width = '370px';//set links to phone style
    elemenetGetId('title').style.display = 'flex';
    //set tools button style
    elemenetGetId('title').style.width = screenWidth + 'px';
    elemenetGetId('title').style.marginTop = screenHeight + 'px'
    elemenetGetId('title').style.justifyContent = 'center';
    elemenetGetId('cal').style.marginRight = '0';//set calculator button margin right to 0px
    elemenetGetId('clock').hidden = true; //hide clock button
    elemenetGetId('history').hidden = true; //hide history button
    elemenetGetId('button').style.marginBottom = -screenHeight + 'px';//hide chenge ui button
    //hide links button
    elemenetGetId('azure').hidden = true;
    elemenetGetId('ithome').hidden = true;
    elemenetGetId('chromeStore').hidden = true;
    elemenetGetId('aliyun').hidden = true;
    elemenetGetId('main').style.marginTop = '-100px';//set search area margin top
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
}


function mainUse(){
  //This is onload script
  //test 'https://api.iyk0.com/ecy/api.php' can or not work
  //if it is working to load 'https://api.iyk0.com/ecy/api.php'
  //else load 'imgs/background.png'
  var backgroundImg = new Image();
  backgroundImg.src = 'https://api.iyk0.com/ecy/api.php';
  backgroundImg.onload = function() {
      print('network is working');
      elemenetGetId('background').style.backgroundImage = "url('https://api.iyk0.com/ecy/api.php')";
  };
  backgroundImg.onerror = function() {
      print('network is not working');
      elemenetGetId('background').style.backgroundImage = "url('imgs/background - " + Math.ceil(Math.random()*10) + ".jpg')";
  };

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