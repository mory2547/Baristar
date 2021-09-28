const slideBtn1 = document.getElementsByClassName('slide_btn')[0];
const slideBtn2 = document.getElementsByClassName('slide_btn')[1];
const slideBtn3 = document.getElementsByClassName('slide_btn')[2];
const slideContainer = document.querySelector('.slide_container');

function slideHandler(width) {
  slideContainer.style.transform = 'translate(-' + width + 'px)';
}
function slide(event) {
  let footerItem = document.getElementsByClassName('footer_item')[2].offsetWidth;
  clearInterval(autoSlideTime);
  if(event.target === slideBtn1){
    slideHandler(0);
  } else if(event.target === slideBtn2) {
    slideHandler(footerItem-1);
  } else {
    slideHandler((footerItem-1)*2);
  }
}
function autoSlide() {
  let footerItem = document.getElementsByClassName('footer_item')[2].offsetWidth;
  if(slideContainer.style.transform === 'translate(0px)' || slideContainer.style.transform === '') {
    slideHandler(footerItem-1);
  } else if(slideContainer.style.transform === 'translate(-' + (footerItem-1) + 'px)') {
    slideHandler((footerItem-1)*2);
  } else {
    slideHandler(0);
  }
}
function intervalSlide() {
  autoSlideTime = setInterval(autoSlide, 4000);
}

intervalSlide();
slideBtn1.addEventListener('click', slide);
slideBtn2.addEventListener('click', slide);
slideBtn3.addEventListener('click', slide);
