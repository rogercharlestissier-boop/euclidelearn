(function () {
  document.querySelectorAll("[data-slideshow]").forEach(function (root) {
    var slides = Array.prototype.slice.call(root.querySelectorAll("img"));
    if (!slides.length) return;
    var dotsWrap = root.querySelector("[data-dots]");
    var prev = root.querySelector("[data-prev]");
    var next = root.querySelector("[data-next]");
    var i = 0;
    var timer;

    function show(n) {
      i = (n + slides.length) % slides.length;
      slides.forEach(function (img, k) {
        img.classList.toggle("is-on", k === i);
      });
      if (dotsWrap) {
        Array.prototype.forEach.call(dotsWrap.children, function (b, k) {
          b.classList.toggle("is-on", k === i);
        });
      }
    }

    if (dotsWrap) {
      slides.forEach(function (_, k) {
        var b = document.createElement("button");
        b.type = "button";
        b.setAttribute("aria-label", "Image " + (k + 1));
        b.addEventListener("click", function () { show(k); restart(); });
        dotsWrap.appendChild(b);
      });
    }

    if (prev) prev.addEventListener("click", function () { show(i - 1); restart(); });
    if (next) next.addEventListener("click", function () { show(i + 1); restart(); });

    function restart() {
      clearInterval(timer);
      timer = setInterval(function () { show(i + 1); }, 4500);
    }
    show(0);
    restart();
  });
})();
