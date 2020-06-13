var num1 = Math.floor(Math.random()*2 + 1);

var img1 = document.querySelector("img");
var imgSource = "images/coin"+num1+".png";

img1.setAttribute("src", imgSource);

if(num1 == 1){
  document.querySelector("h1").innerHTML = "Heads!";
}
else{
  document.querySelector("h1").innerHTML = "Tails!";
}
