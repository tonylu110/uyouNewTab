window.onload = function (){
    document.getElementById('home').onclick = function(){
        chrome.tabs.create({
            url: 'chrome://newtab'
        });
    }
    document.getElementById('web').onclick = function(){
        chrome.tabs.create({
            url: 'https://newtab.uyou.org.cn/'
        });
    }
    if(/Mobi|Android|iPhone/i.test(navigator.userAgent)){
        document.getElementById('body').style.width = '100vw';
    }
}