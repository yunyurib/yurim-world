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
  document.querySelector(".s5OT").textContent =
    document.querySelector(".skillBox5").offsetTop + 3800;

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
  if (pageYOffset > document.querySelector(".skillBox5").offsetTop + 3800) {
    document.querySelector(".s5OT").style.color = "red";
  } else {
    document.querySelector(".s5OT").style.color = "black";
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
  if (pageYOffset > document.querySelector(".skillBox5").offsetTop + 3800) {
    document.querySelector(".skillBox5").classList.add("show");
  } else {
    document.querySelector(".skillBox5").classList.remove("show");
  }
  if (pageYOffset > document.querySelector(".skillBox6").offsetTop + 3800) {
    document.querySelector(".skillBox6").classList.add("show");
  } else {
    document.querySelector(".skillBox6").classList.remove("show");
  }
});
