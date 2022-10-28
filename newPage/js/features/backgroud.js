import { elemenetGetId, clog } from "../main/function.js";

//backgroud setting
export function background() {
    var screenWidth = window.innerWidth;//get screen width
    var viewImg = elemenetGetId('viewImg');
    var fileName = elemenetGetId('fileName');
    var backgroundSetButton = elemenetGetId('backgroundSetButton');
    var onlinePicUrl = elemenetGetId('onlinePicUrl');
    var picError = elemenetGetId('picError');

    //get img from local
    elemenetGetId('backgroundUpload').onchange = function () {
        let file = this.files[0];
        let reader = new FileReader;
        elemenetGetId('exImg').style.display = 'none';
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            backgroundSetButton.hidden = false;
            viewImg.style.display = '';
            viewImg.hidden = false;
            viewImg.src = e.target.result;
            if (screenWidth <= 813) {
                viewImg.style.maxWidth = '130px'
            }
            fileName.innerText = file.name;
            var picUrl = e.target.result
            backgroundSetButton.onclick = function () {
                chrome.storage.local.set({ 'picUrl': picUrl });
                location.reload();
            }
        }
    }
    //get img from online
    elemenetGetId('review').onclick = function () {
        viewImg.src = onlinePicUrl.value
        viewImg.onerror = function () {
            picError.innerText = '请输入正确的图片链接'
            picError.hidden = false;
        }
        viewImg.onload = function () {
            elemenetGetId('exImg').style.display = 'none';
            picError.hidden = true;
            viewImg.style.display = '';
            viewImg.hidden = false;
            backgroundSetButton.hidden = false;
        }
        backgroundSetButton.onclick = function () {
            chrome.storage.local.set({ 'picUrl': onlinePicUrl.value });
            location.reload();
        }
    }
    //to default backgorund img
    elemenetGetId('backgroundBefore').onclick = function () {
        chrome.storage.local.set({ 'picUrl': '' });
        location.reload();
    }
}

//load background img in page
export function loadBackground() {
    var httpRequest = new XMLHttpRequest();
    function imgload(imgUrl) {
        var img = document.createElement('img')
        img.src = imgUrl
        img.onload = () => {
            elemenetGetId('background').style.display = ''
        }
    }
    function picget(url) {
        httpRequest.open('GET', url, true);
        httpRequest.send();
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                var obj = JSON.parse(httpRequest.responseText);
                var pic = obj.pic;

                elemenetGetId('picurl').className = pic;

                imgload(elemenetGetId('picurl').className)
            }
        };
    }
    chrome.storage.local.get(['picUrl'], function (budget) {
        var picUrl = budget.picUrl;
        var background = elemenetGetId('background');
        var down = elemenetGetId('down');
        var button = elemenetGetId('button');
        var picurl = elemenetGetId('picurl');
        var oneMain = elemenetGetId('oneMain');
        if (typeof (budget.picUrl) == 'undefined') {
            picUrl = '';
        }
        if (picUrl != '') {
            elemenetGetId('background').style.display = ''
            background.style.backgroundImage = 'url(' + budget.picUrl + ')';
            down.style.display = 'none';
        } else {
            elemenetGetId('backgroundBefore').hidden = true;
            elemenetGetId('backgroundSetButton').style.marginRight = '0px';
            //This is onload script
            //else load 'imgs/background.png'
            var screenWidth = window.innerWidth;
            if (screenWidth <= 813) {
                // elemenetGetId('picurl').className = 'https://dev.iw233.cn/api.php?sort=mp'
                picget("http://mark.tnyl.xyz/api/api.php?sort=mp&type=json")
                setTimeout(function () {
                    if (button.innerHTML != '') {
                        clog('network is working');
                        background.style.backgroundImage = "url(" + picurl.className + ")";
                        setTimeout(function () {
                            if (background.style.backgroundImage == 'url("")') {
                                background.style.backgroundImage = "url(" + picurl.className + ")";
                            }
                        }, 200)
                    } else {
                        clog('network is not working');
                        background.style.backgroundImage = "url('imgs/mobile/background - " + Math.ceil(Math.random() * 5) + ".jpg')";
                        button.innerHTML = '暂时没有有连接到可以访问互联网的网络哦~';
                        button.onclick = oneMain.style.display = 'none';
                        down.onclick = function () {
                            button.innerHTML = '本地图片无法下载哦~';
                            setTimeout(function () {
                                button.innerHTML = '暂时没有有连接到可以访问互联网的网络哦~';
                            }, 2500)
                        }
                    }
                }, 300)
                setTimeout(function () {
                    elemenetGetId('background').style.display = ''
                    if (picurl.className != '') {
                        if (background.style.backgroundImage == 'url("")') {
                            background.style.backgroundImage = "url(" + picurl.className + ")";
                        }
                    } else {
                        if (background.style.backgroundImage == 'url("")') {
                            background.style.backgroundImage = "url('imgs/mobile/background - " + Math.ceil(Math.random() * 5) + ".jpg')";
                            setTimeout(function () {
                                button.innerHTML = '在线图片加载失败，已加载内建图片哦~';
                            }, 500)
                            button.onclick = oneMain.style.display = 'none';
                            down.onclick = function () {
                                button.innerHTML = '本地图片无法下载哦~';
                                setTimeout(function () {
                                    button.innerHTML = '在线图片加载失败，已加载内建图片哦~';
                                }, 2500)
                            }
                        }
                    }
                }, 1000)
            } else {
                // elemenetGetId('picurl').className = 'https://dev.iw233.cn/api.php?sort=pc'
                picget("http://mark.tnyl.xyz/api/api.php?sort=pc&type=json")
                setTimeout(function () {
                    if (button.innerHTML != '') {
                        clog('network is working');
                        background.style.backgroundImage = "url(" + picurl.className + ")";
                        setTimeout(function () {
                            if (background.style.backgroundImage == 'url("")') {
                                background.style.backgroundImage = "url(" + picurl.className + ")";
                            }
                        }, 200)
                    } else {
                        clog('network is not working');
                        background.style.backgroundImage = "url('imgs/background - " + Math.ceil(Math.random() * 5) + ".jpg')";
                        button.innerHTML = '暂时没有有连接到可以访问互联网的网络哦~';
                        button.onclick = oneMain.style.display = 'none';
                        down.onclick = function () {
                            button.innerHTML = '本地图片无法下载哦~';
                            setTimeout(function () {
                                button.innerHTML = '暂时没有有连接到可以访问互联网的网络哦~';
                            }, 2500)
                        }
                    }
                }, 300)
                setTimeout(function () {
                    elemenetGetId('background').style.display = ''
                    if (picurl.className != '') {
                        if (background.style.backgroundImage == 'url("")') {
                            background.style.backgroundImage = "url(" + picurl.className + ")";
                        }
                    } else {
                        if (background.style.backgroundImage == 'url("")') {
                            background.style.backgroundImage = "url('imgs/background - " + Math.ceil(Math.random() * 5) + ".jpg')";
                            setTimeout(function () {
                                button.innerHTML = '在线图片加载失败，已加载内建图片哦~';
                            }, 500)
                            button.onclick = oneMain.style.display = 'none';
                            down.onclick = function () {
                                button.innerHTML = '本地图片无法下载哦~';
                                setTimeout(function () {
                                    button.innerHTML = '在线图片加载失败，已加载内建图片哦~';
                                }, 2500)
                            }
                        }
                    }
                }, 1000)
            }
        }
    })
}
