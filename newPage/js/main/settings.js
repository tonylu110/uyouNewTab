import { moreSearch } from '../features/search.js';
import { hsFeature } from '../features/hsFeature.js';
import { changeLink, useChangeLink } from '../features/changeLink.js';

export default function settingUse() {
    //other setting feature
    hsFeature(); //hide feature
    changeLink();//change link
    useChangeLink();//change link function
    moreSearch();//more search function
}
