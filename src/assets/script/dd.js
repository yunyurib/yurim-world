window.addEventListener("scroll", () => {
  let pageYOffset = window.pageYOffset;
  // + screen.height/2
  //console.log(parseInt(pageYOffset));

  //출력용
  document.querySelector(".pageYOffset").textContent = parseInt(pageYOffset);
  document.querySelector(".s1OT").textContent =
    document.querySelector(".skillBox1").offsetTop - 750;
  document.querySelector(".s2OT").textContent =
    document.querySelector(".skillBox2").offsetTop - 600;
  document.querySelector(".s3OT").textContent =
    document.querySelector(".skillBox3").offsetTop - 633;
  document.querySelector(".s4OT").textContent =
    document.querySelector(".skillBox4").offsetTop - 1063;

  //출력용 - 레드용
  if (pageYOffset > document.querySelector(".skillBox1").offsetTop - 750) {
    document.querySelector(".s1OT").style.color = "red";
  } else {
    document.querySelector(".s1OT").style.color = "black";
  }
  if (pageYOffset > document.querySelector(".skillBox2").offsetTop - 600) {
    document.querySelector(".s2OT").style.color = "red";
  } else {
    document.querySelector(".s2OT").style.color = "black";
  }
  if (pageYOffset > document.querySelector(".skillBox3").offsetTop - 633) {
    document.querySelector(".s3OT").style.color = "red";
  } else {
    document.querySelector(".s3OT").style.color = "black";
  }
  if (pageYOffset > document.querySelector(".skillBox4").offsetTop - 1063) {
    document.querySelector(".s4OT").style.color = "red";
  } else {
    document.querySelector(".s4OT").style.color = "black";
  }

  //나타나기
  if (pageYOffset > document.querySelector(".skillBox1").offsetTop - 750) {
    document.querySelector(".skillBox1").classList.add("show");
  } else {
    document.querySelector(".skillBox1").classList.remove("show");
  }
  if (pageYOffset > document.querySelector(".skillBox2").offsetTop - 600) {
    document.querySelector(".skillBox2").classList.add("show");
  } else {
    document.querySelector(".skillBox2").classList.remove("show");
  }
  if (pageYOffset > document.querySelector(".skillBox3").offsetTop - 633) {
    document.querySelector(".skillBox3").classList.add("show");
  } else {
    document.querySelector(".skillBox3").classList.remove("show");
  }
  if (pageYOffset > document.querySelector(".skillBox4").offsetTop - 1063) {
    document.querySelector(".skillBox4").classList.add("show");
  } else {
    document.querySelector(".skillBox4").classList.remove("show");
  }
  // if (pageYOffset > document.getElementById("section5").offsetTop) {
  //   document.getElementById("section5").classList.add("show");
  // } else {
  //   document.getElementById("section5").classList.remove("show");
  // }
  // if (pageYOffset > document.getElementById("section6").offsetTop) {
  //   document.getElementById("section6").classList.add("show");
  // } else {
  //   document.getElementById("section6").classList.remove("show");
  // }
  // if (pageYOffset > document.getElementById("section7").offsetTop) {
  //   document.getElementById("section7").classList.add("show");
  // } else {
  //   document.getElementById("section7").classList.remove("show");
  // }
  // if (pageYOffset > document.getElementById("section8").offsetTop) {
  //   document.getElementById("section8").classList.add("show");
  // } else {
  //   document.getElementById("section8").classList.remove("show");
  // }
  // if (pageYOffset > document.getElementById("section9").offsetTop) {
  //   document.getElementById("section9").classList.add("show");
  // } else {
  //   document.getElementById("section9").classList.remove("show");
  // }
});
