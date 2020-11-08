(function () {
  function toggleClass(element, CCSclass) {
    if (element.classList.contains(CCSclass)) {
      element.classList.remove(CCSclass);
    } else {
      element.classList.add(CCSclass);
    }
  }
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);
  const $$burgers = $$(".burger");
  $$burgers.forEach(($burger) => {
    if ($burger.classList.contains("burger--animated")) {
      $burger.addEventListener("click", function () {
        if (this.classList.contains("idle")) {
          toggleClass(this, "idle");
          toggleClass(this, "activating");
        }
        if (this.classList.contains("activated")) {
          toggleClass(this, "activated");
          toggleClass(this, "going-idle");
        }
      });
      $burger.addEventListener("animationend", function () {
        if (this.classList.contains("activating")) {
          toggleClass(this, "activating");
          toggleClass(this, "activated");
        }
        if (this.classList.contains("going-idle")) {
          toggleClass(this, "going-idle");
          toggleClass(this, "idle");
        }
      });
    } else {
      $burger.addEventListener("click", function () {
        if (this.classList.contains("idle")) {
          toggleClass($burger, "idle");
          toggleClass($burger, "activated");
        } else {
          toggleClass($burger, "activated");
          toggleClass($burger, "idle");
        }
      });
    }
  });
})();
