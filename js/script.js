var player;
var endGame;

function novoJogo() {
  $('#t1 td').html('');
  $('#t1 tr').removeClass();
  $('#t1 tr td').removeClass();
  player = 'X';
  endGame = false;
}

function checkGame() {

  $('#t1 tr').each(function () {
    //Verifica linhas
    let val = $(this).children('td:eq(0)').html();
    if ((val != '') &&      
      ($(this).children('td:eq(1)').html() == val) &&
      ($(this).children('td:eq(2)').html() == val)) {
      $(this).addClass('bg-success');
      endGame = true;
    }

    //Verifica colunas
    let col;
    for (col = 0; col < 3; col++) {
      let val = $('#t1 tr:eq(0) td:eq(' + col + ')').html();      
      if ((val != '') &&        
          ($('#t1 tr:eq(1) td:eq(' + col + ')').html() == val) &&
          ($('#t1 tr:eq(2) td:eq(' + col + ')').html() == val)) {

        $('#t1 tr:eq(0) td:eq(' + col + '), '+
          '#t1 tr:eq(1) td:eq(' + col + '), '+
          '#t1 tr:eq(2) td:eq(' + col + ')').addClass('bg-success');
        endGame = true;
      }
    }

    //Verifica diagonal 1
    let valD1 = $('#t1 tr:eq(0) td:eq(0)').html();   
    if( (valD1 != '') &&        
        ($('#t1 tr:eq(1) td:eq(1)').html() == valD1) &&
        ($('#t1 tr:eq(2) td:eq(2)').html() == valD1) ) {

      $('#t1 tr:eq(0) td:eq(0), '+
        '#t1 tr:eq(1) td:eq(1), '+
        '#t1 tr:eq(2) td:eq(2)').addClass('bg-success');
      endGame = true;
    }

    //Verifica diagonal 2
    let valD2 = $('#t1 tr:eq(0) td:eq(2)').html();   
    if( (valD2 != '') &&        
        ($('#t1 tr:eq(1) td:eq(1)').html() == valD2) &&
        ($('#t1 tr:eq(2) td:eq(0)').html() == valD2) ) {

      $('#t1 tr:eq(0) td:eq(2), '+
        '#t1 tr:eq(1) td:eq(1), '+
        '#t1 tr:eq(2) td:eq(0)').addClass('bg-success');
      endGame = true;
    }

  });
}

function jogada() {
  if ( ($(this).html() == '') &&
       (!endGame) ) {
    $(this).html(player);
    player = player == 'X' ? 'O' : 'X';
    checkGame($(this));
  }
}

$(document).ready(function () {

  novoJogo();

  $('#newGame').click(novoJogo);

  $('#t1 td').click(jogada);

  $('td').hover(function () {
    if (!endGame) {
      if ($(this).html() == '') {
        $(this).css({
          "background-color": "#28a745",
          "cursor": "crosshair"
        });
      } else {
        $(this).css({
          "background-color": "#dc3545",
          "cursor": "not-allowed"
        });
      }
    }
  }, function () {

    $(this).css({
      "background-color": "",
      "cursor": ""
    });

  });

});