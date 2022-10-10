const navBar = document.getElementById("menu");
const openNav = document.getElementById("openNav");
showNav = () => {
  // if ((openNav.style.display = "none")) {
  //   openNav.style.display = "block";
  // } else if ((openNav.style.display = "block")) {
  //   openNav.style.display = "none";
  // } else {
  //   openNav.style.display = "none";
  // }
  // openNav.style.display = "none"
  //   ? (openNav.style.display = "block")
  //   : (openNav.style.display = "none");
};
// menu.addEventListener("click", showNav);

menu.addEventListener("click", () => {
  if (openNav.style.display === "none") {
    openNav.style.display = "block";
  } else {
    openNav.style.display = "none";
  }
});

// SLIDER START

// var indexValue = 0;
// function slideShow() {
//   setTimeout(slideShow, 2500);
//   var x;
//   const img = document.querySelectorAll("#slide");
//   for (x = 0; x < img.length; x++) {
//     slide[x].style.display = "none";
//   }
//   indexValue++;
//   if (indexValue > img.length) {
//     indexValue = 1;
//   }
//   slide[indexValue - 1].style.display = "block";
// }
// slideShow();

// SLIDER END
function myFunc() {
  console.log("hello");
}

// ////////////////////////////
/*
 * This Below Code is intented for demo purpose only.
 * Function initializeSlider runs the slider confined with above html format
 * @param selector - required parameter - the target css id of the slider should be passed to this parameter
 * @param interval - optional parameter - This can be used to control the interval between transition
 * @param interval - optional parameter - This can be used to control the  time for transition
 *
 */

function initializeSlider(selector, interval = 2000, transitionDuration = 3) {
  const slider = document.getElementById(selector);
  const sliderWrapper = slider.querySelector(".slider-container");
  let direction;

  sliderWrapper.addEventListener("transitionend", function () {
    sliderWrapper.appendChild(sliderWrapper.firstElementChild);
    sliderWrapper.style.transition = "none";
    sliderWrapper.style.transform = "translate(0)";
    setTimeout(() => {
      sliderWrapper.style.transition = `all ${transitionDuration}s`;
    });
  });

  // Runs The slider in cyclic manner
  setInterval(() => {
    direction = -1;
    slider.style.justifyContent = "flex-start";
    sliderWrapper.style.transform = "translate(-25%)"; // moves the slides
  }, interval);
}

initializeSlider("slider-one");
initializeSlider("slider-two");
initializeSlider("slider-three");
initializeSlider("slider-four");
