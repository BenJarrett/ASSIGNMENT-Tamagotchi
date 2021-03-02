import printToDom from './printToDom';
import { sleepTime, napTime, energyVar } from '../components.js/sleep';

// const energy = 50;

const energyValue = () => {
  let energyCard = '';
  energyCard += `<h1>SLEEP</h1>
  <div> Energy:
  <div id="energy-value" class="text-center"> <h1>${energyVar}<h1> </div>
  <button type="button" id="napTime" class="btn btn-light shadow-sm"> <div class=" fa fa-battery-three-quarters"</div> Nap Time</button>
  <button type="button" id="sleepTime" class="btn btn-light shadow-sm"> <div class="fa fa-bed"</div> Sleep Time</button>
  </div> 
  `;
  printToDom('#sleep', energyCard);

  document.querySelector('#napTime').addEventListener('click', sleepTime);
  document.querySelector('#sleepTime').addEventListener('click', napTime);
};

export default energyValue;
