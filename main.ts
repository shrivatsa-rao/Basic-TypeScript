export {}

// let one="hello ram world";
// console.log(one);
//typescript will be converted as js file and then we need to run as tsc main.ts it will create a js file
//then to see the output you need to run the js file as node main.js then only u will see the output
// as soon as u run the js file u will get one error so to solve that error u need to put export 
//to solve error u need to put export keyword in typsescript file then error goes
//to see the output or update constly or to work as live server use "tsc main --watch " then in one more terminal run node main


//variable decl
/*
let x=20;

const y=3000;
*/

//let can be written as let x; but for const u must assign value while declaring the const variable.

//types of declaration


/*
let name:string="shrivatsarao";
console.log(name);

*/

/*
let name:string="shree";
let sentence:string=`I am a ${name} beginner in typescript`;
console.log(sentence);

*/

//array declaration

//let list1:number[]=[1,2,3];


//array declaration with only two types more than specifed values u cannot add.

//let p1:[string,number]=["ram",123];//another numeric value cannot be added


//if u use type as any then we can add any values to our array or variable.

//Here we can use type as any. This will take any type which u assign the value for the varibale which u declaer.
//here we can reaasing the values for the variable which we declear.
/*
let random: any="hello";
random=123;
console.log(random);
*/

//you can specify the multiple types for variable...

/*
let multi:number | boolean;
multi=132;
console.log(multi);

multi=true;
console.log(multi);

*/


//function can be created with returntype as a type with it.
/*
function add(num1:number,num2:number):number{
    return num1+num2;
}

console.log(add(5,10));

*/

//here add has parameter with question mark which means it is optional,so whenevr your calling the function u can call it as add(5);
/*
function add(num1:number,num2?:number){

}
*/



//object in ts
/*
//person is the object with propeties firstname and lastname with types
//person has a type object with two propeties firstname with type string and lastname with type string
function fullname(person:{firstname:string,lastname:string}){

    console.log(`${person.firstname} ${person.lastname}`);

}


//create object which resembles like person.
let p={
    firstname:'ram',
    lastname:'raj'
};

fullname(p)

*/
//interafce

//interface helps to maintain the code, any changes u want to do
//u no need to do the changes in all the places,just u need to change in one place.
//interface will be used as type for some objects.

/*
interface Person{
    firstname:string;
    lastname:string;
}

//below person is the acts a object with type Person
/*
function fullname(person:Person){
    console.log(`${person.firstname} ${person.lastname}`)
}

let p={
    firstname:'rammm',
    lastname:'tr'
}

fullname(p)

*/
//topic class
/*
class employee{
    employeename: string;

    constructor(name:string){
        this.employeename=name
    }

    great(){
        console.log(`good morning ${this.employeename}`);
    }
}

let emp1=new employee('wis');
console.log(emp1.employeename);

emp1.great();
*/

///acccess modifier










