const incre = () => {
  const results = document.querySelector('#results');
  results.textContent = Number(results.textContent) + 1;
};

const main = ()=> {
  const incrementorButton = document.querySelector('#add-one')
  incrementorButton.addEventListener('click', incre)
};

main();