const faqs = document.querySelectorAll(".question_container");

// faqs.forEach((faq) => {
//   faq.addEventListener("click", () => {
//     faq.classList.toggle("FAQactive");
//   });
// });

// faqs.forEach((faq) => {
//   faq.addEventListener("click", (evt) => {
//    evt.PreventDefault()
//    if evt.targrt = ""
//     faqs.forEach((f) => {
//       if (f !== faq) {
//         f.classList.remove("FAQactive");
//       }
//     });
//     faq.classList.toggle("FAQactive");
//   });
// });

// faqs.forEach((faq) => {
//   faq.addEventListener("click", (evt) => {
//     console.log(evt.target);
//     faqs.forEach((f) => {
//       if (f !== faq) {
//         f.classList.remove("FAQactive");
//       }
//     });
//     faq.classList.toggle("FAQactive");
//   });
// });

faqs.forEach((faq) => {
  const content = faq.querySelector(".content");

  faq.addEventListener("click", () => {
    if (faq.classList.contains("FAQactive")) {
      // Closing
      content.style.transition = "max-height 0.1s ease-in-out";
      faq.classList.remove("FAQactive");
    } else {
      // Opening
      content.style.transition = "max-height 0.5s ease-in-out";
      faqs.forEach((f) => {
        if (f !== faq) {
          f.classList.remove("FAQactive");
        }
      });
      faq.classList.add("FAQactive");
    }
  });
});

// Animation
const QContainer = document.querySelectorAll(".question_container");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 1,
    // rootMargin: "-100px"
  }
);

QContainer.forEach((QContainer) => {
  observer.observe(QContainer);
});
