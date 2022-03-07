document.addEventListener('DOMContentLoaded', () => {
  let slides = document.querySelectorAll('#slider .slide')
  let currentSlide = 0;

  const nextButton = document.querySelector('.button-right')
  const prevButton = document.querySelector('.button-left')

  function nextSlide() {
    slides[currentSlide].className = 'slide'

    currentSlide = (currentSlide + 1) % slides.length

    slides[currentSlide].className = 'slide showing'
  }
  function prevSlide() {
    slides[currentSlide].className = 'slide'

    currentSlide = (currentSlide - 1) % slides.length

    if (currentSlide === -1) {
      currentSlide = slides.length - 1
    }
    slides[currentSlide].className = 'slide showing'
  }

  nextButton.addEventListener('click', () => {
    nextSlide();
  })

  prevButton.addEventListener('click', () => {
    prevSlide();
  })

  function positionSliderButton() {
    let slider = document.querySelector('.slide-text')
    let sliderHeight = slider.getBoundingClientRect().height
    let buttons = document.querySelectorAll('.slider-button')

    buttons.forEach(button => {
      let buttonHeight = button.getBoundingClientRect().height
      button.style.top = ((sliderHeight - buttonHeight) / 2).toString() + 'px'
    })
  }

  positionSliderButton();
  window.addEventListener('resize', () => {
    positionSliderButton()
  })
})
