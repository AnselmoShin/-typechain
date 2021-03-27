// // const name = "Anselmo",
// // age = 29,
// // gender = "male";

// // const sayHi = (name, age, gender?) => {
// //     console.log(`Hello, ${name}, you are ${age}, you are a ${gender}`);
// // }

// // sayHi(name, age, gender);
// // sayHi(name, age);

// // export{}; // -> 이거는 에러라고 하는데 뭔지 모르겠음.

// // const sayHi = (name: string, age: number, gender: string): void => {
// //     console.log(`Hello, ${name}, you are ${age}, you are a ${gender}`);
// // }

// // sayHi("Anselmo", 29, 'male');

// // export{}; // -> 이거는 에러라고 하는데 뭔지 모르겠음.

// class Human {
//     public name: string;
//     public gender: string;
//     private age : number;
//     constructor(name: string, age: number, gender: string){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }

// }

// // interface Human{
// //     name: string,
// //     gender: string,
// //     age : number
// // }

// // const person ={
// //     name: "Anselmo",
// //     gender: "male",
// //     age:22
// // }

// const anselmo = new Human("Anselmo", 22,"male")

// const sayHi = (person: Human): string => {
//     return(`Hello, ${person.name}, you are ${person.age}, you are a ${person.gender}!`);
// }

// console.log(sayHi(anselmo));

// // export{}; // -> 이거는 에러라고 하는데 뭔지 모르겠음.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import * as CryptoJS from "crypto-js";

class Block{
    public index: number;
    public hash: string;
    public prevhash: string;
    public data: string;
    public timestamp: number;

    static calculateBlockHash = (
        index: number, 
        prevhash: string, 
        timestamp: number, 
        data: string
        ):string => CryptoJS.SHA256(index + prevhash + timestamp + data).toString();
    
    static validateStructure = (aBlock: Block) : boolean => 
    typeof aBlock.index === "number" && 
    typeof aBlock.hash === "string" && 
    typeof aBlock.prevhash === "string" && 
    typeof aBlock.timestamp === "number" && 
    typeof aBlock.data === "string";
    
    constructor(index: number, hash: string, prevhash: string, data: string, timestamp: number){
        this.index = index;
        this.hash = hash;
        this.prevhash = prevhash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock:Block = new Block(0, "2020202020", "", "Hello", 123456);
let blockchain: [Block] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = () : Block => blockchain[blockchain.length -1];

const getNewTimeStamp =(): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string) => {
    const prevBlock : Block = getLatestBlock();
    const newIndex : number = prevBlock.index + 1;
    const newTimeStamp : number = getNewTimeStamp();
    const newHash : string = Block.calculateBlockHash(newIndex, prevBlock.hash, newTimeStamp, data);
    const newBlock : Block = new Block(newIndex, newHash, prevBlock.hash, data, newTimeStamp);
    return newBlock;
}

const isValid = (
    candidateBlock: Block,
    prevBlcok: Block
): boolean => {

}

console.log(createNewBlock("Hello"), createNewBlock("ByeBye"))