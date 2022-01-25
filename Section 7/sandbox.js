const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e => {
  e.preventDefault();
  const username = form.username.value;
  const userRgx = /^[a-zA-Z]{6,12}$/

  if(userRgx.test(username)){
    // console.log('Username valid!')
    feedback.textContent = 'Username valid!'
  } else{
    feedback.textContent = 'Username must only contain letters and must be 6-12 characters long'
  }
})