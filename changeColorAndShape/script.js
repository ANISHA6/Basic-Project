// Current inner div shape is square
var cur = "square";


//Array, which contains diffent type of shape name for inner div and its initial id=square
//Here every value of array is id for inner div, and css code for every id is written in css file to 
//change the shape
var shape = ["square", "rectangle", "circle", "oval", "triangle-up", "triangle-down", "triangle-topleft", "triangle-bottomleft", "triangle-bottomright", "triangle-right"];


//Array, which contains diffent type of color name for outer div and its id=block
var color = ["red", "orange", "green", "maroon", "pink", "violet"];

//js code for changing the shape of inner div, using button1
// document.getElementById("shape").onclick = function () {
//     var rand = shape[Math.floor(Math.random() * shape.length)];
//     document.getElementById(cur).setAttribute("id", rand);
//     cur = rand;
// }


//Diffent way to write above code

var button1=document.getElementById('shape');
button1.addEventListener('click',function(){
	//Math.random ,returns a random integer from 0 to 9
 var rand = shape[Math.floor(Math.random() * shape.length)];
   // document.getElementById(cur).setAttribute("id", rand);
   //or
   var innershape=document.getElementById(cur);//cur is variable name so can't use inverted comma
   innershape.setAttribute("id",rand);

    cur = rand;
});



//js code for changing the color of outer div
document.getElementById("color").onclick = function () {
    var randColor = color[Math.floor(Math.random() * color.length)];
    document.getElementById("block").style.backgroundColor = randColor;
}
