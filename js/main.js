// JavaScript Document

var media, playbtn, seekslider,
	curtimetext, durtimetext, mutebtn,
	volumeslider, count, loadVideoButtons;

(function () {
	console.log("fired");

function intializePlayer(){
	
	// Set object references
	media = document.getElementById("video1");
	playbtn = document.getElementById("playPause");
	teaserBtn = document.getElementById("teaserBtn");
	trailerBtn = document.getElementById("trailerBtn");
	teaserBtnMob = document.getElementById("teaserBtnMob");
	trailerBtnMob = document.getElementById("trailerBtnMob");
	seekslider = document.getElementById("sSlider");
	curtimetext = document.getElementById("curTimeText");
	durtimetext = document.getElementById("durTimeText");
	mutebtn = document.getElementById("muteBtn");
	volumeslider = document.getElementById("vSlider");
	console.log("loadVideo");
	
	// Add event listeners
	teaserBtn.addEventListener("click",vidSwitch,false);
	trailerBtn.addEventListener("click",vidSwitchBack,false);
	teaserBtnMob.addEventListener("click",vidSwitchMob,false);
	trailerBtnMob.addEventListener("click",vidSwitchBackMob,false);
	playbtn.addEventListener("click",playPause,false);
	seekslider.addEventListener("change",vidSeek,false);
	media.addEventListener("timeupdate",seektimeupdate,false);
	mutebtn.addEventListener("click",vidmute,false);
	volumeslider.addEventListener("change",setvolume,false);
	media.addEventListener("click", playPause, false);
}

window.onload = intializePlayer;

function vidSwitch(){
	console.log(this.id);
	media.src = "video/teaser.mp4";
	media.load();	
}

function vidSwitchBack(){
	console.log(this.id);
	media.src = "video/trailer.mp4";
	media.load();
}

function vidSwitchMob(){
	console.log(this.id);
	media.src = "video/teaser.mp4";
	media.load();	
}

function vidSwitchBackMob(){
	console.log(this.id);
	media.src = "video/trailer.mp4";
	media.load();
}

function playPause(){
	if(media.paused){
		media.play();
		playbtn.innerHTML = "Pause"; 
	} else {
		media.pause();
		playbtn.innerHTML = "Play";
	}
}

function vidSeek(){
	var seekto = media.duration * (seekslider.value / 100);
	media.currentTime = seekto;
}

function seektimeupdate(){
	var nt = media.currentTime * (100 / media.duration);
	seekslider.value = nt;
	var curmins = Math.floor(media.currentTime / 60);
	var cursecs = Math.floor(media.currentTime - curmins * 60);
	var durmins = Math.floor(media.duration / 60);
	var dursecs = Math.floor(media.duration - durmins * 60);
	if(cursecs < 10){ cursecs = "0"+cursecs; }
	if(dursecs < 10){ dursecs = "0"+dursecs; }
	curtimetext.innerHTML = curmins+":"+cursecs;
	durtimetext.innerHTML = durmins+":"+dursecs;
}

function vidmute(){
	if(media.muted){
		media.muted = false;
		volumeslider.value=count;
		mutebtn.innerHTML = "Mute";
	} else {
		media.muted = true;
		count=volumeslider.value;
		mutebtn.innerHTML = "Unmute";
		volumeslider.value=0;
	}
}

function setvolume(){
	media.volume = volumeslider.value / 100;
}

})();
