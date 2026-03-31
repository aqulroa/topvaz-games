"use strict";
var is_fullscreen = false;
function open_fullscreen() {
	let game = document.getElementById("game-area");
	if(!game) return;
	if(is_fullscreen){
		is_fullscreen = false;
		if(is_mobile_device()){
			game.style.position = "absolute";
			var mb = document.getElementById("mobile-back-button");
			var gp = document.getElementById("game-player");
			if(mb) mb.style.display = "none";
			if(gp) gp.style.display = "none";
		} else {
			if (game.requestFullscreen) {
				game.requestFullscreen();
			} else if (game.mozRequestFullScreen) {
				game.mozRequestFullScreen();
			} else if (game.webkitRequestFullscreen) {
				game.webkitRequestFullscreen();
			} else if (game.msRequestFullscreen) {
				game.msRequestFullscreen();
			}
		}
	} else {
		is_fullscreen = true;
		if(is_mobile_device()){
			var gp = document.getElementById("game-player");
			var mb = document.getElementById("mobile-back-button");
			if(gp) gp.style.display = "block";
			game.style.position = "fixed";
			if(mb) mb.style.display = "flex";
		} else {
			if (game.requestFullscreen) {
				game.requestFullscreen();
			} else if (game.mozRequestFullScreen) {
				game.mozRequestFullScreen();
			} else if (game.webkitRequestFullscreen) {
				game.webkitRequestFullscreen();
			} else if (game.msRequestFullscreen) {
				game.msRequestFullscreen();
			}
		}
	}
}
function is_mobile_device(){
	if (navigator.userAgent.match(/Android/i)
	|| navigator.userAgent.match(/webOS/i)
	|| navigator.userAgent.match(/iPhone/i)
	|| navigator.userAgent.match(/iPad/i)
	|| navigator.userAgent.match(/iPod/i)
	|| navigator.userAgent.match(/BlackBerry/i)
	|| navigator.userAgent.match(/Windows Phone/i)) {
		return true;
	} else {
		return false;
	}
}
(function(){
	var mbb = document.getElementById("mobile-back-button");
	if(mbb){
		mbb.addEventListener("click", function(e) {
			e.preventDefault();
			open_fullscreen();
		});
	}
})();
