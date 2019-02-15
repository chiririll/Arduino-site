function adaptatePage () {
    document.getElementById("container").style.width = "98%";
    document.getElementById("content").style.width = "96%";
    document.getElementById("content").style.float = "left";
}

function adaptateSidebar () {
    document.getElementById("sidebar").style.float = "left";
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("sidebar").style.width = "98%";
}

function standartView () {
    document.getElementById("container").style.width = "var(--Bwidth)";
    document.getElementById("content").style.width = "76%";
    document.getElementById("sidebar").style.width = "18%";
    document.getElementById("content").style.float = "right";
    document.getElementById("sidebar").style.float = "left";
    document.getElementById("sidebar").style.display = "block";
}

function setHeight () {
    document.getElementById("container").style.height = window.innerHeight - 265;
}

function loadPage () {
    var page = "main";
    
	if (document.URL.split("?").length > 1)
        page = document.URL.split("?")[1].split("#")[0];
    
    if (!document.getElementById(page))
        page = "404";
    
    document.getElementById(page).style.display = "block";
    document.getElementById("page").textContent = pageName[page];
    
    for (var p in pageName) {
        if (p != page && document.getElementById(p)) {
            document.getElementById(p).innerHTML = "";
        }
    }

    document.title = pageName[page] + " - Arduino";
	var now = new Date();
	document.getElementById("year").textContent = now.getFullYear();
}
