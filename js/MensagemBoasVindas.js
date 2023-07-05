 
  function exibirMensagemBoasVindas() {
    alert("Bem-vindo ao meu Website");
  }


  function aguardarExibirMensagem() {
    setTimeout(exibirMensagemBoasVindas, 5000);
  }

  
  window.addEventListener("load", aguardarExibirMensagem);

