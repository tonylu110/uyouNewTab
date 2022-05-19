import settingMenus from '../features/settingMenu.js';
import otherFeatures from '../features/otherSetting.js';
import { moreSearch } from '../features/search.js';
import { hsFeature } from '../features/hsFeature.js';
import { hsLink } from '../features/hsLink.js';
import { changeLink, useChangeLink } from '../features/changeLink.js';
import { elemenetGetId, body, elemIdSty } from './function.js';
import { background, loaclImgChange, apiImg } from '../features/backgroud.js'

export default function settingUse() {
    var screenWidth = window.innerWidth;//get screen width
    //close setting main function
    function closeSttingMain() {
        // close setting main to change setting style
        elemIdSty('settingMain').transition = '0.5s';
        elemenetGetId('settingMain').className = 'settingMainBefore';
        elemIdSty('settingCloseButton').display = 'none';
        elemIdSty('backSettingMenu').display = 'none';
        elemIdSty('settingInnerMain').display = 'none';
        elemIdSty('settingMenu').display = 'none';
        elemIdSty('blackBack').zIndex = -1;
        elemIdSty('blackBack').backgroundColor = '#00000010';
        elemIdSty('viewImg').display = 'none';
        //to default backgorund setting
        elemenetGetId('fileName').innerText = '选择你的图片';
        elemenetGetId('backgroundSetButton').hidden = true;
        elemenetGetId('onlinePicUrl').value = '';
        elemenetGetId('picError').hidden = true;
        elemIdSty('exImg').display = '';
        //when you use mobile device to change setting close style
        if (screenWidth <= 813) {
            elemIdSty('backSettingMenus').display = 'none'
            elemIdSty('settingMenu').display = 'none';
            elemIdSty('settingMain').width = '0px';
            elemIdSty('settingMain').height = '0px';
            elemIdSty('settingMain').padding = '0px';
        }
    }
    elemenetGetId('settings').onclick = () => {
        //open setting main and change setting style
        elemenetGetId('settingMain').className = 'settingMain';
        elemIdSty('settingMain').transition = '0.5s';
        //use timeout to change setting style
        setTimeout(() => {
            if (screenWidth <= 813) {
                elemIdSty('settingInnerMain').display = 'none';
                elemIdSty('settingMenu').marginRight = '-20px';
            } else {
                elemIdSty('settingInnerMain').display = '';
            }
            elemIdSty('settingCloseButton').display = '';
            elemIdSty('settingMenu').display = '';
        }, 450)
        //black back style change
        elemIdSty('blackBack').zIndex = 150;
        elemIdSty('blackBack').backgroundColor = '#00000050';
        //when you use mobile device to change setting open style
        if (screenWidth <= 813) {
            elemIdSty('settingMain').width = '70%';
            elemIdSty('settingMain').height = '50%';
            elemIdSty('settingMain').padding = '40px';
            elemIdSty('settingMenu').display = 'none';
        }
        //if you click black back to close setting
        elemenetGetId('blackBack').addEventListener("click", () => {
            if (elemIdSty('changeLink').display == 'none' && elemIdSty('toast').display == "none") {
                closeSttingMain();
            }
        })

    }
    //close setting main
    elemenetGetId('settingCloseButton').onclick = () => {
        closeSttingMain();
    }

    //other setting feature
    background(); //setting background
    hsFeature(); //hide feature
    hsLink();//hide link
    changeLink();//change link
    useChangeLink();//change link function
    settingMenus();//setting menu function
    loaclImgChange();//use local img background
    otherFeatures();//other setting function
    moreSearch();//more search function
    apiImg();//use api img background
}