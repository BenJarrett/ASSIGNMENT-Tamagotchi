let fun = 50;

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
  fun += 10;
  if (fun > 100) {
    fun = 100;
  }
  addOrSubFun();
};

export { slightlyFun, superFun };
