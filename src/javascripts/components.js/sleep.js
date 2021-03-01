let energy = 50;

const addOrSubEnergy = () => {
  document.querySelector('#energy-value').innerHTML = energy;
};

const napTime = () => {
  energy += 50;
  if (energy <= 0) {
    energy = 0;
  } else if (energy > 100) {
    energy = 100;
  }
  addOrSubEnergy();
};

const sleepTime = () => {
  energy += 60;
  if (energy > 100) {
    energy = 100;
  } else if (energy <= 0) {
    energy = 0;
  }
  addOrSubEnergy();
};

export { napTime, sleepTime };
