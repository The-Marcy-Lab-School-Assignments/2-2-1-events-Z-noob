const incre = () => {
  const results = document.querySelector('#results');
  results.textContent = Number(results.textContent) + 1;
};

main = ()=> {
  const incrementorButton = document.querySelector('#add-one')
  incrementorButton.addEventListener('click', incre)
};

main();