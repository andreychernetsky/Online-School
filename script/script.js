const btn = document.querySelector('#nav-toggle');
const aside = document.querySelector('.sidebar');

btn.addEventListener('click',()=>{
  aside.classList.toggle('active');
});

const allButtonAcc = document.querySelectorAll('.accordion__btn');
allButtonAcc.forEach(btn=>btn.addEventListener('click',()=>{
  const openPanel = btn.nextElementSibling.classList.contains('accordion__btn--open');
  if(openPanel){
    closeAcc(btn.nextElementSibling);
  }else{
    allButtonAcc.forEach(x=>closeAcc(x.nextElementSibling));
    openAcc(btn.nextElementSibling)
  }
}));
const closeAcc = (item)=>{
  item.classList.remove('accordion__btn--open');
  item.style.maxHeight = '0';
  item.style.padding = '0';
}
const openAcc = (item)=>{
  item.classList.add('accordion__btn--open');
  item.style.maxHeight = item.scrollHeight + 'px';
  item.style.padding = '1rem 0 1rem 0';
}
