const about = document.querySelector("#about");
const event1 = document.querySelector("#event");
const website = document.querySelector("#website");
const main = document.querySelector("#main");
const currentUrl = window.location.href;
if (currentUrl == "http://127.0.0.1:5500/about.html") {
  about.classList.add("active");
} else if (currentUrl == "http://127.0.0.1:5500/index.html") {
  main.classList.add("active");
} else if (currentUrl == "http://127.0.0.1:5500/website.html") {
  website.classList.add("active");
} else {
  event1.classList.add("active");
}