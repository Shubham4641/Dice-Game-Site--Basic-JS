// to get number between 1 and 6,,,,,,,,, Math.floor is used to make the number into whole number

// +1 is added so that number when 0 is multiplied by 0 the output is 1.

var randomnumber1 = Math.floor(Math.random() * 6 ) +1; 

var randomdiceimage = "dice" + randomnumber1 + ".png"; //dice 1 to 6 randomly image name

var randomimagesource = "images/" + randomdiceimage;  // locatiing folder and changing the name of images

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomimagesource);

//  ////////////////////////////


var randomnumber2 = Math.floor(Math.random() *6 )+1;

var randomimagesource2 = "images/dice" +randomnumber2+ ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomimagesource2);


if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if (randomnumber2>randomnumber1)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else 
{
    document.querySelector("h1").innerHTML = "DRAW";
}