//= require_tree .
//
//
//  TODO this a monkey patch off the hell for typeform and must be refactor
  $(document).ready(function(){
            $('a[href^="#"]').on('click',function (e) {
                e.preventDefault();
  
                var target = this.hash;
                var $target = $(target);
  
                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top
                }, 900, 'swing');
            });
        });
  $(window).load(function(){ /*code here*/
    console.log(window.typeformLoaded);
    (function(){
      var qs,js,q,s,d=document,gi=d.getElementById,ce=d.createElement,gt=d.getElementsByTagName,id='typef_orm',b='https://s3-eu-west-1.amazonaws.com/share.typeform.com/';
      if(!gi.call(d,id)){
        js=ce.call(d,'script');
        js.id=id;
        js.src=b+'widget.js';
        q=gt.call(d,'script')[0];
        q.parentNode.insertBefore(js,q)
    console.log(window.typeformLoaded);
        $(id).load(function(){
              $(window).scrollTop(0);
        });
        $(window).scrollTop(0);
      }
      $(window).scrollTop(0);
    })()
    var timer = setInterval(myFunction, 4000);

    function myFunction() {
      if(window.typeformLoaded === true ) {
            clearInterval(timer);
      $(window).scrollTop(0);
                return;
      }
        //do stuff
        //
    }
  })
  $('#my_typeform').load(function(){
        $(window).scrollTop(0);
  });
