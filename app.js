'use strict';
let allorder=[];
let befor = localStorage.getItem("form");
let form = document.getElementById("form");
let id=0;

function Order(foodName,type,price){
    this.foodID= foodID
    this.foodName = foodName;
    this.type = type;
    this.price = price;
}

Order.prototype.uniqueID = function(counter){

}

let beforRefeshing =JSON.parse(befor);
if (beforRefeshing!=null){
    allorder=beforRefeshing;
}else{
    allorder=[];
}


form.addEventListener("submit",handleSubmit);
function handleSubmit(event){
    event.preventDefult(event);
    let foodName= event.target.name.value;
    let type= event.target.options.value;
    let price= event.target.price.value;
    const newForm= new Order(foodName,type,price);
    newForm.uniqueID(id)
    saveData(allorder);
}

function saveData(Order){
    let stringObj =JSON.stringify(order);
    localStorage.setItem("form", stringObj)
    console.log(allorder);
}

