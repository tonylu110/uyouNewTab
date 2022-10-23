import isMobile from "../../util/isMobile.js";

export default function () {
  document.getElementById('settingMain').style.transition = '0.5s'
  document.getElementById('settingMain').className = 'settingMainBefore'
  document.getElementById('settingCloseButton').style.display = 'none'
  document.getElementById('backSettingMenu').style.display = 'none'
  document.getElementById('settingInnerMain').style.display = 'none'
  document.getElementById('settingMenu').style.display = 'none'
  document.getElementById('blackBack').style = `
    z-index: -1;
    background-color: #00000010;
    `
  document.getElementById('viewImg').style.display = 'none'
  document.getElementById('fileName').innerText = '选择你的图片'
  document.getElementById('backgroundSetButton').hidden = true
  document.getElementById('onlinePicUrl').value = ''
  document.getElementById('picError').hidden = true
  document.getElementById('exImg').style.display = 'none'
  if (isMobile()) {
    document.getElementById('backSettingMenus').style.display = 'none'
    document.getElementById('settingMenu').style.display = 'none'
    document.getElementById('settingMain').style = `
      width: 0px;
      height: 0px;
      padding: 0px;
      `
  }
}
