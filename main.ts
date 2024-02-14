// function greet(person: string, data: Date) {
//     console.log(`Hello ${person}, today is ${data.toDateString()}!`)
// }

// greet('Matt', new Date())

// async function fn(x: Array<number>): Promise<number> {
//     return x.length 
// }

// let firstName: string = 'Matt'

// console.log(fn([1, 2, 3, 4, 5]))

type Point =  {
    x: number
    y: number
    //z is optional
    z? : number
}

function printCoord(pt: Point ) {
    console.log(`The coord X is ${pt.x}`)
    console.log(`The coord Y is ${pt.y}`)
    if (pt.z) {
    console.log(`The coord Z is ${pt.z}`)
    }
}

printCoord({ x: 3, y: 7, z: 3 })

// | This pipe in is called union 
// void type means return nothing
const printId = (id: number | string): void => {
    console.log(`Your ID is: ${id}`)
}

const input = '12345'
// printId(parseInt(input)) Bad way
printId(input)
printId(789)

// console.log(0x2A)

enum Sizes {
    XS,
    S,
    M,
    L,
    XL
}
interface TShirt {
    color: string
    size: Sizes
}

const item: TShirt = { color: 'white', size: Sizes.M }

console.log(Sizes)

interface Animal {
    name: string
    age: number
}

// inherits data type
interface Dog extends Animal {
    breed: string
}

let ted: Dog = {
    name: 'Ted',
    age: 15,
    breed: "Border Collie"
}
