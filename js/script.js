var player;

function novoJogo(){
    $('#t1 td').html('');
    player = 'X';
}

function checkGame(){
    console.log('checkGame');
}

function jogada(){
    if( $(this).html() == ''){
        $(this).html(player);
        player = player == 'X'? 'O' : 'X';
        console.log('jogada');
        checkGame();
    }
}

$(document).ready(function(){
    
    novoJogo();
    
    $('#newGame').click(novoJogo);

    $('#t1 td').click(jogada);

    $('td').hover( function(){
        if( $(this).html() == ''){
            $(this).css({
                "background-color" : "rgb(26, 139, 26, 0.8)",
                "cursor" : "crosshair"
            });        
        }else{
            $(this).css({
                "background-color" : "rgb(214, 55, 55, 0.8)",
                "cursor":"not-allowed"
        });        
        }
    }, function(){ 
        $(this).css({
            "background-color": "white",
            "cursor" : "default"
        }); 
    });

});