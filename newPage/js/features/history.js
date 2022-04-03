import { elemenetGetId, elemenetGetClass } from "../main/function.js";

export default function historyUse() {
    var microsecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
    var oneWeekAgo = (new Date).getTime() - microsecondsPerWeek;
    var query = {
        "text": "",
        'startTime': oneWeekAgo,
        'maxResults': 50
    };
    chrome.history.search(query, function (results) {
        for (i = 0; i < results.length; i++) {
            var title = results[i].title;
            var link = results[i].url;
            var html = '<div class="historyInfo"><div class="historyTitle">' + title + '</div>' + '<div id="historyLink' + i + '" class="historyLink">' + link + '</div></div>';
            elemenetGetId('historyIn').innerHTML += html;
        }
        var historyInfo = elemenetGetClass('historyInfo');
        for (var i = 0; i < historyInfo.length; i++) {
            historyInfo[i].index = i;
            historyInfo[i].link = elemenetGetId('historyLink' + i).innerHTML;
            historyInfo[i].onclick = function () {
                chrome.tabs.create({
                    url: this.link
                });
            }
        }
    });
}