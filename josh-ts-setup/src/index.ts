import fs from 'fs';

function add(a : number , b : number){
    return a+b;
}

fs.writeFileSync("test.txt","Manav");
console.log(add(5,6));