function hideUse(){
    //This is hide all element function
    //if bottemButton is hide all element will hide
    //else show all element
    elemenetGetId('hide').onclick = function onHideOrShow(){
        var screenWidth = body().offsetWidth;
        var hide = elemenetGetId('button').hidden;
        if(hide == false){ 
            chrome.storage.sync.set({'hs':'show'});
            onHide();
            elemenetGetId('hide').hidden = false; //show hide button
            elemenetGetId('searchbar').style.display=""; //show searchBar element
            if(screenWidth <= 813){
                elemenetGetId('hide').style.marginRight = '0px';
            }
        }else{
            onShow();
            chrome.storage.sync.set({'hs':'hide'});
            if(screenWidth <= 813){
                elemenetGetId('history').hidden = true; //hide history button
                elemenetGetId('clock').hidden = true; //hide clock button
                elemenetGetId('info').hidden = true; //hide info button
                elemenetGetId('hide').style.marginRight = '20px';
            }
        }
    }
}

function hs(){
    var screenWidth = body().offsetWidth;
    chrome.storage.sync.get(['hs'],function(budget){
        if(budget.hs == 'show'){
            onHide();
            elemenetGetId('hide').hidden = false; //show hide button
            elemenetGetId('searchbar').style.display=""; //show searchBar element
            if(screenWidth <= 813){
                elemenetGetId('hide').style.marginRight = '0px';
            }
        }else{
            onShow();
            if(screenWidth <= 813){
                elemenetGetId('history').hidden = true; //hide history button
                elemenetGetId('clock').hidden = true; //hide clock button
                lemenetGetId('info').hidden = true; //hide info button
                elemenetGetId('hide').style.marginRight = '20px';
            }
        }
    })
}