window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    console.log('dark mode change，已' + (event.matches ? '进入' : '退出') + 'dark mode')
    if (event.matches) {
        dark();
    } else {
        light();
    }
})

function dark() {
    document.getElementsByTagName('html')[0].className = 'dark';
    elemenetGetId('hideImg').src = 'imgs/dark/hide.png';
    elemenetGetId('historyImg').src = 'imgs/dark/fy_ic_history.png';
    elemenetGetId('reloadImg').src = 'imgs/dark/reload.png';
    elemenetGetId('calImg').src = 'imgs/dark/calculator.png';
    elemenetGetId('clockImg').src = 'imgs/dark/timer.png';
    elemenetGetId('settingImg').src = 'imgs/dark/setting.png';
    elemenetGetId('downImg').src = 'imgs/dark/down.png';
    elemenetGetId('infoImg').src = 'imgs/dark/info.png';
    elemenetGetId('infoimgbefore').src = 'imgs/dark/back.png';
    elemenetGetId('imgbefore').src = 'imgs/dark/back.png';
    elemenetGetId('oneCloseImg').src = 'imgs/dark/close.png';
    elemenetGetId('settingCloseImg').src = 'imgs/dark/close.png';
    elemenetGetClass('feaImg')[0].src = 'imgs/dark/hide.png';
    elemenetGetClass('feaImg')[1].src = 'imgs/dark/fy_ic_history.png';
    elemenetGetClass('feaImg')[2].src = 'imgs/dark/reload.png';
    elemenetGetClass('feaImg')[3].src = 'imgs/dark/calculator.png';
    elemenetGetClass('feaImg')[4].src = 'imgs/dark/timer.png';
    elemenetGetClass('feaImg')[5].src = 'imgs/dark/down.png';
    elemenetGetClass('feaImg')[6].src = 'imgs/dark/info.png';
}

function light() {
    document.getElementsByTagName('html')[0].className = '';
    elemenetGetId('hideImg').src = 'imgs/hide.png';
    elemenetGetId('historyImg').src = 'imgs/fy_ic_history.png';
    elemenetGetId('reloadImg').src = 'imgs/reload.png';
    elemenetGetId('calImg').src = 'imgs/calculator.png';
    elemenetGetId('clockImg').src = 'imgs/timer.png';
    elemenetGetId('settingImg').src = 'imgs/setting.png';
    elemenetGetId('downImg').src = 'imgs/down.png';
    elemenetGetId('infoImg').src = 'imgs/info.png';
    elemenetGetId('infoimgbefore').src = 'imgs/back_black.png';
    elemenetGetId('imgbefore').src = 'imgs/back_black.png';
    elemenetGetId('oneCloseImg').src = 'imgs/close.png';
    elemenetGetId('settingCloseImg').src = 'imgs/close.png';
    elemenetGetClass('feaImg')[0].src = 'imgs/hide.png';
    elemenetGetClass('feaImg')[1].src = 'imgs/fy_ic_history.png';
    elemenetGetClass('feaImg')[2].src = 'imgs/reload.png';
    elemenetGetClass('feaImg')[3].src = 'imgs/calculator.png';
    elemenetGetClass('feaImg')[4].src = 'imgs/timer.png';
    elemenetGetClass('feaImg')[5].src = 'imgs/down.png';
    elemenetGetClass('feaImg')[6].src = 'imgs/info.png';
}

function loadTheme() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        dark();
    }
}