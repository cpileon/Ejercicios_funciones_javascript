let ele;
function pintar(color='green'){
    ele.style.backgroundColor = color;
}

ele = document.getElementById("ele1");
ele.addEventListener("click", function(){
    pintar('yellow');
});