import { elemenetGetId, body } from "../main/function.js";

export function background() {
    var screenWidth = body().offsetWidth;//get screen width
    var viewImg = elemenetGetId('viewImg');
    var fileName = elemenetGetId('fileName');
    var backgroundSetButton = elemenetGetId('backgroundSetButton');
    var onlinePicUrl = elemenetGetId('onlinePicUrl');
    var picError = elemenetGetId('picError');
    
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
    elemenetGetId('backgroundBefore').onclick = function () {
        chrome.storage.local.set({ 'picUrl': '' });
        location.reload();
    }
}

export function loaclImgChange() {
    elemenetGetId('background0').onclick = function () {
        chrome.storage.local.set({ 'picUrl': "'imgs/background - 0.jpg'" });
        elemenetGetId('background').style.backgroundImage = 'url("imgs/background - 0.jpg")';
    }
    elemenetGetId('background1').onclick = function () {
        chrome.storage.local.set({ 'picUrl': "'imgs/background - 1.jpg'" });
        elemenetGetId('background').style.backgroundImage = 'url("imgs/background - 1.jpg")';
    }
    elemenetGetId('background2').onclick = function () {
        chrome.storage.local.set({ 'picUrl': "'imgs/background - 2.jpg'" });
        elemenetGetId('background').style.backgroundImage = 'url("imgs/background - 2.jpg")';
    }
    elemenetGetId('background3').onclick = function () {
        chrome.storage.local.set({ 'picUrl': "'imgs/background - 3.jpg'" });
        elemenetGetId('background').style.backgroundImage = 'url("imgs/background - 3.jpg")';
    }
    elemenetGetId('background4').onclick = function () {
        chrome.storage.local.set({ 'picUrl': "'imgs/background - 4.jpg'" });
        elemenetGetId('background').style.backgroundImage = 'url("imgs/background - 4.jpg")';
    }
    elemenetGetId('background5').onclick = function () {
        chrome.storage.local.set({ 'picUrl': "'imgs/background - 5.jpg'" });
        elemenetGetId('background').style.backgroundImage = 'url("imgs/background - 5.jpg")';
    }
    elemenetGetId('mbackground1').onclick = function () {
        chrome.storage.local.set({ 'picUrl': "'imgs/mobile/background - 1.jpg'" });
        elemenetGetId('background').style.backgroundImage = 'url("imgs/mobile/background - 1.jpg")';
    }
    elemenetGetId('mbackground2').onclick = function () {
        chrome.storage.local.set({ 'picUrl': "'imgs/mobile/background - 2.jpg'" });
        elemenetGetId('background').style.backgroundImage = 'url("imgs/mobile/background - 2.jpg")';
    }
    elemenetGetId('mbackground3').onclick = function () {
        chrome.storage.local.set({ 'picUrl': "'imgs/mobile/background - 3.jpg'" });
        elemenetGetId('background').style.backgroundImage = 'url("imgs/mobile/background - 3.jpg")';
    }
    elemenetGetId('mbackground4').onclick = function () {
        chrome.storage.local.set({ 'picUrl': "'imgs/mobile/background - 4.jpg'" });
        elemenetGetId('background').style.backgroundImage = 'url("imgs/mobile/background - 4.jpg")';
    }
    elemenetGetId('mbackground5').onclick = function () {
        chrome.storage.local.set({ 'picUrl': "'imgs/mobile/background - 5.jpg'" });
        elemenetGetId('background').style.backgroundImage = 'url("imgs/mobile/background - 5.jpg")';
    }
}

export function apiImg() {
    elemenetGetId('bingImg').onclick = function () {
        chrome.storage.local.set({ 'picUrl': "https://api.dujin.org/bing/1920.php" });
        elemenetGetId('background').style.backgroundImage = 'url("https://api.dujin.org/bing/1920.php")';
    }
    elemenetGetId('cwImg').onclick = function () {
        chrome.storage.local.set({ 'picUrl': "https://img.paulzzh.com/touhou/random" });
        elemenetGetId('background').style.backgroundImage = 'url("https://img.paulzzh.com/touhou/random")';
    }
    elemenetGetId('bingImgMobile').onclick = function () {
        chrome.storage.local.set({ 'picUrl': "https://api.dujin.org/bing/m.php" });
        elemenetGetId('background').style.backgroundImage = 'url("https://api.dujin.org/bing/m.php")';
    }
    elemenetGetId('cwImgMobile').onclick = function () {
        chrome.storage.local.set({ 'picUrl': "https://img.paulzzh.com/touhou/random?size=wap" });
        elemenetGetId('background').style.backgroundImage = 'url("https://img.paulzzh.com/touhou/random?size=wap")';
    }
}