export default class changeLink extends HTMLElement {
  constructor() {
    super();
    this.render()
  }
  render() {
    this.id = 'changeLink'
    this.style = 'display: none;'
    this.innerHTML = `
    <div id="linkNum"></div>
    <div class="linkBtn" id="linkChangePadding"><img src="" id="linkImg" hidden></div>
    <div id="linkImgChange">
      <div id="linkImgName">选择你的图片</div>
      <input type="file" id="linkUpload" accept="image/*">
    </div>
    <div class="linkPadding">
      <div class="paddingButton" id="small">-</div>
      <div id="paddingNum">25</div>
      <div class="paddingButton" id="big">+</div>
    </div>
    <input type="text" placeholder="请输入链接" id="changeLinkInput" value="http://">
    <div id="useLink">确认</div>
    <div id="closeChangeLink">关闭</div>
    `
  }
}
