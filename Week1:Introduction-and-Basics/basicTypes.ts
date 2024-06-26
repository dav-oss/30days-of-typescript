//Boolean
let isDone: boolean = false;

//Number
let decimal: number = 5;
let hex: number = 0xf00d;
let binary: number = 0b1011;
let octal: number = 0o754;
// let big: bigint = 1000n;

//String
let color: string = "blue";
color = 'red';
//Template strings
let fulllName: string = "Dev Developer";
let age: number = 37;
let sentence: string = "Hello, my name is " + fulllName + ".\n\n"+ "I'll be " + (age + 1) + " years old next month.";

//Arrays
let list: number[] = [1,2,3];
//Generic array
let genericList: Array<number> = [1,2,3];

//Tuples
//Express array with fixed number of elemennts with known types but need not be same.
let x: [string, number];
x = ["hello", 100];
console.log(x[0].substring(1));

//Enum
enum Color {
    Red = 1,
    Green = 2,
    Blue =  3,
}
let c: Color = Color.Green;

//Any
declare function getValue(key: string): any;
//OK, return the value of 'getValue' is not checked
str: string = getValue("myString");