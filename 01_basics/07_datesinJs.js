// Dates 

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 0, 24)
// let myCreatedDate = new Date(2024, 0, 24, 5 ,3)
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2024-03-30")
// console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

let weekday = newDate.toLocaleString('dafault',{
    weekday: 'long'
})

console.log(weekday);





