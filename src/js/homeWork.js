"use strict";

const priceList = {
  "сайт-визитка": 1,
  "интернет-магазин": 2,
  "корпоративный-сайт": 3,
  шаблонный: 1,
  уникальный: 2,
  "wow-дизайн": 3,
  пк: 1,
  мобильный: 2,
  "пк и мобильный": 3,
};
let answerList = [];

function getWebsitePrice() {
  let answer = prompt(
    "Тип сайта: сайт-визитка, интернет-магазин, корпоративный-сайт"
  );
  while (!priceList.hasOwnProperty(answer.toLowerCase())) {
    answer = prompt(
      "Нужно выбрать один из типов: сайт-визитка, интернет-магазин, корпоративный-сайт"
    );
  }
  const websitePrice = priceList[answer.toLowerCase()];
  answerList.push(websitePrice);
}

function getDesignPrice() {
  let answer = prompt("Дизайн сайта: шаблонный, уникальный, wow-дизайн");
  while (!priceList.hasOwnProperty(answer.toLowerCase())) {
    answer = prompt(
      "Нужно выбрать один из вариантов: шаблонный, уникальный, wow-дизайн"
    );
  }
  const designPrice = priceList[answer.toLowerCase()];
  answerList.push(designPrice);
}

function getAdaptivePrice() {
  let answer = prompt("Адаптивность сайта: ПК, мобильный, ПК и мобильный");
  while (!priceList.hasOwnProperty(answer.toLowerCase())) {
    answer = prompt(
      "Нужно выбрать один из вариантов: ПК, мобильный, ПК и мобильный"
    );
  }
  const adaptivePrice = priceList[answer.toLowerCase()];
  answerList.push(adaptivePrice);
}

function getResult() {
  getWebsitePrice();
  getDesignPrice();
  getAdaptivePrice();
  const result = answerList.reduce((a, b) => a + b, 0);
  alert(`Стоимость работы составит ${result} руб.`);
}
getResult();
