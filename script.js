(function () {
  var BUSINESS_EMAIL = "kumaradityasingh101@gmail.com";

  var toggle = document.querySelector(".menu-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  var form = document.getElementById("contactForm");
  var status = document.getElementById("formStatus");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var d = new FormData(form);
      var body = [
        "Name: " + d.get("name"),
        "Institution: " + (d.get("institution") || "-"),
        "Email: " + d.get("email"),
        "Need: " + d.get("service"),
        "",
        d.get("message") || ""
      ].join("\n");
      var subject = "Enquiry from " + d.get("name") + " - " + d.get("service");
      window.location.href = "mailto:" + BUSINESS_EMAIL +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
      if (status) status.textContent = "Your email app should open with the message ready. If it does not, write to " + BUSINESS_EMAIL + ".";
    });
  }
})();
