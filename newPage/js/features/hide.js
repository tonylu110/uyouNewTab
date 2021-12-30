function hideUse(){
    //This is show all element function
    function onShow(){
        elemenetGetId('mainlink').style.display=""; //show link element
        elemenetGetId('button').hidden = false; //show bottom button
        elemenetGetId('history').hidden = false; //show history button
        elemenetGetId('reload').hidden = false; //show reload button
        elemenetGetId('info').hidden = false; //show info button
        elemenetGetId('cal').hidden = false; // show calculator button
        elemenetGetId('hide').hidden = false; // show hide button
        elemenetGetId('searchbar').style.display=""; //show searchBar button
        elemenetGetId('clock').hidden = false; //show clock button
    }

    //This is hide all element function
    function onHide(){
        elemenetGetId("mainlink").style.display="none"; //hide link elemnet
        elemenetGetId('button').hidden = true; //hide bottom button
        elemenetGetId('history').hidden = true; //hide history button
        elemenetGetId('reload').hidden = true; //hide reload button
        elemenetGetId('info').hidden = true; //hide info button
        elemenetGetId('cal').hidden = true; //hide calculator button
        elemenetGetId('hide').hidden = true; //hide hide button
        elemenetGetId('searchbar').style.display="none"; //hide searchBar button
        elemenetGetId('clock').hidden = true; //hide clock button
    }

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
                elemenetGetId('hide').style.marginRight = '20px';
            }
        }
    }
}

function hs(){
    //This is show all element function
    function onShow(){
        elemenetGetId('mainlink').style.display=""; //show link element
        elemenetGetId('button').hidden = false; //show bottom button
        elemenetGetId('history').hidden = false; //show history button
        elemenetGetId('reload').hidden = false; //show reload button
        elemenetGetId('info').hidden = false; //show info button
        elemenetGetId('cal').hidden = false; // show calculator button
        elemenetGetId('hide').hidden = false; // show hide button
        elemenetGetId('searchbar').style.display=""; //show searchBar button
        elemenetGetId('clock').hidden = false; //show clock button
    }

    //This is hide all element function
    function onHide(){
        elemenetGetId("mainlink").style.display="none"; //hide link elemnet
        elemenetGetId('button').hidden = true; //hide bottom button
        elemenetGetId('history').hidden = true; //hide history button
        elemenetGetId('reload').hidden = true; //hide reload button
        elemenetGetId('info').hidden = true; //hide info button
        elemenetGetId('cal').hidden = true; //hide calculator button
        elemenetGetId('hide').hidden = true; //hide hide button
        elemenetGetId('searchbar').style.display="none"; //hide searchBar button
        elemenetGetId('clock').hidden = true; //hide clock button
    }
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
                elemenetGetId('hide').style.marginRight = '20px';
            }
        }
    })
}