function recomend(){
    for(var i=0;i<=6;i++){
        var re=document.getElementsByClassName("recomend-list");
        var li=document.createElement("li");
        li.className="post-item";
        re.appendChild(li);
        var a=document.createElement("a");
        a.className="pitem";
        a.innerHTML="<span herf='#' target='_blank'></span>"
        li.appendChild(a);
        var pdiv=document.createElement("div");
        pdiv.className="picture";
        a.appendChild(pdiv);
        var newdiv=document.createElement("div");
        newdiv.className="new";
        a.appendChild(newdiv);
        var tdiv=document.createElement("div");
        tdiv.innerHTML="这里是主标题";
        a.appendChild(tdiv);
    }
}