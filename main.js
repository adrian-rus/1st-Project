$(document).ready(function(){ 
    
    $('#search-btn').click(function(){
      $('#search-bar').show();
   });

    $('#show-play1').click(function(){ //how can i display only one at a time?
      $('#play1').toggleClass('show');
    });

    $('#show-play2').click(function(){
      $('#play2').toggleClass('show');
    });

    $('#show-play3').click(function(){
      $('#play3').toggleClass('show');
    });

    $('#show-play4').click(function(){
      $('#play4').toggleClass('show');
    });

    $('.name').click(function(){
    $('.preview').toggleClass('show');
     })
});


