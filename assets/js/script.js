"use strict";
var is_fullscreen = false;
function open_fullscreen() {
	var container = document.getElementById("game-player");
	var game = document.getElementById("game-area");
	if(!container && !game) return;
	var el = container || game;
	try {
		if (!document.fullscreenElement) {
			if (el.requestFullscreen) {
				el.requestFullscreen();
			} else if (el.webkitRequestFullscreen) {
				el.webkitRequestFullscreen();
			} else if (el.msRequestFullscreen) {
				el.msRequestFullscreen();
			}
		} else {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			}
		}
	} catch(e) {
		console.log("Fullscreen error:", e);
	}
	return false;
}
function is_mobile_device(){
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent);
}
