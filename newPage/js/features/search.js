function searchUse(){
  //This is searchBar function
  elemenetGetId('keywords').onclick = function engine(){ //get searchEngin img
    getSearchEngine();
  }
  function getSearchEngine(){ //get searchEngin img
    s = elemenetGetId('searchEngine').src;
    engine = s.substring(s.lastIndexOf("/")+1)
  }

  elemenetGetId('keywords').onkeydown = function onkeywords() {
    getSearchEngine(); //use getSearchEngin function
    if(event.keyCode==13) {
      var keywords = elemenetGetId('keywords').value; //get keywords
      if(engine == 'google.png'){
        window.open('https://www.google.com/search?q='+keywords,'_self'); //if engine is google google to google search
      }else if(engine == 'baidu.png'){
        window.open('https://www.baidu.com/s?wd='+keywords,'_self'); //if engine is baidu to baidu search
      }else if(engine == 'bing-logo.png'){
        window.open('https://cn.bing.com/search?q='+keywords,'_self'); //if engine is bing to bing search
      }else if(engine == 'ddg.svg'){
        window.open('https://duckduckgo.com/?q='+keywords,'_self');
      }else if(engine == 'yandex.png'){
        window.open('https://yandex.com/search/?text='+keywords,'_self');
      }else{
        window.open('https://www.sogou.com/web?query='+keywords,'_self');
      }
    }
  }

  //change search engine
  elemenetGetId('searchEngine').onclick = function onSearchImg(){
    var hide = elemenetGetId('moreSearch').hidden;
    if(hide == true){
      elemenetGetId('moreSearch').hidden = false;
    }else{
      elemenetGetId('moreSearch').hidden = true;
    }
  }
  //click img to engine img
  elemenetGetId('google').onclick = function onGoogle(){
    chrome.storage.sync.set({'search':'google'});
    elemenetGetId('moreSearch').hidden = true;// hide more search engines menu
    elemenetGetId('searchEngine').src = 'imgs/google.png';// change search engine image to google
  }
  elemenetGetId('bing').onclick = function onBing(){
    chrome.storage.sync.set({'search':'bing'});
    elemenetGetId('moreSearch').hidden = true;
    elemenetGetId('searchEngine').src = 'imgs/bing-logo.png';// change search engine image to bing
  }
  elemenetGetId('baidu').onclick = function onBaidu(){
    chrome.storage.sync.set({'search':'baidu'});
    elemenetGetId('moreSearch').hidden = true;
    elemenetGetId('searchEngine').src = 'imgs/baidu.png';//change search engine image to baidu
  }
  elemenetGetId('ddg').onclick = function onBaidu(){
    chrome.storage.sync.set({'search':'ddg'});
    elemenetGetId('moreSearch').hidden = true;
    elemenetGetId('searchEngine').src = 'imgs/ddg.svg';
  }
  elemenetGetId('yandex').onclick = function onBaidu(){
    chrome.storage.sync.set({'search':'yandex'});
    elemenetGetId('moreSearch').hidden = true;
    elemenetGetId('searchEngine').src = 'imgs/yandex.png';
  }
  elemenetGetId('sougou').onclick = function onBaidu(){
    chrome.storage.sync.set({'search':'sougou'});
    elemenetGetId('moreSearch').hidden = true;
    elemenetGetId('searchEngine').src = 'imgs/sougou.png';
  }
}

function searchOnload(){
  chrome.storage.sync.get(['search'],function(budget){
    if(budget.search == 'google'){
      elemenetGetId('searchEngine').hidden = false;
      elemenetGetId('searchEngine').src = 'imgs/google.png';// change search engine image to google
    }else if(budget.search == 'bing'){
      elemenetGetId('searchEngine').hidden = false;
      elemenetGetId('searchEngine').src = 'imgs/bing-logo.png';// change search engine image to bing
    }else if(budget.search == 'ddg'){
      elemenetGetId('searchEngine').hidden = false;
      elemenetGetId('searchEngine').src = 'imgs/ddg.svg';
    }else if(budget.search == 'yandex'){
      elemenetGetId('searchEngine').hidden = false;
      elemenetGetId('searchEngine').src = 'imgs/yandex.png';
    }else if(budget.search == 'sougou'){
      elemenetGetId('searchEngine').hidden = false;
      elemenetGetId('searchEngine').src = 'imgs/sougou.png';
    }else{
      elemenetGetId('searchEngine').hidden = false;
      elemenetGetId('searchEngine').src = 'imgs/baidu.png';//change search engine image to baidu
    }
  })
}

function moreSearch(){
  function changeAn(an,button){
    if(elemenetGetId(an).className == 'otherFeatures'){
      elemenetGetId(an).className = 'otherFeaturesBefore';
      elemenetGetId(an).innerText = '隐藏';
      elemenetGetId(button).style.display = 'none';
    }else{
      elemenetGetId(an).className = 'otherFeatures';
      elemenetGetId(an).innerText = '显示';
      elemenetGetId(button).style.display = '';
    }
  }
  elemenetGetId('googleAn').onclick = function(){
    changeAn('googleAn','google');
    if(elemenetGetId('googleAn').className == 'otherFeaturesBefore'){
      chrome.storage.sync.set({'google':'hide'});
    }else{
      chrome.storage.sync.set({'google':'show'});
    }
  }
  elemenetGetId('bingAn').onclick = function(){
    changeAn('bingAn','bing');
    if(elemenetGetId('bingAn').className == 'otherFeaturesBefore'){
      chrome.storage.sync.set({'bing':'hide'});
    }else{
      chrome.storage.sync.set({'bing':'show'});
    }
  }
  elemenetGetId('baiduAn').onclick = function(){
    changeAn('baiduAn','baidu');
    if(elemenetGetId('baiduAn').className == 'otherFeaturesBefore'){
      chrome.storage.sync.set({'baidu':'hide'});
    }else{
      chrome.storage.sync.set({'baidu':'show'});
    }
  }
  elemenetGetId('ddgAn').onclick = function(){
    changeAn('ddgAn','ddg');
    if(elemenetGetId('ddgAn').className == 'otherFeaturesBefore'){
      chrome.storage.sync.set({'ddg':'hide'});
    }else{
      chrome.storage.sync.set({'ddg':'show'});
    }
  }
  elemenetGetId('yandexAn').onclick = function(){
    changeAn('yandexAn','yandex');
    if(elemenetGetId('yandexAn').className == 'otherFeaturesBefore'){
      chrome.storage.sync.set({'yandex':'hide'});
    }else{
      chrome.storage.sync.set({'yandex':'show'});
    }
  }
  elemenetGetId('sougouAn').onclick = function(){
    changeAn('sougouAn','sougou');
    if(elemenetGetId('sougouAn').className == 'otherFeaturesBefore'){
      chrome.storage.sync.set({'sougou':'hide'});
    }else{
      chrome.storage.sync.set({'sougou':'show'});
    }
  }
  chrome.storage.sync.get(['google','bing','baidu','ddg','yandex','sougou'],function(budget){
    let google = budget.google;
    let bing = budget.bing;
    let baidu = budget.baidu;
    let ddg = budget.ddg;
    let yandex = budget.yandex;
    let sougou = budget.sougou;
    function showLoadSearch(an,button){
      elemenetGetId(an).className = 'otherFeatures';
      elemenetGetId(an).innerText = '显示';
      elemenetGetId(button).style.display = '';
    }
    function hideLoadSearch(an,button){
      elemenetGetId(an).className = 'otherFeaturesBefore';
      elemenetGetId(an).innerText = '隐藏';
      elemenetGetId(button).style.display = 'none';
    }
    if(typeof(google) == 'undefined'){
      google = 'show';
    }
    if(typeof(bing) == 'undefined'){
      bing = 'show';
    }
    if(typeof(baidu) == 'undefined'){
      baidu = 'show';
    }
    if(typeof(ddg) == 'undefined'){
      ddg = 'hide';
    }
    if(typeof(yandex) == 'undefined'){
      yandex = 'hide';
    }
    if(typeof(sougou) == 'undefined'){
      sougou = 'hide';
    }
    if(google == 'show'){
      showLoadSearch('googleAn','google')
    }else if(google == 'hide'){
      hideLoadSearch('googleAn','google')
    }
    if(bing == 'show'){
      showLoadSearch('bingAn','bing')
    }else if(bing == 'hide'){
      hideLoadSearch('bingAn','bing')
    }
    if(baidu == 'show'){
      showLoadSearch('baiduAn','baidu')
    }else if(baidu == 'hide'){
      hideLoadSearch('baiduAn','baidu')
    }
    if(ddg == 'show'){
      showLoadSearch('ddgAn','ddg')
    }else if(ddg == 'hide'){
      hideLoadSearch('ddgAn','ddg')
    }
    if(yandex == 'show'){
      showLoadSearch('yandexAn','yandex')
    }else if(yandex == 'hide'){
      hideLoadSearch('yandexAn','yandex')
    }
    if(sougou == 'show'){
      showLoadSearch('sougouAn','sougou')
    }else if(sougou == 'hide'){
      hideLoadSearch('sougouAn','sougou')
    }
  })
}