let play = document.querySelector("#play");
play.addEventListener("click",function(){
	window.location = "play";
})

function startmusic(){
audio1 = document.getElementById("music");
audio1.play();
}