$(function() {
    $(".navbar a, footer a").on("click", function(event) {

        event.preventDefault();
        var hash = this.hash;

        $('body,html').animate({scrollTop: $(hash).offset().top} , 900 , function(){window.location.hash = hash;})
    
    });

    /*function timer(n) {
        $(".progress-bar").css("width", n + "%");
        if(n < 100) {
                setTimeout(function() {
                    timer(n + 10);
            }, 200);
        }
    }
 
    timer(0);*/

    /*function timer(p,n) {
        n=Math.min(n,p.attr("aria-valuenow"));
        p.css("width", n + "%").text(n + "%") ;
        
        if(n < p.attr("aria-valuenow")) {
          setTimeout(function() {
            timer(p, n + 10);
          }, 200);
        }
      }
      $(".progress-bar").each(function(i,pb){
        timer($(pb),0);
      });*/



      
});