var toggled = false;

var hTag = document.getElementsByTagName("h1")[0];
var bodyTag = document.getElementsByTagName("body")[0];
var circle = document.getElementById("circle");

document.getElementById("toggle").onclick = function () {
        
    if(!toggled) {
        // once we click on toggle, h1 color will change from black or default to white
        hTag.classList.add("color-white");
        //And backgroud color from white to black/
        bodyTag.classList.add("bck-color-black");
        //It will shift small circle,from left to 100px right ,//
        circle.style.marginLeft = "100px";
        
        toggled = true;
        
    } else {
        
        hTag.classList.remove("color-white");
        bodyTag.classList.remove("bck-color-black");
        //it will shift circle from right to left
        circle.style.marginLeft = "1px";
        
        toggled = false;
        
    }
    
}
