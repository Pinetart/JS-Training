const link = document.querySelector('a');
console.log(link.getAttribute('href'));

link.setAttribute('href', 'thenetninja.co.uk');
console.log(link.getAttribute("href"));

const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'))
mssg.setAttribute('class','success')
mssg.setAttribute('style', 'color:green;');