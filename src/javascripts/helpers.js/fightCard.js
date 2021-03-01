import printToDom from './printToDom';
import { runAway, committingViolence } from '../components.js/fight';

const strength = 100;

const fighting = () => {
  let fightCard = '';
  fightCard += `<h1>FIGHT</h1>
  <div id="run-violence" class="text-center">${strength}</div>
  <br/><button type="button" id="runAway" class="btn btn-light btn btn-outline-info"> <div class="fa fa-hand-peace"</div> Run Away</button>
  <button type="button" id="committingViolence" class="btn btn-light btn-outline-danger"> <div class="fa fa-frown"</div> Commit Violence</button>
  `;
  printToDom('#fight', fightCard);

  document.querySelector('#runAway').addEventListener('click', runAway);
  document.querySelector('#committingViolence').addEventListener('click', committingViolence);
};

export default fighting;
