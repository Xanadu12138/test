var groupindex = 1;
var len;

function recomend(data) {
  len = data.length;
  for (var i = 6 * (groupindex - 1); i <= 6 * groupindex - 1; i++) {
    var re = document.getElementById("recomend");
    if (data[i].background != null) {
      if (re != null) {
        var li = document.createElement("li");
        li.className = "post-item";
        re.appendChild(li);
        var a = document.createElement("a");
        a.className = "pitem";
        a.href = "https://weibo.com/571922559?display=0&retcode=6102&is_all=1";
        li.appendChild(a);
        var pdiv = document.createElement("div");
        pdiv.className = "picture";
        pdiv.style.background = "url(" + data[i].background + ")";
        a.appendChild(pdiv);
        var newdiv = document.createElement("div");
        newdiv.className = "new";
        a.appendChild(newdiv);
        var tdiv = document.createElement("div");
        tdiv.className = "title";
        tdiv.innerHTML = data[i].title //"这里是主标题";
        a.appendChild(tdiv);
        var subtdiv = document.createElement("div");
        subtdiv.className = "subtitle";
        subtdiv.innerHTML = data[i].content; //"这里是副标题";
        a.appendChild(subtdiv);
        var infoul = document.createElement("ul");
        infoul.className = "info";
        a.appendChild(infoul);
        var infoli0 = document.createElement("li");
        infoli0.className = "info-item";
        infoul.appendChild(infoli0);
        var ilike = document.createElement("i");
        ilike.className = "like";
        infoli0.appendChild(ilike);
        var ispan0 = document.createElement("span");
        ispan0.innerHTML = data[i].like; //"999";
        infoli0.appendChild(ispan0);
        var infoli1 = document.createElement("li");
        infoli1.className = "info-item";
        infoul.appendChild(infoli1);
        var icomment = document.createElement("i");
        icomment.className = "comment";
        infoli1.appendChild(icomment);
        var ispan1 = document.createElement("span");
        ispan1.innerHTML = data[i].comment; //"999";
        infoli1.appendChild(ispan1);
        var infoli2 = document.createElement("li");
        infoli2.className = "info-item";
        infoul.appendChild(infoli2);
        var ishare = document.createElement("i");
        ishare.className = "share";
        infoli2.appendChild(ishare);
        var ispan2 = document.createElement("span");
        ispan2.innerHTML = data[i].share; //"999";
        infoli2.appendChild(ispan2);

      }
    }
  }
}
var xmlhttp;
var url = "https://easy-mock.com/mock/5c5316067e0da549724ece9f/test/liwushuo";

function loadXMLDoc() {
  xmlhttp = null;
  if (window.XMLHttpRequest) { // code for all new browsers
    xmlhttp = new XMLHttpRequest();
  } else if (window.ActiveXObject) { // code for IE5 and IE6
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  if (xmlhttp != null) {
    xmlhttp.onreadystatechange = state_Change;
    xmlhttp.open("GET", url, true);
    xmlhttp.send(null);
  } else {
    alert("Your browser does not support XMLHTTP.");
  }
}

function state_Change() {
  if (xmlhttp.readyState == 4) { // 4 = "loaded"
    if (xmlhttp.status == 200) { // 200 = OK
      var b = xmlhttp.responseText;
      var bjson = JSON.parse(b);
      recomend(bjson['goods']);
    } else {
      alert("Problem retrieving XML data");
    }
  }
}

function onloadmore() {
  var b=document.getElementById("loadbutton");
  if (groupindex * 6 < len) {
    groupindex = groupindex + 1;

    loadXMLDoc();
  } else {
    b.innerHTML="没有更多了";
  }
}
function sign(){
  var bdiv=document.getElementById("bdiv");
  bdiv.style.setProperty('display','block');
  var signdiv=document.getElementById("signdiv");
  signdiv.style.setProperty('display','block');
}
function clear(){
  alert("1");
  var bdiv=document.getElementById("bdiv");
  bdiv.style.setProperty('display','none');
  var signdiv=document.getElementById("signdiv");
  signdiv.style.setProperty('display','none');
  
}