window.onload = function (){
    document.getElementById('home').onclick = function(){
        chrome.tabs.create({
            url: 'chrome://newtab'
        });
    }

    var url = 'http://crx.tnyl.xyz/';
    getUpade(url)

    document.getElementById('update').onclick = function(){
        chrome.tabs.create({
            url: document.getElementById('updateLink').innerHTML.slice(5)
        });
    }
}