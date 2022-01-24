const content = document.querySelector('#content')
console.log(content)
const people = [{name:'Zane', title: 'Birkett'}, {name: 'John', title: 'Smith'}]

people.forEach(
    person => {
        content.innerHTML += `<h1>${person.name} ${person.title}</h1>`
    }
)