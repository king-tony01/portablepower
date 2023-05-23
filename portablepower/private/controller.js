import uis from "./components.js"; //Importing the uis from the components.js file

const parentContainer = document.querySelector(".main");
const navigation = document.getElementById("navigation");

navigation.addEventListener("click", (e) => {
  try {
    //1) Getting the tab that is clicked
    const currentNav = e.target.closest("li").dataset.id;

    // 2)Checking for logout tab and logging out
    if (currentNav == "logout") {
      location.replace("../public/index.html");
      return;
    }

    // 3) Finding the ui ID that matches the clicked tab dataset
    const appropriateUi = uis.find((ui) => {
      return ui.id == currentNav;
    });

    // 4) Rendering the appropriate ui
    parentContainer.innerHTML = appropriateUi.data;
  } catch (err) {
    // Handling errors
    parentContainer.innerHTML = `<div class="error">
          <div>
            <i class="fas fa-triangle-exclamation"></i>
            <b>Something really bad happened somewhere</b>
          </div>
        </div>`;
  }
});
