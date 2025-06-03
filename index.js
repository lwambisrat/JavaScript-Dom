document.body.style.backgroundColor = "silver";
const title=document.getElementById("title");
const vegetable=document.getElementById("spinach");
const apple=document.getElementById("apple");
const paragraph=document.getElementById("paragraph");
const fruit=document.getElementById("banana");
const tomato=document.getElementById("tomato");
tomato.style.width="15vw";
tomato.style.height="33vh";
tomato.style.marginLeft="55%";
tomato.style.borderRadius="9cqb";
paragraph.style.marginTop="7%";
paragraph.style.marginLeft="35%";
paragraph.style.fontSize="40px";
apple.style.width="80%";
apple.style.marginLeft="99%";
apple.style.marginTop="-25%";
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
vegList.style.fontSize="30px";