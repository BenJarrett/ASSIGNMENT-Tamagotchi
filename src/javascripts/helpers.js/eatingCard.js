import printToDom from './printToDom';
import { healthyFood, unHealthyFood } from '../components.js/eat';

const full = 100;

const foodChoice = () => {
  let eatingCard = '';
  eatingCard += `<h1>EAT</h1>
  <div> Fullness Score:
  <div id="food-choice" class="text-center">${full}</div>
  <button type="button" id="addFood" class="btn btn-outline-success shadow-sm btn-light"> <div class="fa fa-heart"</div> Healthy Food</button>
  <button type="button" id="subtractFood" class="btn btn-outline-danger shadow-sm btn-light"> <div class="fa fa-heart-broken"</div> Unhealthy</button> 
  </div>
  `;
  printToDom('#eat', eatingCard);

  document.querySelector('#addFood').addEventListener('click', healthyFood);
  document.querySelector('#subtractFood').addEventListener('click', unHealthyFood);
};

export default foodChoice;
