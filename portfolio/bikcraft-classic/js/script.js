new SimpleSlide({
  slide: 'quote', // nome do atributo data-slide="principal"
  time: 5000, // tempo de transição dos slides
  pauseOnHover: true, // pausa a transição automática
});
new SimpleSlide({
  slide: 'container',
  time: 5000,
  pauseOnHover: true,
});

if(window.SimpleForm) {
  new SimpleForm({
    form: ".formphp", // seletor do formulário
    button: "#enviar", // seletor do botão
    erro: "<div id='form-erro'><h2>Erro no envio!</h2><p>Um erro ocorreu, tente contato diretamente para rodrigo.hickenbick@gmail.com</p></div>", // mensagem de erro
    sucesso: "<div id='form-sucesso'><h2>Mensagem enviada com sucesso!</h2><p>Em breve entraremos em contato com você.</p></div>", // mensagem de sucesso
  });
}
