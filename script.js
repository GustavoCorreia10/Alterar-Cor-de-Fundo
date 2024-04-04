// JS
// Capturando o elemento de entrada de cor
var colorPicker = document.getElementById('colorPicker');

// Adicionando um ouvinte de evento para quando a cor é alterada
colorPicker.addEventListener('input', function() {
  // Alterando a cor de fundo da página para a cor selecionada
  document.body.style.backgroundColor = colorPicker.value;
});