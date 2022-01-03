var httpRequest = new XMLHttpRequest();
function getUpade(url){
    httpRequest.open('GET', url, true);
    httpRequest.overrideMimeType('application/xml');
    httpRequest.send();
            
    httpRequest.onreadystatechange = function () {
        var version = 11;
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var mainUpdate = httpRequest.responseXML;
            var json = mainUpdate.getElementById('mainUpdate').innerHTML;
            console.log(json);

            var obj = eval("(" + json + ")");

            document.getElementById('updateTitle').innerHTML = '有新版本';
            document.getElementById('updateVersion').innerHTML = '新版本：' + obj.codename;
            document.getElementById('updateMain').innerHTML = obj.updatemain;
            document.getElementById('updateLink').innerHTML = '下载链接：' + obj.link;

            if(version < obj.code){
                document.getElementById('update').hidden = false;
                chrome.browserAction.setBadgeText({"text":obj.codename});
                chrome.browserAction.setBadgeBackgroundColor({"color":[30, 194, 44, 255]});
            }
        }
    };
}