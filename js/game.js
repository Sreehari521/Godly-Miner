window.addEventListener("load",function(){
	money();
})
pickaxe = "Rock";
coal = 0;
function money(){
if (pickaxe === "Rock"){
setInterval(1000);
clearInterval();
coal++;
document.getElementById("coal").innerHTML = coal;
money();
}
}