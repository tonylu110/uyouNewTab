var httpRequest = new XMLHttpRequest();
function getUpade(url){
    httpRequest.open('GET', url, true);
    httpRequest.overrideMimeType('application/xml');
    httpRequest.send();
            
    httpRequest.onreadystatechange = function () {
        var version = 21;
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var mainUpdate = httpRequest.responseXML;
            var json = mainUpdate.getElementById('mainUpdate').innerHTML;
            console.log(json);

            var obj = eval("(" + json + ")");

            if(version < obj.code){
                chrome.browserAction.setBadgeText({"text":obj.codename});
                chrome.browserAction.setBadgeBackgroundColor({"color":[30, 194, 44, 255]});
            }
        }
    };
}

window.onload = function (){
    var url = 'http://crx.tnyl.xyz/';
    getUpade(url);
}