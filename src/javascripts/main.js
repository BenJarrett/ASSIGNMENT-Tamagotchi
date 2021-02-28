import '../styles/main.scss';
import foodChoice from './helpers.js/eatingCard';
import fighting from './helpers.js/fightCard';
import playValue from './helpers.js/playCard';

const init = () => {
  foodChoice();
  playValue();
  fighting();
};

init();
