'use strict';

const aboutLeftButton = document.querySelector(".about-carousel-button.left");
const aboutRightButton = document.querySelector(".about-carousel-button.right");

const aboutCarouselNavigation = document.querySelector('.about-carousel-navigation');

const aboutCarouselItems = Array.from(document.querySelectorAll(".about-carousel-item"));

const aboutNavigationItems = Array.from(document.querySelectorAll('.about-navigation-item'));

const ABOUT_LENGTH = aboutCarouselItems.length;

aboutLeftButton.addEventListener('click', aboutSwipe);
aboutRightButton.addEventListener('click', aboutSwipe);

aboutCarouselNavigation.addEventListener('click', aboutNavigation);

const logoLeftButton = document.querySelector(".logo-carousel-button.left");
const logoRightButton = document.querySelector(".logo-carousel-button.right");

const logoCarouselNavigation = document.querySelector('.logo-carousel-navigation');

const logoCarouselItems = Array.from(document.querySelectorAll(".logo-carousel-item"));

const logoNavigationItems = Array.from(document.querySelectorAll('.logo-navigation-item'));

const LOGO_LENGTH = logoCarouselItems.length;

logoLeftButton.addEventListener('click', logoSwipe);
logoRightButton.addEventListener('click', logoSwipe);

logoCarouselNavigation.addEventListener('click', logoNavigation);


function aboutSwipe(e){
  const currentCarouselItem = document.querySelector('.about-carousel-item.active');

  const currentIndex = aboutCarouselItems.indexOf(currentCarouselItem);

  let nextIndex;

  if(e.currentTarget.classList.contains('left')){
    if(currentIndex === 0) {
      nextIndex = ABOUT_LENGTH - 1;
    }else{
      nextIndex = currentIndex - 1;
    }
  }
  else{
    if(currentIndex === ABOUT_LENGTH - 1){
      nextIndex = 0;
    }else{
      nextIndex = currentIndex + 1;
    }
  }

  aboutCarouselItems[nextIndex].classList.add('active');
  aboutNavigationItems[nextIndex].classList.add('active');

  currentCarouselItem.classList.remove('active');
  aboutNavigationItems[currentIndex].classList.remove('active');
}

function logoSwipe(e){
  const logoCarouselItem = document.querySelector('.logo-carousel-item.active');

  const currentIndex = logoCarouselItems.indexOf(logoCarouselItem);

  let nextIndex;

  if(e.currentTarget.classList.contains('left')){
    if(currentIndex === 0) {
      nextIndex = LOGO_LENGTH - 1;
    }else{
      nextIndex = currentIndex - 1;
    }
  }
  else{
    if(currentIndex === LOGO_LENGTH - 1){
      nextIndex = 0;
    }else{
      nextIndex = currentIndex + 1;
    }
  }

  logoCarouselItems[nextIndex].classList.add('active');
  logoNavigationItems[nextIndex].classList.add('active');

  logoCarouselItem.classList.remove('active');
  logoNavigationItems[currentIndex].classList.remove('active');
}


function aboutNavigation(e){

  if(!e.taget.classList.contains('about-navigation-item')) {
    return;
  }

  else if(e.target.classList.contains('active')){
    return

  }else{
    const currentNavigationItem = document.querySelector('.about-navigation-item.active');

    const currentIndex = aboutNavigationItems.indexOf(currentNavigationItem);

    const nextIndex = aboutNavigationItems.indexOf(e.target);

    currentNavigationItem.classList.remove('active');
    aboutCarouselItems[currentIndex].classList.remove('active');

    e.target.classList.add('active');
    aboutCarouselItems[nextIndex].classList.add('active');
  }
}

function logoNavigation(e){
  if(e.target.classList.contains('active')){
    return
  }else{
    const currentNavigationItem = document.querySelector('.logo-navigation-item.active');

    const currentIndex = logoNavigationItems.indexOf(currentNavigationItem);

    const nextIndex = logoNavigationItems.indexOf(e.target);

    currentNavigationItem.classList.remove('active');
    logoCarouselItems[currentIndex].classList.remove('active');

    e.target.classList.add('active');
    logoCarouselItems[nextIndex].classList.add('active');
  }
}