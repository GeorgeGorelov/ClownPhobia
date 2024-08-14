const flames = document.querySelector(".header-Flames"); //Flames
const clowns = document.querySelector(".header-Clowns"); //clowns
const flames2 = document.querySelector(".header-Flames2"); //Flames2

document.addEventListener("scroll", function () {
  let value = window.scrollY;
  flames2.style.marginBottom = -value * 0.8 + "px";

  clowns.style.marginBottom = -value * 1.2 + "px";

  if (window.innerWidth < 1000) {
    flames.style.marginBottom = value / 15 + "px";
  } else {
    flames.style.marginBottom = value / 5 + "px";
  }
});

//scroll animation

const anmtn = document.querySelectorAll(".js-show-animation");
const firstRoom = document.querySelector(".room1");
const thirddRoom = document.querySelector(".room3");

window.addEventListener("scroll", animFunc);

animFunc();

function animFunc() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  anmtn.forEach((am) => {
    const boxTop = am.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      am.classList.add("show");
    } else {
      am.classList.remove("show");
    }
  });

  // Handle firstRoom
  const firstRoomTop = firstRoom.getBoundingClientRect().top;
  if (firstRoomTop < triggerBottom) {
    firstRoom.classList.add("show");
  } else {
    firstRoom.classList.remove("show");
  }

  // Handle secondRoom
  const thirdRoomTop = thirddRoom.getBoundingClientRect().top;
  if (thirdRoomTop < triggerBottom) {
    thirddRoom.classList.add("show");
  } else {
    thirddRoom.classList.remove("show");
  }
}
