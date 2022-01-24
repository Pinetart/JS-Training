const ul = document.querySelector('ul');
const button = document.querySelector('button');
const listNodes = document.querySelectorAll('li');

button.addEventListener('click',() => {
    // ul.innerHTML += '<li>Something new</li>'
    const li = document.createElement('li');
    li.textContent = 'Something new';
    ul.append(li)
})

listNodes.forEach(node => {
        node.addEventListener('click', () => {
        // node.style.textDecoration = 'line-through';
        node.remove();
    })
})