
        $(document).ready(function() {
            $('#carregarDepoimentoBtn').click(function() {
                carregarDepoimento();
            });
    
            function carregarDepoimento() {
                $.ajax({
                    url: 'depoimentos.html',
                    type: 'GET',
                    dataType: 'html',
                    success: function(response) {
                      
                        var depoimentos = $(response).find('.depoimento');
                        var numDepoimentos = depoimentos.length;
                        var depoimentoAleatorio = Math.floor(Math.random() * numDepoimentos);
                        var depoimento = depoimentos.eq(depoimentoAleatorio).clone();
    
                      
                        $('#depoimentoAtual').html(depoimento);
                    },
                    error: function() {
                       
                        console.log('Erro ao carregar o depoimento.');
                    }
                });
            }
        });
    