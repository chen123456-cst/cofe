// window.onload = function () {
var xhr = getXhr();
xhr.open("GET", "ind1.php");
xhr.send(null);
xhr.onreadystatechange = function () {
  // 接住后端数据的数组
  var arr = [];
  if (xhr.readyState == 4 && xhr.status == 200) {
    // 获取后端从数据库中取出来的数据;
    arr = eval(xhr.responseText);
    for (var i = 0; i < arr.length; i++) {
      var div = document.createElement("div");
      div.className = "team_box";
      var div1 = document.createElement("div");
      div1.className = "imgbox1";
      div.appendChild(div1);
      var img1 = document.createElement("img");
      img1.src = arr[i][0];
      div1.appendChild(img1);
      var span1 = document.createElement("span");
      span1.innerHTML = arr[i][1];
      div1.appendChild(span1);
      var span2 = document.createElement("span");
      span2.innerHTML = arr[i][2];
      div1.appendChild(span2);
      var div2 = document.createElement("div");
      div2.className = "imgbox2";
      div.appendChild(div2);
      var img2 = document.createElement("img");
      img2.src = arr[i][3];
      div2.appendChild(img2);
      var span3 = document.createElement("span");
      span3.innerHTML = arr[i][4];
      div2.appendChild(span3);
      var span4 = document.createElement("span");
      div2.appendChild(span4);
      var span5 = document.createElement("span");
      span5.innerHTML = arr[i][5];
      div2.appendChild(span5);
      console.log(div);
      var our_team_content = document.getElementsByClassName("our_team_content")[0];
      our_team_content.appendChild(div);
    }
  }
}
// }
// 创建产品介绍列表ajax
function getXhr () {
  var xhr = null;
  if (XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Mricsoft.XMLHttp");
  }
  return xhr;
}