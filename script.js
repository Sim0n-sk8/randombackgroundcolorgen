function getRandomColor() {

  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  document.body.style.backgroundColor = randomColor;
  document.getElementById('color-code').textContent = randomColor;
  const button = document.getElementById('generate-btn');
  button.style.backgroundColor = randomColor;

}


document.getElementById('generate-btn').addEventListener('click', getRandomColor);
