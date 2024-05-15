// These are your event handlers
const clickCounterHandler = () => {
  const button = document.querySelector("#click-button"); 
  button.dataset.clicks = Number(button.dataset.clicks) + 1;
  if(Number(button.dataset.clicks)  === 1) button.textContent = `I've been clicked ${button.dataset.clicks} time.`
  else {button.textContent = `I've been clicked ${button.dataset.clicks} times!`};
  // console.log(button.dataset.clicks)
  // console.log(button)
};

const handleKeydown = (e) => {
  const keydown = document.querySelector("#keydown-tracker"); 
  keydown.textContent = `You pressed ${e.code}`;
  // console.log(keydown)
  // console.log(e.code)
};

//For inline
const inlineButtons = () => {
  const inlineButton = document.querySelector('#inline-example');
  inlineButton.dataset.clicks = Number(inlineButton.dataset.clicks) + 1;
  if(Number(inlineButton.dataset.clicks)  === 1) inlineButton.textContent = `I've been clicked ${inlineButton.dataset.clicks} time.`
  else {inlineButton.textContent = `I've been clicked ${inlineButton.dataset.clicks} times!`};
};

// We've started this one for you
const handleDelegation = (event) => {
  const resultSpan = document.querySelector('#delegation-result');
  if (event.target.id === 'up') {resultSpan.textContent = 'Up';}
  if (event.target.id === 'left') {resultSpan.textContent = 'Left';}
  if (event.target.id === 'middle') {resultSpan.textContent = 'Middle';}
  if (event.target.id === 'right') {resultSpan.textContent = 'Right';}
  if (event.target.id === 'down') {resultSpan.textContent = 'Down';}
};

const addNewRandomNumber = () => {
  const numbersUl = document.querySelector('#random-numbers');
  const li = document.createElement('li');
  li.textContent = Math.random();
  numbersUl.append(li);
};

const removeDelegation = (e) => {
  const delegationContainer = document.querySelector('#delegation');
  delegationContainer.removeEventListener('click', handleDelegation)
};
// removeEventListener

// Select the elements and attach your event handlers inside main
const main = () => {
  const delegationContainer = document.querySelector('#delegation');
  delegationContainer.addEventListener('click', handleDelegation);
  const button = document.querySelector("#click-button"); 
  button.addEventListener('click', clickCounterHandler);
  const body = document.querySelector("body");
  body.addEventListener('keydown', handleKeydown);
  const inlineButton = document.querySelector("#inline-example");
  inlineButton.addEventListener('click', inlineButtons);
  const randomNumButton = document.querySelector('#add-random-num');
  randomNumButton.addEventListener('click', addNewRandomNumber);
  const removeDelegationButton = document.querySelector('#remove');
  removeDelegationButton.addEventListener('click', removeDelegation);
};

main();
