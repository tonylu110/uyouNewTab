export default class links extends HTMLElement {
  constructor() {
    super()
    this.render()
  } 
  render() {
    this.className = 'link'
    this.id = 'mainlink'
    this.innerHTML = `
    <a href="https://google.com" id="link1" style="display: none;"><div id="link1Padding"><img src="imgs/google.png" id="link1Img" hidden></div></a><!--google link-->
    <a href="https://youtube.com" id="link2" style="display: none;"><div id="link2Padding"><img src="imgs/youtube.png" id="link2Img" hidden></div></a><!--youtube link-->
    <a href="https://bing.com" id="link3" style="display: none;"><div style="padding: 15px; width: 70px; height: 70px;" id="link3Padding"><img src="imgs/bing-logo.png" id="link3Img" hidden></div></a><!--bing link-->
    <a href="https://baidu.com" id="link4" style="display: none;"><div style="padding: 20px; height: 60px; width: 60px;" id="link4Padding"><img src="imgs/baidu.png" id="link4Img" hidden></div></a><!--baidu link-->
    <a href="https://bilibili.com" id="link5" style="display: none;"><div style="padding: 15px; width: 70px; height: 70px;" id="link5Padding"><img src="imgs/icon_bilibili-circle.png" id="link5Img" hidden></div></a><!--bilibili link-->
    <a href="https://ithome.com" id="ithome" style="display: none;"><div style="padding: 10px; width: 80px; height: 80px;" id="link6Padding"><img src="imgs/IThome.png" id="link6Img" hidden></div></a><!--ithome link-->
    <a href="https://chrome.google.com/webstore/category/extensions" id="chromeStore" style="display: none;"><div id="link7Padding"><img src="imgs/Chrome_Web_Store_logo_2012-2015.svg.png" id="link7Img" hidden></div></a><!--chrome web store link-->
    <a href="https://www.aliyun.com/" id="aliyun" style="display: none;"><div style="padding: 20px; height: 60px; width: 60px;" id="link8Padding"><img src="imgs/aliyun.png" id="link8Img" hidden></div></a><!--aliyun link-->
    <a href="https://azure.microsoft.com/zh-cn/" id="azure" style="display: none;"><div id="link9Padding"><img src="imgs/azure-blue.png" id="link9Img" hidden></div></a><!--azure link-->
    <a href="https://github.com" id="link10" style="display: none;"><div id="link10Padding"><img src="imgs/GitHub.png" id="link10Img" hidden></div></a><!--github link-->
    `
  }
}