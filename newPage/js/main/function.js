//set function
export function elemenetGetId(id) {
    return document.getElementById(id);
}
export function elemIdSty(id) {
    return document.getElementById(id).style;
}
export function elemenetGetClass(name) {
    return document.getElementsByClassName(name);
}
export function elemClassSty(name, num) {
    return document.getElementsByClassName(name)[num].style;
}
export function body() {
    return document.body;
}
export function clog(str) {
    return console.log(str);
}

//This is show all element function
export function onShow() {
    elemenetGetId('mainlink').style.display = ""; //show link element
    elemenetGetId('button').hidden = false; //show bottom button
    elemenetGetId('history').hidden = false; //show history button
    elemenetGetId('reload').hidden = false; //show reload button
    elemenetGetId('info').hidden = false; //show info button
    elemenetGetId('cal').hidden = false; // show calculator button
    elemenetGetId('hide').hidden = false; // show hide button
    elemenetGetId('searchbar').style.display = ""; //show searchBar button
    elemenetGetId('clock').hidden = false; //show clock button
    elemenetGetId('down').hidden = false;
    elemenetGetId('settings').hidden = false;
    elemenetGetId('weather').style.display = '';
  }
  
  //This is hide all element function
  export function onHide() {
    elemenetGetId("mainlink").style.display = "none"; //hide link elemnet
    elemenetGetId('button').hidden = true; //hide bottom button
    elemenetGetId('history').hidden = true; //hide history button
    elemenetGetId('reload').hidden = true; //hide reload button
    elemenetGetId('info').hidden = true; //hide info button
    elemenetGetId('cal').hidden = true; //hide calculator button
    elemenetGetId('hide').hidden = true; //hide hide button
    elemenetGetId('searchbar').style.display = "none"; //hide searchBar button
    elemenetGetId('clock').hidden = true; //hide clock button
    elemenetGetId('down').hidden = true;
    elemenetGetId('settings').hidden = true;
    elemenetGetId('weather').style.display = 'none';
  }