import { elemenetGetId } from "../main/function.js";

export function hsLinkUse() {
    chrome.storage.local.get(['link1HS', 'link2HS', 'link3HS', 'link4HS', 'link5HS', 'link6HS', 'link7HS', 'link8HS', 'link9HS', 'link10HS'], function (budget) {
        let link1HS = budget.link1HS;
        let link2HS = budget.link2HS;
        let link3HS = budget.link3HS;
        let link4HS = budget.link4HS;
        let link5HS = budget.link5HS;
        let link6HS = budget.link6HS;
        let link7HS = budget.link7HS;
        let link8HS = budget.link8HS;
        let link9HS = budget.link9HS;
        let link10HS = budget.link10HS;
        if (link1HS == 'hide') {
            elemenetGetId('link1HS').className = 'hsFeatureHide';
            elemenetGetId('link1HS').innerText = '隐藏';
            elemenetGetId('link1').style.display = 'none';
        } else {
            elemenetGetId('link1').style.display = '';
        }
        if (link2HS == 'hide') {
            elemenetGetId('link2HS').className = 'hsFeatureHide';
            elemenetGetId('link2HS').innerText = '隐藏';
            elemenetGetId('link2').style.display = 'none';
        } else {
            elemenetGetId('link2').style.display = '';
        }
        if (link3HS == 'hide') {
            elemenetGetId('link3HS').className = 'hsFeatureHide';
            elemenetGetId('link3HS').innerText = '隐藏';
            elemenetGetId('link3').style.display = 'none';
        } else {
            elemenetGetId('link3').style.display = '';
        }
        if (link4HS == 'hide') {
            elemenetGetId('link4HS').className = 'hsFeatureHide';
            elemenetGetId('link4HS').innerText = '隐藏';
            elemenetGetId('link4').style.display = 'none';
        } else {
            elemenetGetId('link4').style.display = '';
        }
        if (link5HS == 'hide') {
            elemenetGetId('link5HS').className = 'hsFeatureHide';
            elemenetGetId('link5HS').innerText = '隐藏';
            elemenetGetId('link5').style.display = 'none';
        } else {
            elemenetGetId('link5').style.display = '';
        }
        if (link6HS == 'hide') {
            elemenetGetId('link6HS').className = 'hsFeatureHide';
            elemenetGetId('link6HS').innerText = '隐藏';
            elemenetGetId('ithome').style.display = 'none';
        } else {
            elemenetGetId('ithome').style.display = '';
        }
        if (link7HS == 'hide') {
            elemenetGetId('link7HS').className = 'hsFeatureHide';
            elemenetGetId('link7HS').innerText = '隐藏';
            elemenetGetId('chromeStore').style.display = 'none';
        } else {
            elemenetGetId('chromeStore').style.display = '';
        }
        if (link8HS == 'hide') {
            elemenetGetId('link8HS').className = 'hsFeatureHide';
            elemenetGetId('link8HS').innerText = '隐藏';
            elemenetGetId('aliyun').style.display = 'none';
        } else {
            elemenetGetId('aliyun').style.display = '';
        }
        if (link9HS == 'hide') {
            elemenetGetId('link9HS').className = 'hsFeatureHide';
            elemenetGetId('link9HS').innerText = '隐藏';
            elemenetGetId('azure').style.display = 'none';
        } else {
            elemenetGetId('azure').style.display = '';
        }
        if (link10HS == 'hide') {
            elemenetGetId('link10HS').className = 'hsFeatureHide';
            elemenetGetId('link10HS').innerText = '隐藏';
            elemenetGetId('link10').style.display = 'none';
        } else {
            elemenetGetId('link10').style.display = '';
        }
    })
}
