let full = 100;

const addOrSub = () => {
  document.querySelector('#food-choice').innerHTML = full;
};

const unHealthyFood = () => {
  full -= 3;
  if (full <= 0) {
    full = 0;
  }
  addOrSub();
};

const healthyFood = () => {
  full += 10;
  if (full > 100) {
    full = 100;
  }
  addOrSub();
};

export { unHealthyFood, healthyFood };
