function recomend() {
    for (var i = 0; i <= 5; i++) {
        var re = document.getElementById("recomend");
        if (re != null) {
            var li = document.createElement("li");
            li.className = "post-item";
            re.appendChild(li);
            var a = document.createElement("a");
            a.className = "pitem";
            a.innerHTML = "<span herf='#' target='_blank'></span>"
            li.appendChild(a);
            var pdiv = document.createElement("div");
            pdiv.className = "picture";
            a.appendChild(pdiv);
            var newdiv = document.createElement("div");
            newdiv.className = "new";
            a.appendChild(newdiv);
            var tdiv = document.createElement("div");
            tdiv.className="title";
            tdiv.innerHTML = "这里是主标题";
            a.appendChild(tdiv);
            var subtdiv =document.createElement("div");
            subtdiv.className="subtitle";
            subtdiv.innerHTML="这里是副标题";
            a.appendChild(subtdiv);
            var infoul=document.createElement("ul");
            infoul.className="info";
            a.appendChild(infoul);
            var infoli0=document.createElement("li");
            infoli0.className="info-item";
            infoul.appendChild(infoli0);
            var ilike=document.createElement("i");
            ilike.className="like";
            infoli0.appendChild(ilike);
            var ispan0=document.createElement("span");
            ispan0.innerHTML="999";
            infoli0.appendChild(ispan0);
            var infoli1=document.createElement("li");
            infoli1.className="info-item";
            infoul.appendChild(infoli1);
            var icomment=document.createElement("i");
            icomment.className="comment";
            infoli1.appendChild(icomment);
            var ispan1=document.createElement("span");
            ispan1.innerHTML="999";
            infoli1.appendChild(ispan1);
            var infoli2=document.createElement("li");
            infoli2.className="info-item";
            infoul.appendChild(infoli2);
            var ishare=document.createElement("i");
            ishare.className="share";
            infoli2.appendChild(ishare);
            var ispan2=document.createElement("span");
            ispan2.innerHTML="999";
            infoli2.appendChild(ispan2);

        }
    }
}