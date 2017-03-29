console.log("%cApp.js started", "color:purple");

const array = [1,2,3,4,5,6,7,8]; 

var el = ''; 

// for (let i=0; i<array.length; i++){
//   li += `<li>${i} list item</li>`
// }

array.forEach(number => {
  el += `<li>${number} list item</li>`
})

document.getElementById('list').insertAdjacentHTML('afterbegin', el);