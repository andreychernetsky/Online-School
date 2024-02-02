// const btn = document.querySelector('#nav-toggle');
// const aside = document.querySelector('.sidebar');

// btn.addEventListener('click',()=>{
//   aside.classList.toggle('active');
// });

const overlay = document.querySelector('.overlay');
const btn = document.querySelector('#nav-toggle');
const aside = document.querySelector('#sidebar');

btn.addEventListener('click',()=>{
  aside.classList.add('open');
  overlay.classList.add('open');
});
overlay.addEventListener('click',()=>{
  aside.classList.remove('open');
  overlay.classList.remove('open');
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

const anchors = document.querySelectorAll("a[href*='#'");
for(let anchor of anchors){
  anchor.addEventListener('click',(e)=>{
    e.preventDefault();
    const blocID  = anchor.getAttribute('href');
    document.querySelector(''+blocID).scrollIntoView({
      behavior:'smooth',
      block:'start'
    })
  });
}

const topButton = document.querySelector('.topButton');

const btnScroll = ()=>{
  const scrolled = window.scrollY;
  const chord = document.documentElement.clientHeight;

  if(scrolled>chord){
    topButton.classList.add('topButton__show');
  }
  if(scrolled<chord){
    topButton.classList.remove('topButton__show');
  }
}
const backTop = ()=>{
  if(window.scrollY>0){
    window.scrollBy({
      top: 100,
      behavior: "smooth",
    });
    setTimeout(backTop, 0)
  }
}
window.addEventListener('scroll', btnScroll);
topButton.addEventListener('click', backTop);


