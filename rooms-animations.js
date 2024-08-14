document.addEventListener("DOMContentLoaded", function () {
  const boxRooms = document.querySelectorAll(".rooms-box");

  function checkBoxes() {
    const triggerBottom = window.innerHeight * 1;

    boxRooms.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
        // box.classList.add("rooms-box");
      }
    });
  }

  window.addEventListener("scroll", checkBoxes);
  checkBoxes();
});
