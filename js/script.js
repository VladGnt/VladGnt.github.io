/*
* To Top
*/

window.onload = function() {

	var scrollUp = document.getElementById('scrollup');

	scrollUp.onclick = function() {
		window.scrollTo(0,0);
	};

	window.onscroll = function () {
		if ( window.pageYOffset > 0 ) {
			scrollUp.style.display = 'block';
		} else {
			scrollUp.style.display = 'none';
		}
	};
};