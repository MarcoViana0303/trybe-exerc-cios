

 function enviando(event) {
    event.preventDefault();
}

window.onload = function () {
    const clearBtn = document.querySelector('#botaoLimpar');
    clearBtn.addEventListener('click', limparTudo);
    const submitBtn = document.querySelector("#botaoEnviar");
    submitBtn.addEventListener('click', enviando);
  };

  function limparTudo() {
    const elementoFormulario = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');
    for (let index = 0; index < elementoFormulario.length; index += 1) {
      const userInput = elementoFormulario[index];
      userInput.value = '';
      userInput.checked = false;
    }
    textArea.value = '';
  }
