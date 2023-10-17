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

let elCarForm = document.querySelector(".form__carusel");
let elContactC = document.querySelector(".carusel__contact");
let elServiceC = document.querySelector(".carusel__services");
let elBudgetC = document.querySelector(".carusel__bud ");
let elCheekC = document.querySelector(".carusel__cheek ");
let elNameWr = document.querySelector(".contact__name-wrapper");
let elEmailWr = document.querySelector(".contact__email-wrapper");
let elTelWr = document.querySelector(".contact__tel-wrapper");
let elContactName = document.querySelector(".contact__name");
let elContactEmail = document.querySelector(".contact__email");
let elContactTel = document.querySelector(".contact__tel");
let elContactCompany = document.querySelector(".contact__com");
let elBack = document.querySelector(".back");
let elNext = document.querySelector(".next");

elCarForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let contactName = elContactName.value.trim();
  let contactEmail = elContactEmail.value.trim();
  let contactTel = elContactTel.value.trim();
  let contactCompany = elContactCompany.value.trim();

  if (contactName.length < 2) {
    elNameWr.classList.add("error");
    return;
  } else {
    elNameWr.classList.remove("error");
  }

  if (contactName.length > 30) {
    elNameWr.classList.add("error");
    return;
  } else {
    elNameWr.classList.remove("error");
  }

  for (let a = 0; a < contactName.length; a++) {
    if (
      contactName[a] == "0" ||
      contactName[a] == "1" ||
      contactName[a] == "2" ||
      contactName[a] == "3" ||
      contactName[a] == "4" ||
      contactName[a] == "5" ||
      contactName[a] == "6" ||
      contactName[a] == "7" ||
      contactName[a] == "8" ||
      contactName[a] == "9"
    ) {
      elNameWr.classList.add("error");
      return;
    } else {
      elNameWr.classList.remove("error");
    }
  }
 
  if (
    contactEmail.endsWith("@gmail.com") ||
    contactEmail.endsWith("@mail.ru")
  ) {
    elEmailWr.classList.remove("error");
    return;
  } else {
    elEmailWr.classList.add("error");
  }
});
