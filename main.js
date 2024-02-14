"use strict";
// function greet(person: string, data: Date) {
//     console.log(`Hello ${person}, today is ${data.toDateString()}!`)
// }
function printCoord(pt) {
    console.log(`The coord X is ${pt.x}`);
    console.log(`The coord Y is ${pt.y}`);
    if (pt.z) {
        console.log(`The coord Z is ${pt.z}`);
    }
}
printCoord({ x: 3, y: 7, z: 3 });
// | This pipe in is called union 
// void type means return nothing
const printId = (id) => {
    console.log(`Your ID is: ${id}`);
};
const input = '12345';
// printId(parseInt(input)) Bad way
printId(input);
printId(789);
// console.log(0x2A)
var Sizes;
(function (Sizes) {
    Sizes[Sizes["XS"] = 0] = "XS";
    Sizes[Sizes["S"] = 1] = "S";
    Sizes[Sizes["M"] = 2] = "M";
    Sizes[Sizes["L"] = 3] = "L";
    Sizes[Sizes["XL"] = 4] = "XL";
})(Sizes || (Sizes = {}));
const item = { color: 'white', size: Sizes.M };
console.log(Sizes);
let ted = {
    name: 'Ted',
    age: 15,
    breed: "Border Collie"
};
