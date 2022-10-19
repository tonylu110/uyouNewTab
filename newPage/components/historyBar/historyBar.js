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
      results.forEach(item => {
        const historyInfo = document.createElement('div');
        const historyTitle = document.createElement('div');
        const historyLink = document.createElement('div');
        historyInfo.className = 'historyInfo';
        historyTitle.className = 'historyTitle';
        historyTitle.innerText = item.title;
        historyLink.className = 'historyLink';
        historyLink.innerText = item.url;
        historyInfo.appendChild(historyTitle);
        historyInfo.appendChild(historyLink);
        document.getElementById('historyIn').appendChild(historyInfo);
        // open history link in new tab
        historyInfo.addEventListener('click', () => {
          chrome.tabs.create({
            url: historyLink.innerText
          })
        })
      })
    });
  }
}
