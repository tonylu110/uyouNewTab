export default class historyBar extends HTMLElement {
  constructor() {
    super()
    this.microsecondsPerWeek = 1000 * 60 * 60 * 24 * 7
    this.oneWeekAgo = (new Date).getTime() - this.microsecondsPerWeek
    this.query = {
      "text": "",
      'startTime': this.oneWeekAgo,
      'maxResults': 50
    }
    this.render()
    this.init()
  }
  render() {
    this.className = 'bar'
    this.id = 'bar'
    this.innerHTML = `
    <div class="historyButton">
      <div class="historyback" id="historyback">
        <img id="imgbefore" src="imgs/back_black.png">
      </div>
    </div>
    <div id="historyIn"></div>
    `
  }
  init() {
    chrome.history.search(this.query, (results) => {
      for (let i = 0; i < results.length; i++) {
        let title = results[i].title;
        let link = results[i].url;
        /**
         * create element like this:
         *  <div class="historyInfo">
         <div class="historyTitle">title</div>
         <div class="historyLink">link</div>
         </div>
         */
        const historyInfo = document.createElement('div');
        const historyTitle = document.createElement('div');
        const historyLink = document.createElement('div');
        historyInfo.className = 'historyInfo';
        historyTitle.className = 'historyTitle';
        historyTitle.innerText = title;
        historyLink.className = 'historyLink';
        historyLink.innerText = link;
        historyInfo.appendChild(historyTitle);
        historyInfo.appendChild(historyLink);
        document.getElementById('historyIn').appendChild(historyInfo);
        // open history link in new tab
        historyInfo.onclick = () => {
          chrome.tabs.create({
            url: historyLink.innerText
          })
        }
      }
    });
  }
}
