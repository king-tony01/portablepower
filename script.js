const modal = document.querySelector(".modal");
const buttons = document.querySelectorAll(".signup");
const getStarted = document.getElementById("getStarted");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("active");
  });
});

modal.addEventListener("click", () => {
  modal.classList.remove("active");
});
