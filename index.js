var randomNumber1=Math.floor(Math.random()*6)+1
var imageName1 = "dice" + randomNumber1 + ".png";

var randomImageSource="Images/" +imageName1;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);


var randomNumber2=Math.floor(Math.random()*6)+1
var imageName2 = "dice" + randomNumber2+ ".png";

var randomImageSource2="Images/" +imageName2;

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩 player1 wins"
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩 player2 wins"
}

else{
    document.querySelector("h1").innerHTML="😗 Draw"

}







