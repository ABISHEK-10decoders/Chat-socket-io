let age:number;
age=23
console.log(age);

// const message:string = "hello world!";
// console.log(message);

// const msg21:string = "decoders";
// console.log(msg21)


// let name:string;
// name="decoders";
// console.log(name);

// let person : {
//     name : string;
//     age : number;
// }[];

// person = [{
//     name = "Example" ,
//     age = 23,
// },{
//     name = "Example" ,
//     age = 23,
// }
// let name1:{ name1: string{}};
// ];
// console.log(person , "PERSON");


// let name: string[];

// name=["abi","mad"]

// let name1:{ name1: string{}};

let sports:{
    name:string;
    age:number;

};
sports={
    name : "Example" ,
    age :23
};

console.log(sports);


type Person = {
    name : string ;
    age : number;
};

let NewPerson : Person;

NewPerson = {
    name : "Example",
    age : 10
};
console.log( NewPerson);

let peopleName : Person[];

peopleName = [{
    name : "SAMPLE",
    age : 23
} 

// , 
// {
//     name : "SAMPLEsample",
//     age : 26
// }


];
   
// peopleName = ;
const Array = [ "avu" , "bcvc" , "jhj"]
console.log(Array);



console.log(peopleName , "peopleName");

////  Generics :

function beginnering <T> ( array : T[] , value : T){
    const newArray = [value , ...array];
    return newArray;
}

const demoArray = [ 1,2,3];
const updateArray = beginnering(demoArray , -1);
const stringArray = beginnering(['a' ,'b' , 'c'], 'd');

console.log(updateArray);
console.log(stringArray , "STRINGARRAY")


// let person: {
//   name: string;
//   age: number;
// };
// person = {
//   name: 'Max',
//   age: 32
// };
// console.log(person);











