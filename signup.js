const form = document.querySelector("form");
const submitButon = document.getElementById("submit-btn");
const imageIdPreview = document.querySelector(".imageId-preview");
const fileSelect = document.querySelector(".selectImage");
const fileElem = document.getElementById("imageId");

//
getLocation();
// CREATING A FORM OBJECT
const formData = new FormData(form);

// EVERYTHING ABOUT LOCATION
function getLocation() {
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;
      console.log(latitude, longitude);
      try {
        const response = await fetch(
          `https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=580068640110746556894x99219`
        );
        const data = await response.json();
        console.log(data);
        const { city, region } = data;
        form.address.value = `${city}, ${region}`;
      } catch (err) {
        form.address.value = "Error loading your current location";
      }
    },
    (err) => {
      console.log(err);
    }
  );
}

// // SELECTING USER IMAGE ID

fileSelect.addEventListener(
  "click",
  (e) => {
    if (fileElem) {
      fileElem.click();
    }
  },
  false
);

fileElem.addEventListener("change", (e) => {
  //   console.log(e.target.files);
  handleFiles();
});

function handleFiles() {
  const curfile = fileElem.files;
  if (curfile !== 0) {
    for (const file of curfile) {
      const image = document.createElement("img");
      image.src = URL.createObjectURL(file);
      imageIdPreview.innerHTML = "";
      imageIdPreview.appendChild(image);
      submitButon.removeAttribute("disabled");
    }
  }
}

// HANDLING BUTTON CLICK
submitButon.addEventListener("click", (e) => {
  // e.preventDefault();
  signup(e);
  // getMainPage(signup(e));
});

async function signup(ev) {
  ev.preventDefault();
  const formData = new FormData(form);
  const curfile = fileElem.files;
  const newForm = {
    fullName: "",
    email: "",
    password: "",
    address: "",
    imageId: "",
    phone: "",
  };
  console.log(newForm);
  // CREATING A USER OBJECT TO BE SENT TO SERVER
  newForm.fullName = form.fullName.value;
  newForm.email = form.email.value;
  newForm.password = form.password.value;
  newForm.address = form.address.value;
  newForm.phone = form.phone.value;
  // newForm.imageId = form.img.src;
  for (const file of curfile) {
    newForm.imageId = URL.createObjectURL(file);
  }
  try {
    const response = await fetch("http://localhost:8080/api/renters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newForm),
    });
    const data = await response.json();
    console.log(data);
    if (data.userExist == false) {
      const { email, fullName, phone } = data.user;
      const { userExist } = data;
      if (userExist == false) {
        location.assign(
          `http://localhost:8080/user?email=${email}&name=${fullName}&phone=${phone}`
        );
      }
    } else {
      const emailError = `<small>${data.user.customer_email} already in use</small>`;
      const phoneError = `<small>${data.user.customer_phone} already in use</small>`;
      if (
        newForm.email == data.user.customer_email &&
        newForm.phone == data.user.customer_phone
      ) {
        document.querySelectorAll(".error").forEach((errBox) => {
          errBox.classList.remove("disabled");
        });
        document.querySelector(".email-error").innerHTML = emailError;
        document.querySelector(".phone-error").innerHTML = phoneError;
      } else if (newForm.email == data.user.customer_email) {
        document.querySelector(".email-error").innerHTML = emailError;
        document.querySelector(".email-error").classList.remove("disabled");
      } else if (newForm.phone == data.user.customer_phone) {
        document.querySelector(".phone-error").innerHTML = phoneError;
        document.querySelector(".phone-error").classList.remove("disabled");
      }
    }
  } catch (err) {
    console.log(err);
  }
}

function getMainPage(data) {
  console.log(data);
}
