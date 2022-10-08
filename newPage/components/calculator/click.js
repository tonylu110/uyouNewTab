import { elemenetGetId } from '../../js/main/function.js'

export default function click() {
  elemenetGetId('clear').onclick = function () {
    document.cal.txt.value = '';
  }

  elemenetGetId('/').onclick = function () {
    document.cal.txt.value += '/';
  }

  elemenetGetId('*').onclick = function () {
    document.cal.txt.value += '*';
  }

  elemenetGetId('7').onclick = function () {
    document.cal.txt.value += '7';
  }

  elemenetGetId('8').onclick = function () {
    document.cal.txt.value += '8';
  }

  elemenetGetId('9').onclick = function () {
    document.cal.txt.value += '9';
  }

  elemenetGetId('-').onclick = function () {
    document.cal.txt.value += '-';
  }

  elemenetGetId('4').onclick = function () {
    document.cal.txt.value += '4';
  }

  elemenetGetId('5').onclick = function () {
    document.cal.txt.value += '5';
  }

  elemenetGetId('6').onclick = function () {
    document.cal.txt.value += '6';
  }

  elemenetGetId('+').onclick = function () {
    document.cal.txt.value += '+';
  }

  elemenetGetId('1').onclick = function () {
    document.cal.txt.value += '1';
  }

  elemenetGetId('2').onclick = function () {
    document.cal.txt.value += '2';
  }

  elemenetGetId('3').onclick = function () {
    document.cal.txt.value += '3';
  }

  elemenetGetId('0').onclick = function () {
    document.cal.txt.value += '0';
  }

  elemenetGetId('00').onclick = function () {
    document.cal.txt.value += '00';
  }

  elemenetGetId('.').onclick = function () {
    document.cal.txt.value += '.';
  }
}