let data = [60, 30, 10, 78, 40, 67];
let newElement = 70;
let position = 2;

console.log(data);

// ADDING ELEMENT
// for (let i = data.length - 1; i >= 0; i--) {
//   //   console.log(data[i]);
//   if (i >= position) {
//     data[i + 1] = data[i];
//     if (i == position) {
//       data[i] = newElement;
//     }
//   }
// }

// OOORRR
// data.splice(2, 0, 2222);
// console.log(data);

// **************** DELETING ELEMENT **********************
// for (let i = position; i < data.length - 1; i++) {
//   data[i] = data[i + 1];
// }
// data.length = data.length - 1;
// console.log(data);

// OOORRR
// data.splice(2, 1);
// console.log(data);

// **************** SEARCH ELEMENT ***********************
let searchElement = 78;
// let index = undefined;
// for (let i = 0; i < data.length - 1; i++) {
//   if (data[i] === searchElement) {
//     index = i;
//     break;
//   }
// }
// console.log("element " + searchElement + " found at index:: " + index);

// OORRR
// console.log(data.indexOf(searchElement));

// *************** MERGE 2 ARRAYS *******************************
let data2 = [22, 54, 65, 33, 21];
// let data3 = [];
// for (let i = 0; i < data.length; i++) {
//   data3[i] = data[i];
// }
// for (let i = 0; i < data2.length; i++) {
//   data3[data.length + i] = data2[i];
// }
// console.log(data3);

// OORRR
// let mergedArray = [...data, ...data2];
// console.log(mergedArray);

// OORRR with while loop
let data3 = [];
let d1 = 0;
let d2 = 0;
let d3 = 0;
while (d1 < data.length && d2 < data2.length) {
  if (data[d1] < data2[d2]) {
    data3[d3] = data[d1];
    d1++;
  } else {
    data3[d3] = data2[d2];
    d2++;
  }
  d3++;
}
while (d1 < data.length) {
  data3[d3] = data[d1];
  d1++;
  d3++;
}
console.log(data3);

// ***************************************************************
// TAKING INPUT FROM USER
// const readline = require("readline");

// const r1 = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let data = [89, 45, 23, 67, 12];
// console.log("initial array:: ", data);

// r1.question("enter element to insert:: ", (element) => {
//   const newElement = parseInt(element);
//   r1.question("enter position to insert element:: ", (position) => {
//     const pos = parseInt(position);

//     if (pos < 0 || pos > data.length) {
//       console.log("Invalid position");
//     } else {
//       for (let i = data.length - 1; i >= 0; i--) {
//         if (i >= pos) {
//           data[i + 1] = data[i];
//           if (i === pos) {
//             data[i] = newElement;
//           }
//         }
//       }
//       console.log("Updated array:: ", data);
//     }
//     r1.close();
//   });
// });
