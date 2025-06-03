document.body.style.backgroundColor = "silver";
const title=document.getElementById("title");
const vegetable=document.getElementById("vegetable");
const paragraph=document.getElementById("paragraph");
paragraph.style.marginTop="7%";
paragraph.style.marginLeft="35%";
paragraph.style.fontSize="40px";
const fruit=document.getElementById("banana");
fruit.style.height="50%";
fruit.style.width="60%";
fruit.style.marginLeft="40%";
fruit.style.marginTop="-10%";
vegetable.style.width="90%";
vegetable.style.marginLeft="89%";
title.style.color="green";

title.style.marginLeft="35%";
title.style.fontSize="70px";


const header_three = document.getElementsByTagName("h3");
for (var i=0; i<header_three.length; i++) {
  header_three[i].style.textTransform = "uppercase";
  header_three[i].style.fontFamily="arial";
  header_three[i].style.fontSize="40px";
  header_three[i].style.marginLeft="95%";
}

var fruitList = document.getElementById("fruList");
var newFruit = document.createElement("li");
newFruit.textContent = "Pineapples";
fruitList.appendChild(newFruit);
fruitList.style.marginLeft="40%"
fruitList.style.fontSize="30px";
fruitList.style.paddingBottom="6%";


var vegList = document.getElementById("vegList");
var newVeg = document.createElement("li");
newVeg.textContent = "Spinach";
vegList.appendChild(newVeg);
vegList.style.marginLeft="69%";
vegList.style.fontSize="30px"