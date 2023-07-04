
        $(document).ready(function() {
            $('#carregarDepoimentoBtn').click(function() {
                carregarDepoimento();
            });
    
            function carregarDepoimento() {
                $.ajax({
                    url: 'depoimentos.html', // URL dos depoimentos
                    type: 'GET',
                    dataType: 'html',
                    success: function(response) {
                        // Selecionar um depoimento aleatório da resposta recebida
                        var depoimentos = $(response).find('.depoimento');
                        var numDepoimentos = depoimentos.length;
                        var depoimentoAleatorio = Math.floor(Math.random() * numDepoimentos);
                        var depoimento = depoimentos.eq(depoimentoAleatorio).clone();
    
                        // Substituir o conteúdo do depoimento atual com o depoimento selecionado
                        $('#depoimentoAtual').html(depoimento);
                    },
                    error: function() {
                        // Tratar erros, se necessário
                        console.log('Erro ao carregar o depoimento.');
                    }
                });
            }
        });
    