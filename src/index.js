const btnChooseCity = document.querySelector('.j-btn-select_city');
const btnChangeCity = document.querySelector('.j-btn-change_city');

const selectCityArea = document.querySelector('.j-select_cities-form');
const changeCityArea = document.querySelector('.j-change_cities-area');

const selectCityForm = document.querySelector('.j-select-cities');

const selectCityText = document.querySelector('.j-city_choose-text');
const changeCityText = document.querySelector('.j-city_change-text');

let selectValue = null;

const checkValueAtMoment = () => {
  selectValue = selectCityForm.value;
};

const getCookie = (name) => {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

document.addEventListener('DOMContentLoaded', () => {
  if(document.cookie) {
    selectCityArea.style.display = 'none';
    changeCityArea.style.display = 'inline';

    let userCity = getCookie('city');

    selectCityText.innerText = `Ваш город: ${userCity}`;
  }
});

btnChooseCity.addEventListener('click', () => {
  checkValueAtMoment();
  if (selectValue !== 'Choose...') {
    selectCityArea.style.display = 'none';
    changeCityArea.style.display = 'inline';
    document.cookie = `city=${selectValue}; max-age=31536000`;
    selectCityText.innerText = `Ваш город: ${selectValue}`;
  }
});

btnChangeCity.addEventListener('click', () => {
  document.cookie = 'city=none; max-age=0';
  changeCityArea.style.display = 'none';
  changeCityText.innerText = 'Город успешно сброшен';
});
