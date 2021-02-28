let strength = 100;

const addOrSubStrength = () => {
  document.querySelector('#run-violence').innerHTML = strength;
};

const runAway = () => {
  strength += 1;
  if (strength > 100) {
    strength = 100;
  }

  addOrSubStrength();
};

const committingViolence = () => {
  strength -= 10;
  if (strength > 100) {
    strength = 100;
  } else if (strength <= 0) {
    strength = 0;
  }
  addOrSubStrength();
};

export { runAway, committingViolence };
