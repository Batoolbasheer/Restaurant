'use strict';
let submit = document.getElementById("submit");
let form = document.getElementById("form");
let table = document.getElementById("table");


var foodID = 0;
function Food(foodID,foodName,type,price){
    this.foodID= foodID;
    this.foodName= foodName;
    this.type= type;
    this.price= price;
    this.render();
} 


Food.prototype.render = function (){
    let newRow= document.createElement("tr");
    table.appendChild(newRow)

    let newID= document.createElement("td");
    newID.textContent= this.foodID;
    newRow.appendChild(newID)

    let newName= document.createElement("td");
    newName.textContent= this.foodName;
    newRow.appendChild(newName)

    let newType= document.createElement("td");
    newType.textContent= this.type;
    newRow.appendChild(newType)

    let newPrice= document.createElement("td");
    newPrice.textContent= this.price;
    newRow.appendChild(newPrice)
}

Food.id;
form.addEventListener('submit',handleSubmit);
    function handleSubmit(event){
        event.preventDefault()
        let foodName= event.target.foodName.value;
        let type= event.target.foodType.value;
        let price= event.target.price.value;
        let foodID= ID();
        console.log(type)
const newFood= new Food(foodID,foodName,type,price);
    }

function ID(){
    foodID= Math.floor(1000+ Math.random()*9000);
    return foodID;
}