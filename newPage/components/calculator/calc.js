import { evalRpn, dal2Rpn } from "./cal.js"
import click from "./click.js"
import Observer from "../../js/main/reactivity.js"

export default class mainCalc extends HTMLElement {
  constructor() {
    super()
    this._data = {
      result: ''
    }
    this.render()
    click()
    Observer(this._data, '#card')
  }
  render() {
    this.className = 'mainCal'
    this.id = 'mainCal'
    this.hidden = true
    this.innerHTML = `
    <form class="card" name="cal" action="" id="card"><!--calculator card-->
      <input type="text" class="value" id="txt" readonly="readonly" data-bind="result"/>
      <span class="clear" id="clear" style="margin-left: 10px;">c</span>
      <span class="num" id="/">/</span>
      <span class="num" id="*" style="margin-right: 10px;">*</span>
      <span class="num" id="7" style="margin-left: 10px;">7</span>
      <span class="num" id="8">8</span>
      <span class="num" id="9">9</span>
      <span class="num" id="-">-</span>
      <span class="num" id="4" style="margin-left: 10px;">4</span>
      <span class="num" id="5">5</span>
      <span class="num" id="6">6</span>
      <span class="num" id="+">+</span>
      <span class="num" id="1" style="margin-left: 10px;">1</span>
      <span class="num" id="2">2</span>
      <span class="num" id="3">3</span>
      <span class="num" id="0">0</span>
      <span class="num" id="00" style="margin-left: 10px;">00</span>
      <span class="num" id=".">.</span>
      <span class="result" id="result">=</span>
    </form>
    `
    document.getElementById('result').onclick = () => {
      this.result()
    }
  }
  result() {
    this._data.result = evalRpn(dal2Rpn(document.cal.txt.value));
  }
}