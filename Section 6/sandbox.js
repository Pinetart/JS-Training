const button = document.querySelector('button')

button.addEventListener('click',() =>{
    console.log('You clicked me')
})

const listNodes = document.querySelectorAll('li');
listNodes.forEach(node => {
    node.addEventListener('click', () => {
    // console.log('item clicked')
    // console.log(e.target)
    // console.log(node)
    node.style.textDecoration = 'line-through';
})
})