import isMobile from "../../util/isMobile.js";

export default function () {
  document.getElementById('blackBack').style = `
    z-index: -1;
    background-color: #00000010;
    `
  if (isMobile()) {
    document.getElementById('oneMain').style = `
      width: 0px;
      height: 0px;
      padding: 0px;
      margin-bottom: 20vh;
      `
    document.getElementById('oneMain').className = 'oneMainBeforeMobile'
  } else {
    document.getElementById('oneMain').className = 'oneMainBefore'
  }
  document.getElementById('closeButton').style = `
    width: 0px;
    height: 0px;
    padding: 0px;
    `
  document.getElementById('oneNum').style.fontSize = '0px'
  document.getElementById('oneTxt').style.fontSize = '0px'
  document.getElementById('oneFrom').style.fontSize = '0px'
  document.getElementById('oneNum').style.transition = '0s'
  document.getElementById('oneTxt').style.transition = '0s'
  document.getElementById('oneFrom').style.transition = '0s'
  setTimeout(() => {
    document.getElementById('oneNum').style.color = 'transparent'
    document.getElementById('oneTxt').style.color = 'transparent'
    document.getElementById('oneFrom').style.color = 'transparent'
  }, 502)
  setTimeout(() => {
    document.getElementById('oneNum').style.transition = '0.5s'
    document.getElementById('oneTxt').style.transition = '0.5s'
    document.getElementById('oneFrom').style.transition = '0.5s'
  }, 1000)
}
