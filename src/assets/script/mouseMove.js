let scrollTopValue = 0;

function cursorEvent(dataXValue, dataYValue) {
  let pageXValue = dataXValue;
  let pageYValue = dataYValue - scrollTopValue;
  let cursorXValue = pageXValue - 50 + "px";
  let cursorYValue = pageYValue - 50 + "px";
  let cursorFollowerXValue = pageXValue - 15 + "px";
  let cursorFollowerYValue = pageYValue - 15 + "px";
  document.querySelector(".cursor").style.cssText =
    "left:" + cursorXValue + "; top:" + cursorYValue;
  document.querySelector(".cursor-follower").style.cssText =
    "left:" + cursorFollowerXValue + "; top:" + cursorFollowerYValue;
  document
    .querySelector(".cursor-follower")
    .animate([{ left: cursorFollowerXValue, top: cursorFollowerYValue }], {
      duration: 300,
    });
  document.querySelectorAll("a").forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      document.querySelector(".cursor-hover").classList.add("active");
    });
    elem.addEventListener("mouseleave", () => {
      document.querySelector(".cursor-hover").classList.remove("active");
    });
  });
  document.querySelectorAll("a").forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      document.querySelector(".cursor-hover02").classList.add("active");
    });
    elem.addEventListener("mouseleave", () => {
      document.querySelector(".cursor-hover02").classList.remove("active");
    });
  });
}

window.addEventListener("mousemove", function (event) {
  cursorEvent(event.pageX, event.pageY);
});
window.addEventListener("scroll", function () {
  const docScrollTopValue = document.getElementsByTagName("html")[0].scrollTop;
  scrollTopValue = docScrollTopValue;
});
