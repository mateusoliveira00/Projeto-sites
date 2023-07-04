
      // Remove qualquer caractere não numérico
      function validarNumerico(input) {
        input.value = input.value.replace(/[^0-9]/g, ''); 

        var maximoPermitido = 12;
        var valor = parseInt(input.value);

        if (valor > maximoPermitido) {
          input.value = maximoPermitido;
          exibirMensagem('O máximo permitido é 12 meses');
        } else {
          limparMensagem();
        }
      }

      function exibirMensagem(mensagem) {
        var mensagemElemento = document.getElementById('mensagem');
        mensagemElemento.textContent = mensagem;
      }

      function limparMensagem() {
        var mensagemElemento = document.getElementById('mensagem');
        mensagemElemento.textContent = '';
      }
      //////////////////////////////////////////////////////////////
      // Função para calcular o orçamento final
      function calcularOrcamento() {
        var tipoPaginaSelect = document.getElementById("tipoPagina");
        var tipoPaginaOption = tipoPaginaSelect.options[tipoPaginaSelect.selectedIndex];
        var tipoPaginaValor = parseInt(tipoPaginaOption.dataset.valor);

        var prazoMeses = document.getElementById("prazoMeses").value;
        var separadores = document.querySelectorAll('input[name="separadores"]:checked');

        var orcamentoBase = tipoPaginaValor; // Orçamento base é o valor do tipo de página selecionado
        var desconto = prazoMeses > 0 ? Math.min(prazoMeses * 5, 20) : 0; // Cálculo do desconto
        var custoSeparadores = separadores.length * 400; // Custo dos separadores

        var orcamentoFinal = orcamentoBase - (orcamentoBase * (desconto / 100)) + custoSeparadores;

        document.getElementById("resultado").value = +orcamentoFinal + " euros";
      }
      //////////////////////////////////////////////////////////////
      // Eventos para recalcular quando os campos mudarem
      document.getElementById("tipoPagina").addEventListener("change", calcularOrcamento);
      document.getElementById("prazoMeses").addEventListener("input", calcularOrcamento);
      document.querySelectorAll('input[name="separadores"]').forEach(function (separador) {
        separador.addEventListener("change", calcularOrcamento);
      });
      //////////////////////////////////////////////////////////////
      // Chamar a função inicialmente para exibir o resultado inicial
      calcularOrcamento();
    