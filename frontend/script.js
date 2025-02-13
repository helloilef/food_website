const loginBtn = document.getElementById("login");
const closeBtn = document.querySelector(".close-btn");
const loginForm = document.getElementById("login-form");
const cookBtn = document.getElementById("cook-btn");
const dynamicCook = document.getElementById("dynamic-cook");
const sectionContainer = document.querySelector(".section-container");

loginBtn.addEventListener("click", () => {
  loginForm.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  loginForm.style.display = "none";
});

cookBtn.addEventListener("click", (event) => {
  event.preventDefault();
  fetch("cook.html")
    .then((response) => response.text())
    .then((data) => {
      dynamicCook.innerHTML = data;
      sectionContainer.style.display = "none";
    })
    .catch((error) => {
      console.log(error);
    });
});
