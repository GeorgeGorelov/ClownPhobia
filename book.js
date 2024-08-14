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

// Claendar
// JavaScript for Calendar
document.addEventListener("DOMContentLoaded", function () {
  const dateElement = document.getElementById("date");
  const prevButton = document.querySelector(
    ".calendar-header button:first-child"
  );
  const nextButton = document.querySelector(
    ".calendar-header button:last-child"
  );
  const days = document.querySelectorAll(".day");
  const times = document.querySelectorAll(".time");

  let currentDate = new Date();

  // Update calendar display
  function updateCalendar() {
    dateElement.textContent = currentDate.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  }

  // Change month
  prevButton.addEventListener("click", function () {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
  });

  nextButton.addEventListener("click", function () {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
  });

  // Select a day
  days.forEach((day) => {
    day.addEventListener("click", function () {
      const activeDay = document.querySelector(".active-day");
      if (activeDay) {
        activeDay.classList.remove("active-day");
      }
      day.classList.add("active-day");
    });
  });

  // Select a time
  times.forEach((time) => {
    time.addEventListener("click", function () {
      const activeTime = document.querySelector(".active-time");
      if (activeTime) {
        activeTime.classList.remove("active-time");
      }
      time.classList.add("active-time");
    });
  });

  // Initial calendar setup
  updateCalendar();
});

// combo box
document.addEventListener("DOMContentLoaded", () => {
  const comboBox = document.getElementById("combo-box");
  let selectedValue = comboBox.value;

  // Update variable when the selection changes
  comboBox.addEventListener("change", (event) => {
    selectedValue = event.target.value;
    console.log("Selected value:", selectedValue);
  });
});

// slide 1 info
document.addEventListener("DOMContentLoaded", function () {
  // Calendar selection
  const days = document.querySelectorAll(".day");
  const times = document.querySelectorAll(".time");

  days.forEach((day) => {
    day.addEventListener("click", function () {
      const month = document.getElementById("date").textContent.trim();
      const selectedDay = day.textContent;
      console.log(`Selected Date: ${month} ${selectedDay}`);
    });
  });

  times.forEach((time) => {
    time.addEventListener("click", function () {
      const selectedTime = time.textContent;
      console.log(`Selected Time: ${selectedTime}`);
    });
  });

  // Combo box selection
  const comboBox = document.getElementById("combo-box");
  comboBox.addEventListener("change", function (event) {
    const selectedOption = event.target.value;
    console.log(`Selected Option: ${selectedOption}`);
  });
});

//Slide 3 info
// document.addEventListener("DOMContentLoaded", function () {
//   // Function to handle next button click in slide2
//   // const nextButton = document.querySelector("#slide2 .button.next");
const nextButton = document.getElementById("save-slide2");
//   if (nextButton) {

// Retrieve input values
//
// Log values to console
//   }
// });

// slide 3 info display
// document.addEventListener("DOMContentLoaded",

//
// Function to handle next button click in slide2
// const nextButtonSlide2 = document.querySelector("#slide2 .button.next");
// const nextButton = document.getElementById("save-slide3");
// if (nextButtonSlide2) {
//   nextButtonSlide2.addEventListener("click", function () {
// Retrieve input values from slide2
// const numOfParticipants = document.querySelector(
//   ".num-of-participants"
// ).value;
// const name = document.getElementById("name").value;
// const email = document.getElementById("Email").value;
// const phone = document.getElementById("Phone").value;
let nextAction = () => {
  const numOfParticipants = document.querySelector(
    ".num-of-participants"
  ).value;
  const name = document.getElementById("name");
  const email = document.getElementById("Email");
  const phone = document.getElementById("Phone");
  console.log("Name Value", name.value);
  console.log(`Number of Participants: ${numOfParticipants}`);
  console.log(`Name: ${name.value}`);
  console.log(`Email: ${email.value}`);
  console.log(`Phone: ${phone.value}`);

  // Update divs in slide3 with captured values
  document.getElementById(
    "Participant-number"
  ).innerHTML = `Number of Participants: ${numOfParticipants}`;
  // document.getElementById("Name-Display");
  let nameDisplay = document.getElementById("Name-Display");
  nameDisplay.innerHTML = `Name: ${name.value}`;
  document.getElementById("Email-Display").innerHTML = `Email: ${email.value}`;
  document.getElementById("Phone-Display").innerHTML = `Phone: ${phone.value}`;
  // });
  console.log(nameDisplay, "nameDisplay");
  console.log(nameDisplay, "HEEEEEEEEEYYYYYY");
};
//Next button Event listener
nextButton.addEventListener("click", nextAction);

// Function to handle next button click in slide3
const nextButtonSlide3 = document.querySelector("#slide3 .button.next");
if (nextButtonSlide3) {
  nextButtonSlide3.addEventListener("click", function () {
    // Retrieve selected room and date-time values from slide1 and slide2 (if needed)
    const selectedRoom = document.getElementById("combo-box").value;
    const selectedDateTime =
      document.querySelector(".active-day").textContent +
      " " +
      document.querySelector(".active-time").textContent;

    // Update divs in slide3 with captured values
    document.getElementById(
      "room-num"
    ).innerHTML = `Room Selected: ${selectedRoom}`;
    document.getElementById(
      "date-and-time"
    ).innerHTML = `Date and Time: ${selectedDateTime}`;
  });
}
