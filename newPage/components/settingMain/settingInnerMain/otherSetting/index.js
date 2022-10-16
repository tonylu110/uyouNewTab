export default class otherSetting extends HTMLElement {
  constructor() {
    super()
    this.render()
  }
  render() {
    this.id = 'otherSetting'
    this.className = 'settingInnerTitle'
    this.style = 'display: none;'
    this.innerHTML = `
    <div class="settingsInnerTitle">
      其他设置
    </div>
    <div class="otherBtn">
      <div class="otherName">加载动画</div>
      <div class="otherFeaturesBefore" id="loadingAn">隐藏</div>
    </div>
    <div class="loadingTimeBtn" id="loadingTimeBtn" style="display: none;">
      <div class="loadingTimeTitle">加载动画时间设置</div>
      <div class="nowTime">
        当前的加载时间为：<div id="newTimeout"></div>ms
      </div>
      <div class="loadingTimeSetting">
        <input type="text" id="loadingTimeNum" placeholder="注：单位为毫秒">
        <div class="ms">ms</div>
        <div class="otherFeatures" id="setLoadingTime">设置时间</div>
      </div>
    </div>
    <div class="otherBtn">
      <div class="otherName" id="colorMode">颜色模式</div>
      <div class="setDl">
        <div class="otherFeatures" id="reDlAn">跟随系统</div>
        <div class="otherFeaturesBefore" id="dlAn">亮色</div>
      </div>
    </div>
    <div class="otherBtn blackBackShowBack" style="display: none;">
      <div class="dlMore" style="margin-bottom: 10px;">
        <div class="otherName" id="colorMode">是否显示暗色壁纸遮罩</div>
        <div class="otherFeatures" id="blackBackShow">显示</div>
      </div>
      <div id="backAlpha">当前背景暗色遮罩深度为：</div>
      <div class="dlMore">
        <input type="text" placeholder="请输入暗色遮罩程度：00-FF" id="blackBackColor">
        <div class="otherFeatures" id="setBackAlpha">确定</div>
      </div>
    </div>
    `
  }
}