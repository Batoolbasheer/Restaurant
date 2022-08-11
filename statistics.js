'use strict';

const allorder=[];
const table =document.grtElementById('foodTable');
const tr= document.createElement('tr')
table.appendChild(tr);
const th1= document.createElement('th');
th1.textContent="ID";
tr.appendChild(th1);
const th2 =document.createElement('th');
th2.textContent="Name";
tr.appendChild(th2);
const th3 =document.createElement('th');
th3.textContent="Type";
tr.appendChild(th3);
const th4 =document.createElement('th');
th1.textContent="Price";
tr.appendChild(th4);


let id =0;
function Order(foodID,foodName,type,price){
    this.foodID = foodID;
    this.foodName = foodName;
    this.type = type;
    this.price = price;
    allorder.push(this);
}

Order.prototype.uniqueID = function(counter){
    const num =counter+1;
    const str = num.toString();
    const ans = str.padStat(4,'0');
    this.foodID=ans
    ++id
}

 function render(getData){
    let data=getData();

    const trEl=document.createElement('tr');
    table.appendChild(trEl);

    const td1=document.createElement('td');
    td1.textContent=this.foodID;
    trEl.appendChild(td1);

    const td2=document.createElement('td');
    td2.textContent=this.foodName;
    trEl.appendChild(td2);

    const td3=document.createElement('td');
    td3.textContent=this.type;
    trEl.appendChild(td3);

    const td4=document.createElement('td');
    td4.textContent=this,price;
    trEl.appendChild(td4);
}

function getData(){
    letrievedData =localStorage.getItem("item")
    let retrieveData =JSON.parse(retrieveData);
    console.log(arrayData)
    // if (arrayData!=null){
    //     for(let i=0; i<arrayData.length; i++){
    //         let foodID = Order.foodID;
    //         let newOrder = new Order(
    //             foodID,
    //              arrayData[i].foodName,
    //             arrayData[i].type,
    //             arrayData[i].price,
    //         );
    //         newOrder.uniqueID(id);
    //          }
    //          for(let i=0; i<allorder.length;i++){
    //             allorder[i].render()
    //      }
    // }
    return arrayData
}
getData()