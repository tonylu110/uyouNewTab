import { moreSearch } from '../features/search.js';
import { hsFeature } from '../features/hsFeature.js';
import { hsLink } from '../features/hsLink.js';
import { changeLink, useChangeLink } from '../features/changeLink.js';

export default function settingUse() {
    //other setting feature
    hsFeature(); //hide feature
    hsLink();//hide link
    changeLink();//change link
    useChangeLink();//change link function
    moreSearch();//more search function
}
