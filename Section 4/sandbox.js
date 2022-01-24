const ul = document.querySelector('.people')

const people = ['zane', 'marc', 'john', 'michael',]

let html = ` `;

people.forEach(person => {
    // Create HTML template
    html += `<li style="color:purple">${person}</li>`;
})

console.log(html);
ul.innerHTML = html;