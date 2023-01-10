// Scope.........
// LocalScope
// GlobalScope

// Name is defined with in the local boundary od showname() 
// we can not access this variable outside the function
// function showName(){
//     var name="Madhu";
// }
// showname();
// console.log(name);

//Example for access the name variable defined in the local scope
// function showName(){
//     var name="Madhu";
//     console.log(name);
// }
// showName();


//IIFE(Immediately Invoked Function Expression)......
//It is use to immediately execute the code and obtain data privacy.

// let paintColor='red'
// const paint =(()=> {
//     return{
//         changeColorTOBlue:()=>{
//             paintColor:'Blue';
//             return paintColor;
//         },
//         changeColorTOGreen:()=>{
//             paintColor:'Green';
//             return paintColor;
//         }
//     }
// })();
// console.log(
//     paint.changeColorTOBlue()
// );

//Hoisting........
//To avoid the Uncaught ReferenceError

// function cowSays(sound){
//     console.log(sound);
// }
// cowSays('moo');

//Invoke our function before we declare it(with hoisting)
// cowSays('moo');
// function cowSays(sound){
//     console.log(sound);
// }

// var a=5;
// console.log(a);

// a = 5;
// console.log(5);
// var a;

//Closures......
//A closure is simply a function inside another function that has access to the outer function variable

const first=()=>{
    const greet='Hi';
    const second =()=>{
        const name='Madhu';
        console.log(greet);
    }
    return second;
}
const newFunc=first();
newFunc();

//The inner function ‘second()’ is a Closure. 
//This inner function will have access to the variable ‘greet’ which is the part of the outer function ‘first()’ scope.
// Here the parent scope won’t have access to the child scope variable ‘name’. 
//closures can be defined in simple terms as “a function run, the function executed. 
//It’s never going to execute again but it’s going to remember that there are references to those 
//variables so the child scope always has access to the parent scope.” 

//Callbacks.............
//a callback is simply a function that is passed to another function as a parameter 
//and is invoked or executed inside the other function.

const greeting=(name)=>{
    console.log('Hello ' + name);
}
const processUserName=(callback)=>{
    name ='Madhu';
    callback(name);
}
processUserName(greeting);

//In the above example notice that the greeting passed as an argument (callback) to the ‘processUserName’ function. Before the ‘greeting’ function is executed it waits for the event ‘processUserName’ to execute first. 

//Promises
//“A Promise is an object representing the eventual completion or failure of an asynchronous operation. Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.”