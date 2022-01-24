// const content = document.querySelector('p');
// content.className = 'success';

// console.log(content.classList);
// content.classList.add('success');

// My way
// const paras = document.querySelectorAll('p')
// paras.forEach(
//     para => {
//         if(para.innerText.includes('error')){
//             para.classList.add('error');
//         }else if(para.innerText.includes('success')){
//             para.classList.add('success');
//         }
//     }
// )

const paras = document.querySelectorAll("p");
paras.forEach(para => {
  if (para.textContent.includes('error')) {
    para.classList.add("error");
  }
  if (para.textContent.includes('success')) {
    para.classList.add("success");
  }
});

const title = document.querySelector('.title');
title.classList.toggle('test');
title.classList.toggle('test');