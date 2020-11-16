//마우스 움직이기
window.addEventListener("mousemove", function (event) {
  let x = event.clientX - 50 + "px";
  let y = event.clientY - 50 + "px";
  let x2 = event.pageX - 15 + "px";
  let y2 = event.pageY - 15 + "px";
  document.querySelector(".cursor").style.cssText = "left:" + x + "; top:" + y;
  document.querySelector(".cursor-follower").style.cssText =
    "left:" + x2 + "; top:" + y2;
  document.querySelector(".cursor-follower").animate([{ left: x2, top: y2 }], {
    duration: 300,
  });
  //todo-class아이디로 바꾸기!!
  //마무리
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
});
