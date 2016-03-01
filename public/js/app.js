$('.collection-item').on('click', function(){

  var $badge = $('.badge', this);

  if($badge.length == 0){
    $badge = $('<span class="badge brown-text">0</span>').appendTo(this);
  }

  $badge.text(parseInt($badge.text()) + 1);

});

$('#confirmar').on('click', function(){

  var text = '';

  $('.badge').parent().each(function(){
    var produto = this.firstChild.textContent;
    var quantidade = this.lastChild.textContent;

    text += produto + ': ' + quantidade + ', ';
  });

  $('#resumo').text(text);
});

$('.modal-trigger').leanModal();

$('.collection').on('click', '.badge',function(){
  $(this).remove();
  return false;
});

$('.acao-limpar').on('click', function(){
  $('#numero-mesa').val('');
  $('.badge').remove();
});

$('.scan-qrcode').on('click', function(){
  cordova.plugins.barcodeScanner.scan(function(resultado){

    if(resultado.text){
      Materialize.toast('Mesa ' + resultado.text, 2000);
      $('#numero-mesa').val(resultado.text);
    }

  }, function(erro){
    Materialize.toast('Erro ' + erro, 2000, 'red-text');
  });
});


$('.acao-finalizar').on('click', function(){
  $.ajax({
    url: 'http://cozinhapp.sergiolopes.org//novo-pedido',
    data: {
      mesa: $('#numero-mesa').val(),
      pedido: $('#resumo').text()
    },
    success: function(resposta){
      Materialize.toast(resposta, 2000);
      $('#numero-mesa').val('');
      $('.badge').remove();
      navigator.vibrate(2000);
    },
    error: function(erro){
      Materialize.toast(erro.responseText, 3000, 'red-text');
    }
  });
});
