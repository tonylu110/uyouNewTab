export function menuStyle() {
  document.getElementById('backgroundSettings').style.backgroundColor = 'transparent';
  document.getElementById('festuresSettings').style.backgroundColor = 'transparent';
  document.getElementById('linkSettings').style.backgroundColor = 'transparent';
  document.getElementById('searchSettings').style.backgroundColor = 'transparent';
  document.getElementById('helpInfo').style.backgroundColor = 'transparent';
  document.getElementById('donateInfo').style.backgroundColor = 'transparent';
  document.getElementById('otherSettings').style.backgroundColor = 'transparent'
}
export function hideMenu() {
  document.getElementById('backgroundSetting').style.display = 'none';
  document.getElementById('festuresSetting').style.display = 'none';
  document.getElementById('linkSetting').style.display = 'none';
  document.getElementById('searchSetting').style.display = 'none';
  document.getElementById('helpMain').style.display = 'none';
  document.getElementById('donateMain').style.display = 'none';
  document.getElementById('otherSetting').style.display = 'none';
}
export function mobileUse(num, name) {
  const settingMainWidth = document.getElementById('settingMain').offsetWidth
  document.getElementById('settingMenu').style.display = 'none'
  document.getElementById('settingInnerMain').style = `
  display: ;
  margin-top: 20px;
  broder-radius: 8px;
  `
  document.getElementById('backSettingMenus').style.display = ''
  document.getElementById('settingMain').style = `
  padding-left: 20px;
  padding-right: 20px;
  width: ${ settingMainWidth - 42}px;
  transition: padding 0px;
  `
  document.getElementsByClassName('settingsInnerTitle')[num].style.display = 'none'
  document.getElementById('backSettingMenuName').innerText = name
  document.getElementById('backSettingMenu').style.display = ''
}
