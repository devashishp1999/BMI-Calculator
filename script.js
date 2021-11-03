`use strict`;

let dMass = document.querySelector(`#mass`);
let dHeight = document.querySelector(`#height`);
const button = document.querySelector(`#ok`);
let score = document.querySelector(`#score`);
const box = document.querySelector(`.box`);
const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const closeBtn = document.querySelector(`.close-modal`);
let msg = document.querySelector(`.message`);

const bmi = (m, h) => Math.round(m / h ** 2).toFixed(2);

const showModal = function (mass, height) {
  score.textContent = bmi(mass, height);
  box.style.visibility = `hidden`;
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
  msg.style.display = `none`;
};

const removeModal = function () {
  box.style.visibility = `visible`;
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

const message = function () {
  msg.style.display = `flex`;
  msg.style.marginTop = `3px`;
  msg.textContent = `*Both firlds should be filled`;
  button.style.marginTop = `4px`;
  dHeight.style.marginBottom = `0px`;
};

button.addEventListener(`click`, function () {
  const mass = Number(dMass.value);
  const height = Number(dHeight.value);
  !mass || !height ? message() : showModal(mass, height);
});

document.addEventListener(`keypress`, function (e) {
  const mass = Number(dMass.value);
  const height = Number(dHeight.value);
  if (e.key === `Enter` && (!mass || !height)) message();
  else if (e.key === `Enter` && box.style.visibility === `visible`) {
    showModal(mass, height);
    msg.style.display = `none`;
  } else removeModal();
});

closeBtn.addEventListener(`click`, removeModal);
overlay.addEventListener(`click`, removeModal);
document.addEventListener(`keydown`, function (e) {
  if (e.key === `Escape`) {
    removeModal();
  }
});
