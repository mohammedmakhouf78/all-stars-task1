let users = [
    {
        "name": "ahmed",
        "age": 20,
        "marrid": true
    },
    {
        "name": "ali",
        "age": 18,
        "marrid": false
    },
    {
        "name": "ebrahim",
        "age": 15,
        "marrid": false
    },
    {
        "name": "farid",
        "age": 24,
        "marrid": true
    }
]

let newArray = users.filter(user => user.marrid);
console.log(newArray);
newArray = users.filter(user => !user.marrid);
console.log(newArray);
newArray = users.filter(user => user.age >= 20);
console.log(newArray);
newArray = users.filter(user => user.age <= 20);
console.log(newArray);

// arr.forEach(element => {
//     if (element.marrid == true) {
//         newArray.push(element)
//     }
// });











































// let arr = [
//     {
//         "name": "ahmed",
//         "age": 20,
//         "marrid": true
//     },
//     {
//         "name": "ali",
//         "age": 18,
//         "marrid": false
//     },
//     {
//         "name": "ebrahim",
//         "age": 15,
//         "marrid": false
//     },
//     {
//         "name": "farid",
//         "age": 24,
//         "marrid": true
//     }
// ]


// arr.forEach((element) => {
//     console.log(element);
// })

// let newArray = arr.map((element) => {
//     element.marrid = !element.marrid
//     return element
// })

// console.log(newArray);






















// let arr = [10, 11, 17, 30, 70, 80]


// console.log(myMap(arr, (element) => element * 2));
// console.log(myMap(arr, (element) => element * 3));
// console.log(myMap(arr, (element) => element * 4));
// console.log(myMap(arr, (element) => element * 5));

// function myMap(arr, callback) {
//     let newArray = []

//     for (let i = 0; i < arr.length; i++) {
//         newArray[i] = callback(arr[i])
//     }
//     return newArray
// }