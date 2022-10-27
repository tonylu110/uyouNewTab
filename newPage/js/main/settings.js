import otherFeatures from '../features/otherSetting.js';
import { moreSearch } from '../features/search.js';
import { hsFeature } from '../features/hsFeature.js';
import { hsLink } from '../features/hsLink.js';
import { changeLink, useChangeLink } from '../features/changeLink.js';
import { background, loaclImgChange, apiImg } from '../features/backgroud.js'

export default function settingUse() {
    //other setting feature
    background(); //setting background
    hsFeature(); //hide feature
    hsLink();//hide link
    changeLink();//change link
    useChangeLink();//change link function
    loaclImgChange();//use local img background
    otherFeatures();//other setting function
    moreSearch();//more search function
    apiImg();//use api img background
}
