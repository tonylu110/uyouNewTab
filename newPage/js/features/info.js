function infoUse(){
    elemenetGetId('info').onclick = function onBarButton(){
        elemenetGetId('infoBar').className = 'barSel'; 
        elemenetGetId('infoimgbefore').className = 'infoimgafter'; 
    }
    elemenetGetId('infoBack').onclick = function onBarButtonBack(){
        elemenetGetId('infoBar').className = 'bar'; 
        elemenetGetId('infoimgbefore').className = 'infoimgbefore'; 
    }
}