document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  if (toggle && header) {
    toggle.addEventListener("click", function () {
      header.classList.toggle("nav-open");
    });
  }

  // Community field filter (client-side, no build step required)
  var chips = document.querySelectorAll(".chip[data-field]");
  var entries = document.querySelectorAll(".node-entry[data-field]");
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) { c.classList.remove("is-active"); });
      chip.classList.add("is-active");
      var field = chip.getAttribute("data-field");
      entries.forEach(function (entry) {
        var show = field === "all" || entry.getAttribute("data-field") === field;
        entry.style.display = show ? "" : "none";
      });
    });
  });
});
