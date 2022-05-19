import { elemenetGetId, body } from "../main/function.js";

export default function infoUse() {
    elemenetGetId('info').onclick = function onBarButton() {
        var screenWidth = window.innerWidth;//get screen width
        if (screenWidth <= 813) {
            elemenetGetId('infoBar').className = 'barSelMobile';
            elemenetGetId('infoimgbefore').className = 'infoimgafter';
        } else {
            elemenetGetId('infoBar').className = 'barSel';
            elemenetGetId('infoimgbefore').className = 'infoimgafter';
        }
        elemenetGetId('click').onclick = function () {
            elemenetGetId('infoBar').className = 'bar';
            elemenetGetId('infoimgbefore').className = 'infoimgbefore';
        }
    }
    elemenetGetId('infoBack').onclick = function onBarButtonBack() {
        elemenetGetId('infoBar').className = 'bar';
        elemenetGetId('infoimgbefore').className = 'infoimgbefore';
    }
}