export const getFruitsData = (key) => {
  let fruitsArr = [
    'Apple',
    'Banana',
    'appain',
    'Mango',
    'PineApple',
    'Strawberry',
    'Watermellon',
    'Pappaya',
  ];

  let filterData = fruitsArr.filter((item) =>
    item.toLowerCase().includes(key.toLowerCase())
  );
  return new Promise((res) => {
    setTimeout(() => {
      if (key && res) {
        console.log('key', key);
        return res(filterData);
      } else {
        console.log('key', []);
        return res([]);
      }
    });
  }, 1000);
};

export const debounce = (fn, delay = 500) => {
  let timerCtx;
  return function () {
    const self = this;
    const args = arguments;
    clearTimeout(timerCtx);
    timerCtx = setTimeout(() => fn.apply(self, args), delay);
  };
};
