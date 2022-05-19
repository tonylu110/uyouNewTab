import { elemenetGetId, body, onShow, onHide } from '../main/function.js';

export default function hideUse() {
    //This is hide all element function
    //if bottemButton is hide all element will hide
    //else show all element
    elemenetGetId('hide').onclick = function onHideOrShow() {
        var screenWidth = window.innerWidth;
        var hideButton = elemenetGetId('button').hidden;
        var hide = elemenetGetId('hide');
        var info = elemenetGetId('info');
        if (hideButton == false) {
            chrome.storage.local.set({ 'hs': 'show' });
            onHide();
            hide.hidden = false; //show hide button
            chrome.storage.sync.get(['seaBarHS'], (budget) => {
                var seaBarHS = budget.seaBarHS;
                if (typeof (seaBarHS) == 'undefined') {
                    seaBarHS = 'show';
                }
                if (seaBarHS == 'show') {
                    elemenetGetId('searchbar').style.display = ""; //show searchBar element
                }
            })
            if (screenWidth <= 813) {
                hide.style.marginRight = '0px';
                info.hidden = true; //hide info button
            }
        } else {
            onShow();
            chrome.storage.local.set({ 'hs': 'hide' });
            if (screenWidth <= 813) {
                elemenetGetId('history').hidden = true; //hide history button
                elemenetGetId('clock').hidden = true; //hide clock button
                info.hidden = false; //hide info button
                // hide.style.marginRight = '20px';
            }
        }
    }
}