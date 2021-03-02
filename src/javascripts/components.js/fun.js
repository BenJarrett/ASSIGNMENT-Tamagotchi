let fun = 50;
const funn = fun;

const addOrSubFun = () => {
  document.querySelector('#play-fun').innerHTML = fun;
};

const slightlyFun = () => {
  fun += 2;
  if (fun > 100) {
    fun = 100;
  }

  addOrSubFun();
};

const superFun = () => {
  fun += 50;
  if (fun > 100) {
    fun = 100;
  }
  addOrSubFun();
};

export { slightlyFun, superFun, funn };
