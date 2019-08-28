window.onload = function () {
  var xhr = getXhr();
  xhr.open("GET", "ind.php");
  xhr.send(null);
  xhr.onreadystatechange = function () {
    // 接住后端数据的数组
    var arr = [];
    if (xhr.readyState == 4 && xhr.status == 200) {
      // 获取后端从数据库中取出来的数据;
      arr = eval(xhr.responseText);
      for (var i = 0; i < arr.length; i++) {
        var div = document.createElement("div");
        div.className = "imgbox";
        var img = document.createElement("img");
        img.src = arr[i][0];
        div.appendChild(img);
        var a = document.createElement("a");
        a.href = "index2.html";
        div.appendChild(a);
        var div1 = document.createElement("div");
        div.appendChild(div1);
        var span = document.createElement("span");
        span.className = "iconfont    icon-sousuo";
        div1.appendChild(span);
        var h2 = document.createElement("h2");
        h2.innerHTML = arr[i][1];
        div.appendChild(h2);
        var span1 = document.createElement("span");
        div.appendChild(span1);
        var img1 = document.createElement("img");
        img1.src = "./images/line6_32.gif";
        div.appendChild(img1);
        var p = document.createElement("p");
        p.innerHTML = arr[i][2];
        div.appendChild(p);
        var introduction_list = document.getElementsByClassName("introduction_list")[0];
        introduction_list.appendChild(div);
      }
      arr.reverse();
    }
  }
}
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