
//  let table=document.querySelector(".table")
// let namepr=document.getElementById("namepr")
// let TEM=document.getElementById("TEM")
// let precepr=document.getElementById("precepr")
// let precepr2=document.getElementById("precepr2")
// let cleck=document.querySelector(".cleck")

// // let arr1=['xx','zz','aa','dd','wrgwr','bw','twbEGBG']
// // let arr2=[11,22,33,44,55,66,77,88,99,100]
// // let arr3=[12,23,34,45,56,67,78,89,90,222]

// let x=1

// cleck.onclick=()=>{
// if(namepr.value !=''){
// for (let i = 0; i < (+TEM.value); i++) {

//      table.innerHTML += `
//        <tr>
//          <td>${x++}</td>
//          <td>${namepr.value}</td>
//         <td>${precepr.value}</td>
//         <td>${precepr2.value}</td>
//         <td><button onclick="deleteItem()">Delete</button></td>
//       </tr>
//     `;
// }

//     namepr.value=''
//     precepr.value=''
//     precepr2.value=''
// }

// else{
//     window.alert("دخل البينات ي غبي ")
// }
// }






// let table = document.querySelector(".table");
// let namepr = document.getElementById("namepr");
// let TEM = document.getElementById("TEM");
// let precepr = document.getElementById("precepr");
// let precepr2 = document.getElementById("precepr2");
// let cleck = document.querySelector(".cleck");

// let x = 1;
// let data = JSON.parse(localStorage.getItem("products")) || [];

// function renderTable() {
//   table.innerHTML = "";
//   x = 1;
//   data.forEach((item, index) => {
//     table.innerHTML += `
//       <tr>
//         <td>${x++}</td>
//         <td>${item.name}</td>
//         <td>${item.price1}</td>
//         <td>${item.price2}</td>
//         <td><button onclick="deleteItem(${index})">Delete</button></td>
//       </tr>
//     `;
//   });
// }

// function saveToLocalStorage() {
//   localStorage.setItem("products", JSON.stringify(data));
// }

// cleck.onclick = () => {
//   if (namepr.value != "") {
//     for (let i = 0; i < +TEM.value; i++) {
//       data.push({
//         name: namepr.value,
//         price1: precepr.value,
//         price2: precepr2.value,
//       });
//     }

//     saveToLocalStorage();
//     renderTable();

//     namepr.value = "";
//     precepr.value = "";
//     precepr2.value = "";
//     TEM.value = "";
//   } else {
//     alert("دخل البيانات يا غالي");
//   }
// };

// function deleteItem(index) {
//   data.splice(index, 1);
//   saveToLocalStorage();
//   renderTable();
// }

// renderTable();



let table = document.querySelector(".table");
let namepr = document.getElementById("namepr");
let TEM = document.getElementById("TEM");
let precepr = document.getElementById("precepr");
let precepr2 = document.getElementById("precepr2");
let cleck = document.querySelector(".cleck");

let x = 1;
let data = JSON.parse(localStorage.getItem("products")) || [];





function renderTable() {
  table.innerHTML = "";
  x = 1;
  data.forEach((item, index) => {
    table.innerHTML += `

   
      <tr>
        <td>${x++}</td>
        <td>${item.name}</td>
        <td>${item.price1}</td>
        <td>${item.price2}</td>
        <td><button onclick="deleteItem(${index})">Delete</button></td>
      </tr>
    `;
  });
}

function saveToLocalStorage() {
  localStorage.setItem("products", JSON.stringify(data));
}

cleck.onclick = () => {
  if (namepr.value != "") {
    for (let i = 0; i < +TEM.value; i++) {
      data.push({
        name: namepr.value,
        price1: precepr.value,
        price2: precepr2.value,
      });
    }

    saveToLocalStorage();
    renderTable();

    namepr.value = "";
    precepr.value = "";
    precepr2.value = "";
    TEM.value = "";
  } else {
      alert(" دخل البينات ي غبي😩 ")
  }
};

function deleteItem(index) {
  data.splice(index, 1);
  saveToLocalStorage();
  renderTable();
}

renderTable();