let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  if (index >= totalSlides) {
    currentSlide = totalSlides - 1;
  } else if (index < 0) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }

  const offset = -currentSlide * 100;
  //   document.querySelector(".slides").style.transform = `translateX(${offset}%)`;

  slides.forEach((slide, i) => {
    slide.classList.toggle("hide", i !== currentSlide);
  });
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function previousSlide() {
  showSlide(currentSlide - 1);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
});
