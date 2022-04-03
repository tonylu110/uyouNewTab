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
