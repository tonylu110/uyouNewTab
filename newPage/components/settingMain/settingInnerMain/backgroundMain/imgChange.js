export function loaclImgChange() {
  for (let i = 0; i <= 5; i++) {
    document.getElementById(`background${i}`).addEventListener("click", () => {
      chrome.storage.local.set({ 'picUrl': `'imgs/background - ${i}.jpg'` })
      document.getElementById('background').style.backgroundImage = `url("imgs/background - ${i}.jpg")`
    })
  }
  for (let i = 1; i <= 5; i++) {
    document.getElementById(`mbackground${i}`).addEventListener("click", () => {
      chrome.storage.local.set({ 'picUrl': `'imgs/mobile/background - ${i}.jpg'` })
      document.getElementById('background').style.backgroundImage = `url("imgs/background - ${i}.jpg")`
    })
  }
}

export function apiImg() {
  document.getElementById('bingImg').addEventListener("click", () => {
    chrome.storage.local.set({ 'picUrl': "https://api.dujin.org/bing/1920.php" })
    document.getElementById('background').style.backgroundImage = 'url("https://api.dujin.org/bing/1920.php")'
  })
  document.getElementById('cwImg').addEventListener("click", () => {
    chrome.storage.local.set({ 'picUrl': "https://img.paulzzh.com/touhou/random" })
    document.getElementById('background').style.backgroundImage = 'url("https://img.paulzzh.com/touhou/random")'
  })
  document.getElementById('bingImgMobile').addEventListener("click", () => {
    chrome.storage.local.set({ 'picUrl': "https://api.dujin.org/bing/m.php" })
    document.getElementById('background').style.backgroundImage = 'url("https://api.dujin.org/bing/m.php")'
  })
  document.getElementById('cwImgMobile').addEventListener("click", () => {
    chrome.storage.local.set({ 'picUrl': "https://img.paulzzh.com/touhou/random?size=wap" })
    document.getElementById('background').style.backgroundImage = 'url("https://img.paulzzh.com/touhou/random?size=wap")'
  })
  document.getElementById('cusImgApi').addEventListener("click", () => {
    const pic = document.getElementById('cusApiPic').value
    chrome.storage.local.set({ 'picUrl': pic })
    document.getElementById('background').style.backgroundImage = 'url("https://img.paulzzh.com/touhou/random?size=wap")'
  })
}
