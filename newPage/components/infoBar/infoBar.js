export default class infoBar extends HTMLElement {
  constructor() {
    super()
    this.render()
  }
  render() {
    this.className = 'bar'
    this.id = 'infoBar'
    this.innerHTML = `
    <div class="infoButton">
      <div class="infoBack" id="infoBack">
        <img id="infoimgbefore" src="imgs/back_black.png">
      </div>
    </div>
    <div class="infoMain">
      <div class="infoTitle">关于 uyou 新标签页</div>
      <img src="../extension.png" class="infoImg">
      <div class="infoTxt">
        在这个新标签页扩展的开源链接上我会提供非稳定版的更新，如果想要提前尝试新功能可以去这个项目上下载源码自行安装
      </div>
      <div class="infoTxt">
        <div>这个新标签页扩展来自于我的另一个前端项目，这个项目的开源地址为：</div>
        <a href="https://github.com/tonylu110/browserNewTabPage" target="view_window">点击前往</a>
        <div style="margin-top: 15px;">如果你感兴趣可以去这个项目上给我一个 star，此标签页扩展的开源地址为：</div>
        <a href="https://github.com/tonylu110/uyouNewTab" target="view_window">点击前往</a>
      </div>
      <div class="infoTxt">
        <div>我的 GitHub 地址：</div>
        <a href="https://github.com/tonylu110" target="view_window">点击前往</a>
        <div style="margin-top: 10px;">我的 酷安 账号：</div>
        <img src="imgs/coolapk.png">
        <a href="http://www.coolapk.com/u/1126752" target="view_window">点击前往</a>
        <div style="margin-top: 10px;">欢迎加群讨论：</div>
        <img src="imgs/qq.jpg">
        <a href="https://jq.qq.com/?_wv=1027&k=B8k42CI9" target="view_window">点击前往</a>
      </div>
    </div>
    `
  }
}