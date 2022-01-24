// const myFunc = (callbackFunc) => {
//     let value = 50;
//     callbackFunc(value)
// }

// myFunc(value => {
//         console.log(value)
//     }
// )

let people = ['zane', 'marc', 'john', 'michael',]

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`)
}
// people.forEach(person => {
//     console.log(person)
// })
 
people.forEach(logPerson)