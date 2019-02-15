function hMenu () {
	if (window.scrollY > 100 && window.innerWidth > 1010) {
		document.getElementById("hMenu").style.marginTop = -100;
		document.getElementById("hMenu").style.position = "fixed";
	} else {
		document.getElementById("hMenu").style.marginTop = 0;
		document.getElementById("hMenu").style.position = "absolute";
		document.getElementById("container").style.marginTop = 50;
	}
}
