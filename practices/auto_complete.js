import { getFruitsData, debounce } from '../utils/getFruitsData.js';
const input = document.getElementById('auto-input');
const suggestionBox = document.getElementById('suggestion-wrapper');
const suggestionFrag = document.createDocumentFragment();

const restSuggestionWrapper = () => {
  suggestionBox.classList.remove('suggestion-wrapper-visible');
};

const addSuggestionList = (list = []) => {
  if (list.length > 0) {
    console.log(list);
    list.forEach((item) => {
      let el = document.createElement('div');
      el.classList.add('list-item');
      el.addEventListener('click', selectInputValue);
      el.innerHTML = item;
      suggestionFrag.appendChild(el);
    });
    console.log(suggestionFrag);
    suggestionBox.innerHTML = '';
    suggestionBox.appendChild(suggestionFrag);
    suggestionBox.classList.add('suggestion-wrapper-visible');
  } else {
    restSuggestionWrapper();
  }
};

const handleChange = (event) => {
  let inputVal = event.target.value;
  console.log('let', inputVal);
  getFruitsData(inputVal).then((res) => addSuggestionList(res));
};

const selectInputValue = (event) => {
  event.target.classList.add('selected');
  let selectedVal = event.target.innerHTML;
  input.value = selectedVal;
  restSuggestionWrapper();
};

(() => {
  input.addEventListener('input', debounce(handleChange, 1500));
})();
