const FIELDSET = document.querySelectorAll("fieldset");
const RADIO_INPUTS = document.querySelectorAll("input[type='radio']");
const SELECT = document.querySelector("select");
const SCORE = document.querySelector(".score-no");
const SUBMIT = document.querySelector(".submit");
const POPUP = document.querySelector(".popup");
const POPUP_TEXT = document.querySelector(".popup-text");
const CLOSE_POPUP_BTN = document.querySelector(".close-btn");

// DO NOT SEND FORM RESULT
SUBMIT.addEventListener("click", (e) => e.preventDefault());

// SHOW RESULT
function showResult() {
  POPUP.classList.toggle("show");
}
SUBMIT.addEventListener("click", showResult);

// CLOSE POPUP
function closePopup() {
  {
    POPUP.classList.add("hide");
    setTimeout(() => {
      POPUP.classList.remove("show");
      POPUP.classList.remove("hide");
    }, 1000);
  }
}
// close popup with button
CLOSE_POPUP_BTN.addEventListener("click", closePopup);
// close popup with esc key
document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" || e.code === 27) {
    closePopup();
  }
});

// REQUIRED FIELDS CHECK

SUBMIT.addEventListener("click", () => {
  let radio_checked = 0;
  RADIO_INPUTS.forEach((e) => {
    if (e.checked) {
      radio_checked += 1;
    }
  });
  if (radio_checked != 3 || (SELECT.value !== "w" && SELECT.value !== "m")) {
    alert("Zaznacz wszystkie odpowiedzi.");
    POPUP.classList.remove("show");
  }
});

// CHECK RESULT

function result() {
  let points = 0;
  RADIO_INPUTS.forEach((e) => {
    if (e.checked) {
      points += parseInt(e.value);
    }
  });

  if (SELECT.value === "w") {
    if (points < 4) {
      POPUP_TEXT.innerText = "Nie masz problemu z alkoholem.";
    } else if (points === 4) {
      POPUP_TEXT.innerText =
        "Bądź ostrożna. Wynik testu wskazuje na to, że możesz mieć początki problemu z alkoholem.";
    } else {
      POPUP_TEXT.innerText =
        "Powinnaś ograniczyć spożywanie alkoholu i poszukać pomocy. Masz problem z alkoholem.";
    }
  }

  if (SELECT.value === "m") {
    if (points < 5) {
      POPUP_TEXT.innerText = "Nie masz problemu z alkoholem.";
    } else if (points === 5) {
      POPUP_TEXT.innerText =
        "Bądź ostrożny. Wynik testu wskazuje na to, że możesz mieć początki problemu z alkoholem.";
    } else {
      POPUP_TEXT.innerText =
        "Powinieneś ograniczyć spożywanie alkoholu i poszukać pomocy. Masz problem z alkoholem.";
    }
  }

  SCORE.innerText = ` ${points} `;
}

SUBMIT.addEventListener("click", result);
