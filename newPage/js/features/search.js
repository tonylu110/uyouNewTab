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
      }else{
        window.open('https://cn.bing.com/search?q='+keywords,'_self'); //if engine is bing to bing search
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
}

function searchOnload(){
  chrome.storage.sync.get(['search'],function(budget){
    if(budget.search == 'google'){
      elemenetGetId('searchEngine').src = 'imgs/google.png';// change search engine image to google
    }else if(budget.search == 'bing'){
      elemenetGetId('searchEngine').src = 'imgs/bing-logo.png';// change search engine image to bing
    }else{
      elemenetGetId('searchEngine').src = 'imgs/baidu.png';//change search engine image to baidu
    }
  })
}