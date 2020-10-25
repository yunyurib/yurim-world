//마우스 움직이기
window.addEventListener("mousemove", function (event) {
  let x = event.clientX - 1 + "px";
  let y = event.clientY - 1 + "px";
  let x2 = event.clientX - 10 + "px";
  let y2 = event.clientY - 10 + "px";

  document.querySelector(".cursor").style.cssText = "left:" + x + "; top:" + y;
  document.querySelector(".cursor-follower").style.cssText =
    "left:" + x2 + "; top:" + y2;
  document.querySelector(".cursor-follower").animate([{ left: x2, top: y2 }], {
    duration: 300,
  });
  //todo-class아이디로 바꾸기!!
  //마무리
  document.querySelectorAll(".ab").forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      document.querySelector(".cursor").classList.add("active");
    });
    elem.addEventListener("mouseleave", () => {
      document.querySelector(".cursor").classList.remove("active");
    });
  });
});
