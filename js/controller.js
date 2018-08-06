

var start=0;
$("#start").click(function() {

    start=1;
    var speed=3;
    var interval = setInterval(function(){         
        for(var i=0;i<360;i=i+speed){
                $('#wheel').animate({  borderSpacing: i }, {
                step: function(now,fx) {
                    $(this).css('-webkit-transform','rotate('+now+'deg)'); 
                    $(this).css('-moz-transform','rotate('+now+'deg)');
                    $(this).css('transform','rotate('+now+'deg)');
                },
                duration:1
                },'linear');
            } 
         console.log(start);
         if(start==0){
           clearInterval(interval);
           return;
         }
    }, 1100);
        
    /*while(start=1){
        setTimeout(function(){
            console.log("g");
        },5000);
        
    }*/
    
   /* start=1;
    var rotation = function (){
      $("#wheel").rotate({
        angle:0,
        animateTo:360,
        callback: rotation,
        easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
          return c*(t/d)+b;
        }
      });
    }
    rotation();*/
    

});

$("#stop").click(function() {
    start=0;
});



        