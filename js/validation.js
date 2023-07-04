$(document).ready(function() {
  $.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[A-Za-z]+$/i.test(value);
  }, "Insira apenas letras.");

  $("#formCadastro").validate({
    rules: {
      nome: {
        required: true,
        minlength: 3,
        maxlength: 100,
        lettersonly: true
      },
      tel: {
        required: true,
        digits: true,
        minlength: 9,
        maxlength: 11
      }
    },
    messages: {
      nome: {
        required: "Por favor, insira um nome.",
        minlength: "Insira um nome com pelo menos 3 caracteres.",
        maxlength: "Insira um nome com no máximo 100 caracteres."
      },
      tel: {
        required: "Por favor, insira um número de telefone.",
        digits: "Insira apenas dígitos.",
        minlength: "Insira um número de telefone válido.",
        maxlength: "Insira um número de telefone válido."
      }
    },
    errorElement: "span",
    errorClass: "error-message",
    errorPlacement: function(error, element) {
      error.insertAfter(element);
    }
  });
});
