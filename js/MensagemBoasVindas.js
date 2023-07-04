  // Função para exibir o alerta de boas-vindas
  function exibirMensagemBoasVindas() {
    alert("Bem-vindo ao meu Website");
  }

  // Função para aguardar 5 segundos e chamar a função de exibir mensagem de boas-vindas
  function aguardarExibirMensagem() {
    setTimeout(exibirMensagemBoasVindas, 5000);
  }

  // Chamar a função para aguardar 5 segundos e exibir a mensagem de boas-vindas
  window.addEventListener("load", aguardarExibirMensagem);

