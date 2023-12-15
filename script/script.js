const btn = document.querySelector('#nav-toggle');
const aside = document.querySelector('.sidebar');

btn.addEventListener('click',()=>{
  aside.classList.toggle('active');
});
