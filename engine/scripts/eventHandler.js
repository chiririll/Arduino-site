var Adaptated = false;

window.onscroll = function() {
	TopBtn();
	hMenu();
	if (window.scrollY > document.getElementById("sidebar").offsetHeight + 160 && window.innerWidth >= 1070) {
		document.getElementById("sidebar").style.display= "none";
		adaptatePage();
	} else if (window.innerWidth >= 1070)
		standartView();
}
function onResize () {
	hMenu();
	setHeight();
	if (window.innerWidth < 1070) {
		adaptatePage();
		adaptateSidebar();
		Adaptate = true;
	} else if (window.innerWidth >= 1070) {
		standartView();
		Adaptate = false;
	}
	if (window.scrollY > document.getElementById("sidebar").offsetHeight + 160 && window.innerWidth >= 1070) {
		document.getElementById("sidebar").style.display= "none";
		adaptatePage();
	} else if (window.innerWidth >= 1070)
		standartView();
}
function loadEvent () {
	if (window.innerWidth < 1070) {
		adaptatePage();
		adaptateSidebar();
		Adaptate = true;
	} else if (window.innerWidth > 1070 ) {
		standartView();
		Adaptate = false;
	}
	loadPage();
	setHeight();
}