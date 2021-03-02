import printToDom from './printToDom';
import { slightlyFun, superFun } from '../components.js/fun';

const fun = 50;

const playValue = () => {
  let playCard = '';
  playCard += `<h1>PLAY</h1>
  <div> Fun:
  <div id="play-fun" class="column"> <h1>${fun}</h1></div>
  <button type="button" id="addSuperFun" class="btn btn-light btn btn-outline-primary" style="6rem"> <div class="fa fa-gamepad"</div> Super Fun </button>
  <button type="button" id="addSlightlyFun" class="btn btn-light btn btn-outline-secondary"> <div class="fa fa-puzzle-piece" </div> Slightly Fun</button>
  </div>
  `;
  printToDom('#play', playCard);

  document.querySelector('#addSuperFun').addEventListener('click', superFun);
  document.querySelector('#addSlightlyFun').addEventListener('click', slightlyFun);
};

export default playValue;
