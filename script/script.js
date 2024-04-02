// const btn = document.querySelector('#nav-toggle');
// const aside = document.querySelector('.sidebar');

// btn.addEventListener('click',()=>{
//   aside.classList.toggle('active');
// });

const overlay = document.querySelector('.overlay');
const aside = document.querySelector('.sidebar');
const btn = document.querySelector('#nav-toggle');

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

// const topButton = document.querySelector('.topButton');

// const btnScroll = ()=>{
//   const scrolled = window.scrollY;
//   const chord = document.documentElement.clientHeight;

//   if(scrolled>chord){
//     topButton.classList.add('topButton__show');
//   }
//   if(scrolled<chord){
//     topButton.classList.remove('topButton__show');
//   }
// }
// const backTop = ()=>{
//   if(window.scrollY>0){
//     window.scrollBy({
//       top: 100,
//       behavior: "smooth",
//     });
//     setTimeout(backTop, 0)
//   }
// }
// window.addEventListener('scroll', btnScroll);
// topButton.addEventListener('click', backTop);

const btnModal = document.querySelectorAll('[data-modal]');

const modal = document.querySelectorAll('.modal');

btnModal.forEach((item)=> {
 item.addEventListener('click',(e)=>{
    const target = e.currentTarget;

    const modalAtt  = target.getAttribute('data-modal');
    const modalId = document.getElementById(modalAtt);
    const modalContent = modalId.querySelector('.modal__content');

    modalContent.addEventListener('click',(e)=>{
        e.stopPropagation();
    })
    modalId.classList.add('show');
 });
});

modal.forEach((item)=>{
 item.addEventListener('click',(e)=>{
  let clickModal = e.currentTarget;
  closeModel(clickModal);
 });
});

function closeModel(click){
 click.classList.remove('show');
}

// scrollBtn
// 2) Подготавливаем необходимый код в HTML CSS
//3 Создаем переменную. Задача после 100 показывать кнопку
//4 Создаем переменную для прокрутки пасса
// 5)Создаем переменную scrollUpSvgPath
//6) Помещаем в переменную pathLength прокрутку пасса по окну windows
// 7) Обращаемся к стилям css scrollUpSvgPath
// 8) Пропишем плавность прокрутки через transititon
//9)Навесим на функцию scrollUp обработчик, который по клику, будет делать скролл вверх
//10 Опишем функцию скролла по окну windows
//11) Напишем условие
// 12)Функция,которая делает заливку пасса по мерре движения страницы вниз
// 13)
// 14)Опишем работу функции getTop
// 15)
// 16) Разница между высотой скролла и окна браузера

const offset = 100;//3
const scrollUp = document.querySelector('.scroll-up');//4
const scrollUpSvgPath=document.querySelector('.scroll-up__svg-path');//5
const pathLength = scrollUpSvgPath.getTotalLength();//6

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;//7
scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms';//8

const getTop = ()=>window.pageYOffset || document.documentElement.scrollTop;//14
//updateDashofffset
const updateDashoffset = ()=>{//12
  const heigth = document.documentElement.scrollHeight-window.innerHeight;//16
  const dashoffset = pathLength - (getTop()*pathLength/heigth);//15

  scrollUpSvgPath.style.strokeDashoffset = dashoffset;//17
}
//onScroll
window.addEventListener('scroll',()=>{//10
  updateDashoffset();//эта функция,которая будет отвечать на сколько надо залить наш svg
  if(getTop()>offset){//11,13
    scrollUp.classList.add('scroll-up--active');
  } else {
    scrollUp.classList.remove('scroll-up--active');
  }
});

//click
scrollUp.addEventListener('click',()=>{//9
  window.scrollTo({
    top:0,
    behavior:'smooth'//отвечает за плавную прокрутку
  });
});