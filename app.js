'use strict';
const body = document.getElementsByTagName('body');

const allTypes = [];
function Food(foodID,foodName,type,price){
    this.foodID=foodID;
    this.foodName=foodName;
    this.type=type;
    this.price=price;
    allTypes.push(this);
} 


// Food.prototype.printMenu = function () {

//     const divEl = document.createElement('div');
//     body[0].appendChild(divEl);

//     //par
//     const pEl = document.createElement('p');
//     pEl.textContent = `Drink name : ${this.name} : ${this.price}`;
//     divEl.appendChild(pEl);

//     //img
//     const imgEl = document.createElement('img');
//     imgEl.src = this.image;
//     imgEl.alt = this.name;
//     divEl.appendChild(imgEl);

//     const ulEl = document.createElement('ul');
//     divEl.appendChild(ulEl);

//     for (let i = 0; i < this.ingredients.length; i++) {
//         let liEl = document.createElement('li');
//         ulEl.appendChild(liEl);
//         liEl.textContent = this.ingredients[i];
//     }

// }






// let americano = new Drink("americano", [ "coffee", "ice", "sugar"], "./assets/americano.png", true, false, 2.50);
// let espresso = new Drink("espresso", ["milk", "coffee", "ice"], "./assets/espresso.png", true, false, 2.50);
// let latte = new Drink("latte", ["milk", "coffee", "ice", "sugar"], "./assets/latte.png", true, false, 2.50);
// let mocha= new Drink("mocha", [ "coffee", "ice"], "./assets/mocha.png", true, false, 2.50);


for (let i = 0; i < allTypes.length; i++) {
    allTypes[i].printMenu();
}



// let form = document.getElementById("form");

// form.addEventListener("submit", handleSubmit);
// function handleSubmit(event) {
//     event.preventDefault();
//     let foodID = event.target.foodID.value;
//     let foodName = event.target.foodName.value;
//     let type =event.target.type.value; 
//     let price = event.target.price.value;
//     console.log(foodID,foodName,type,price);
    
//     const newFood = new Food(foodID,foodName,type,price);
//     newFood.printMenu();
//     console.log(allTypes)  
// }