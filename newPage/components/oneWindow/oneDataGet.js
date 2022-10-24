export default function() {
  const httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', 'https://v1.hitokoto.cn/', true);
  httpRequest.send();

  httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
      var obj = JSON.parse(httpRequest.responseText);

      document.getElementById('button').innerHTML = obj.hitokoto;
      document.getElementById('oneNum').innerHTML = '#' + obj.id;
      document.getElementById('oneTxt').innerHTML = obj.hitokoto;
      document.getElementById('oneFrom').innerHTML = '————' + obj.from;
    }
  };
}
