// // Task 1

// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };

// console.log(colors["golden rod"])


// // Task 2 

// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020,
//     "passenger capacity" : 5
// };
// console.log(car["passenger capacity"])


// // Task 3 

// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };

// console.log(student["physics"].marks)


// Task 4

// let allStudent = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };

// let aLArr = Object.keys(allStudent)

// console.log(aLArr.length)


// Task 5

let hardObj = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
}

for( let i in hardObj){
    console.log("Keys :",i, "|", "Type :", typeof hardObj[i] )
}

