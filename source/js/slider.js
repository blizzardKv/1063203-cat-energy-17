var buttonBefore = document.querySelector('.slider__button-before');
var buttonAfter = document.querySelector('.slider__button-after');
var slideBefore = document.querySelector('.slider__image-divider-before');
var slideAfter = document.querySelector('.slider__image-divider-after');
var imageBefore = document.querySelector('.slider__image-before');
var imageAfter = document.querySelector('.slider__image-after');

buttonBefore.addEventListener('click', function () {
  if (slideAfter.classList.contains('slider--displayed')){
    slideAfter.classList.remove('slider--displayed');
    slideAfter.classList.add('slider--not-displayed');
    slideBefore.classList.remove('slider--not-displayed');
    slideBefore.classList.add('slider--displayed');
  }
  else {
    slideAfter.classList.add('slider--not-displayed');
    slideBefore.classList.remove('slider--not-displayed');
    slideBefore.classList.add('slider--displayed');
  }
});

buttonAfter.addEventListener('click', function () {
  if (slideBefore.classList.contains('slider--displayed')){
    slideBefore.classList.remove('slider--displayed');
    slideBefore.classList.add('slider--not-displayed');
    slideAfter.classList.remove('slider--not-displayed');
    slideAfter.classList.add('slider--displayed');
  }
  else {
    slideBefore.classList.add('slider--not-displayed');
    slideAfter.classList.remove('slider--not-displayed');
    slideAfter.classList.add('slider--displayed');
  }
});
