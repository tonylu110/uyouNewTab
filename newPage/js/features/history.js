import { elemenetGetId } from "../main/function.js";

export default function historyUse() {
    var microsecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
    var oneWeekAgo = (new Date).getTime() - microsecondsPerWeek;
    var query = {
        "text": "",
        'startTime': oneWeekAgo,
        'maxResults': 50
    };
    chrome.history.search(query, (results) => {
        for (var i = 0; i < results.length; i++) {
            var title = results[i].title;
            var link = results[i].url;
            /**
             * create element like this:
             *  <div class="historyInfo">
                    <div class="historyTitle">title</div>
                    <div class="historyLink">link</div>
                </div>
             */
            let historyInfo = document.createElement('div');
            let historyTitle = document.createElement('div');
            let historyLink = document.createElement('div');
            historyInfo.className = 'historyInfo';
            historyTitle.className = 'historyTitle';
            historyTitle.innerText = title;
            historyLink.className = 'historyLink';
            historyLink.innerText = link;
            historyInfo.appendChild(historyTitle);
            historyInfo.appendChild(historyLink);
            elemenetGetId('historyIn').appendChild(historyInfo);
            // open history link in new tab
            historyInfo.onclick = () => {
                chrome.tabs.create({
                    url: historyLink.innerText
                })
            }
        }
    });
}