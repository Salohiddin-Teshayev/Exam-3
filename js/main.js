let elForms = document.querySelector(".js-hero__form");
let elFormsFirstName = document.querySelector(".js__form--first--name");
let elFormsLastName = document.querySelector(".js__form--last--name");
let elFormsEmail = document.querySelector(".js__form--email");
let elFormsPass = document.querySelector(".js__form--pass");
let elFormsRepeatPass = document.querySelector(".js__form--repeat--pass");
let elFormsGender = document.querySelector(".js__form--gender");
let elFormsBirthday = document.querySelector(".js_form--birthday");
let elFormsCheck = document.querySelector(".js-hero__form--check");
let elFormsFeedBack = document.querySelector(".js-feedback");

// Array.prototype.slice.call(elForms).forEach(function (form) {
//   form.addEventListener("submit", function (evt) {
//     if (!form.checkValidity()) {
//       evt.preventDefault();
//       evt.stopPropagation();
//     }
//     form.classList.add("was-validated");
//     false
//   });
// });

elForms.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const firstName = elFormsFirstName.value.trim();
  const lastName = elFormsLastName.value.trim();
  const email = elFormsEmail.value.trim();
  const pass = elFormsPass.value.trim();
  const passRepeat = elFormsRepeatPass.value.trim();
  const gender = elFormsGender.value;
  const birthday = elFormsBirthday.value;

  if (!isNaN(firstName)) {
    elFormsFirstName.classList.add("input-border");
    elFormsFeedBack.classList.remove("d-none");
    elFormsFeedBack.classList.add("d-block");
    return;
  }
  if (!isNaN(lastName)) {
    elFormsLastName.classList.add("input-border");
    elFormsFeedBack.classList.remove("d-none");
    elFormsFeedBack.classList.add("d-block");
    return;
  }

  if (firstName.length < 2 || firstName.length > 30) {
    elFormsFirstName.classList.add("input-border");
    elFormsFeedBack.classList.remove("d-none");
    elFormsFeedBack.classList.add("d-block");
    return;
  }
  if (lastName.length < 2 || lastName.length > 30) {
    elFormsLastName.classList.add("input-border");
    elFormsFeedBack.classList.remove("d-none");
    elFormsFeedBack.classList.add("d-block");
    return;
  }

  if (!email.endsWith("@gmail.com") && !email.endsWith("@gmail.ru")) {
    elFormsEmail.classList.add("input-border");
    elFormsFeedBack.classList.remove("d-none");
    elFormsFeedBack.classList.add("d-block");
    return;
  } else {
    elFormsFeedBack.classList.add("d-none");
    elFormsFirstName.classList.remove("input-border");
    elFormsLastName.classList.remove("input-border");
    elFormsEmail.classList.remove("input-border");
    return;
  }

  // if (passwordValue.length < 8 || !isNaN(passwordValue)) {
  //   alert("Parol uzunligi 8tadan kam bo'lmasligi kerak va Harf bo'lishi kerak");
  //   return;
  // }
});
