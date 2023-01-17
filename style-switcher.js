const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});

const men = document.querySelectorAll(".all");
const menw = document.querySelectorAll(".men-w");

const scrolla = document.querySelector(".scroll-a");
const scrolls = document.querySelector(".scroll-s");
const scrollp = document.querySelector(".scroll-p");
const scrollc = document.querySelector(".scroll-c");

console.log(scrolla.offsetTop);
console.log(document.body.scrollTop);
// document.body.scrollTop;

window.addEventListener("scroll", function () {
  let scrollPosition = window.pageYOffset;

  if (scrollPosition >= 0) {
    men.forEach((e) => {
      menw.forEach((el) => {
        el.classList.remove("active");
      });
    });

    this.document.querySelector(".hom").classList.add("active");
    console.log("work");
  }
  if (scrollPosition >= 700) {
    men.forEach((e) => {
      menw.forEach((el) => {
        el.classList.remove("active");
      });
    });

    this.document.querySelector(".abo").classList.add("active");
    console.log("work");
  }

  if (scrollPosition >= 1900) {
    men.forEach((e) => {
      menw.forEach((el) => {
        el.classList.remove("active");
      });
    });

    this.document.querySelector(".ser").classList.add("active");
    console.log("work");
  }

  if (scrollPosition >= 2700) {
    men.forEach((e) => {
      menw.forEach((el) => {
        el.classList.remove("active");
      });
    });

    this.document.querySelector(".por").classList.add("active");
    console.log("work");
  }

  if (scrollPosition >= 3900) {
    men.forEach((e) => {
      menw.forEach((el) => {
        el.classList.remove("active");
      });
    });

    this.document.querySelector(".con").classList.add("active");
    console.log("work");
  }
});
