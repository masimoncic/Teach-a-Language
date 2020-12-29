function randomizeInputButtons () {
  //button 1
  const loopInput1 = document.getElementById('loop-input1');
  const loopInput2 = document.getElementById('loop-input2');
  const loopInput3 = document.getElementById('loop-input3');
  const loopInput4 = document.getElementById('loop-input4');
  const loopInput5 = document.getElementById('loop-input5');
  const loopButton = document.getElementById('loop-button');
  if (Math.random > 0.5) {
    //might have to add and remove input elements
    //loopInput1.innerText = 'Teach a noun';
    //loopInput1.addEventListener('click', () => loop.functionFinder = 0)
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    // unneeded? input.id = 'loop-input1';
    input.addEventListener('click', () => loop.functionFinder = 0)
  }
}