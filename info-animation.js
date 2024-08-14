const infoPic = document.querySelectorAll(".info-pic");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.1,
    // rootMargin: "-100px"
  }
);

infoPic.forEach((infoPic) => {
  observer.observe(infoPic);
});
