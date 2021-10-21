pickaxe = "Rock";
coal = 0;
function money(){
if (pickaxe == "Rock"){
setInterval(1);
coal = coal + 1;
money();
}
}
