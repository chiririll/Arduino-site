function TopBtn () {
	if (window.scrollY > 0)
		document.getElementById("top-btn").style.display = "block";
	else
		document.getElementById("top-btn").style.display = "none";
}