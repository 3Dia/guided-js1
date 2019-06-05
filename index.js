console.log('Hey');

//1st pass-keywords (var, let, const, function) indentifies and creates a reference in memmort
// 2nd pass- assign by value - data to each of these keywords

//String * 
//Number * 
//Boolean(Bool) * 
//Null
//Objects
//Arrays
//Functions
//NaN

// // console.log('string hey' , 'hey')

// // //Variable
// //    // var - avoid this
// //    //let, const
//              //const - used for something you will not revaluize 

// //    var aVarariable //declared
// //    aVariable = 12 // giving variable a value (initialize)
// //    console.log('aVariable', typeof aVariable)
   

// console.log(aVar) hi

// var aVar = 'hi'
// var anotherVar = null

// //not defined - no clue about values or variable existence or anything pertaining to it
// //undefined - we know that there is a box(variable), but we dont know what value is 
// //null - 'box' exists, but there is nothing in it...no value
// // 0 - value equals zero 

// let x = 3//? 3
// const y =10//? 10

// x = 34 //? 34

// y=3498

// function myFunc(){}
// function - delcaration of it being a function
//myFunc - name of function (can be any name)
// () -allows for parameteres
//{} -block :for storing information and directions

// const y = 10

// function myFunc(){
//     const x = 'foo'
//    return (y * 3)
// }

// myFunc()//? undefined

// function myFunction(x){
//     x = x +1
//     return x
// }

// function myOther(){

// }

const arr = [1,2,3,4]

const x = [0, 400, 5, 250, 22]

x[0] //?  0
x[1]//? 400

const obj = {breakfast: 'muffin'}
obj['breakfast']//? muffin

const meals = {
    breakfast : 'muffin',
    lunch: 'skipped',
    supper: 'cereal'
}

arr.map(number => number * 2)
arr.filter(numbers => nunber === 4)
arr.reduce((x,y) => x + y)