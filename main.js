$(document).ready(function(){ //changed this because I had a feeling the other statement did not load the script
    
   /*$("btn").on({
        .mouseenter: function(){
        $(this).removeClass("btn-danger").addClass("btn-default")
        },
    
        .mouseleave:function(){
        $(this).addClass("btn-danger").removeClass("btn-default");
        }
   }); //nothing happends*/
    
    $("btn").click(function(){
        $(".lnd").hide(); //img does not hide
    });
    
   $("#add").click(function(){
       $('.txt').text('added text'); //no text added
   });
   
   $(".i").click(function(){
       $(this).css('opacity',0.85); //this seems the only one that works... can't figure out why the other ones aren't doing anything...
   })
   
   $(".name").click(function(){
       $(this).show("preview");
   })
});
