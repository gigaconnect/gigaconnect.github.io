function getUrlVars(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

 ( function( $){
    $(document).ready( function(){

      var $form1 = $('form#contact'),
          $form2 = $('form#email'),
          $form3 = $('form#register'),
          url = 'https://script.google.com/macros/s/AKfycbyNzoPGgRzX6udR2dGI9dU3UN8PN9lRjt9FR6V0MlbsRnRuj4BH/exec'


      $('#submit-form').on('click', function(e) {
        if($(this).closest('form')[0].checkValidity()){

            $("#submit-form").attr("disabled", true);
            
            e.preventDefault();

            var jqxhr = $.ajax({
              url: url,
              method: "GET",
              dataType: "json",
              data: $form1.serializeObject(),
              success: function(){
                $('#form-container').html("<div class='d-flex justify-content-center'>Thank you</div><div class='d-flex justify-content-center'>Your response has been recorded.</div>")
              }
            })
        }
      })

      $('#submit-email').on('click', function(e) {
        if($(this).closest('form')[0].checkValidity()){

            $("#submit-email").attr("disabled", true);

            e.preventDefault();

            var jqxhr = $.ajax({
              url: url,
              method: "GET",
              dataType: "json",
              data: $form2.serializeObject(),
              success: function(){
                $('#form2-container').html("<div class='d-flex justify-content-center'>Thank you</div><div class='d-flex justify-content-center'>Your response has been recorded.</div>")
              }
            })
        }
      })

      $('#submit-register').on('click', function(e) {

        $("#submit-register").attr("disabled", true);
        $(".overlay").show();

        if($(this).closest('form')[0].checkValidity()){
            e.preventDefault();

            var jqxhr = $.ajax({
              url: url,
              method: "GET",
              dataType: "json",
              data: $form3.serializeObject(),
              success: function(){
                $('.map').hide();
                $('.finance').hide();
                $('.connect').hide();
                $('.empower').hide();
                $('body').addClass("text-center");
                $('body').css("background-color","#ececec");
                $('html').css("height","100%");
                $('body').css("height","100%");
                $('body').css("display","-ms-flexbox");
                $('body').css("display","-webkit-box");
                $('body').css("display","flex");
                $('body').css("-ms-flex-align","center");
                $('body').css("-ms-flex-pack","center");
                $('body').css("-webkit-box-align","center");
                $('body').css("align-items","center");
                $('body').css("-webkit-box-pack","center");
                $('body').css("justify-content","center");
                $('body').css("padding-top","40px");
                $('body').css("padding-bottom","40px");
                $('body').css("background-color","#f5f5f5");
                $('body').html('<body class="text-center" style="background-color:#ececec"><form class="form-signin p-5" style="background-color:white; border: #CCC solid 1px; border-top: #7348b3 solid 5px"><h1 class="h3 mb-3 font-weight-normal">Thank you for registering</h1><p>We will get in touch if we have any questions about your submission.</p></div>');
              }
            })
        }
      })

      $('#defaultCheck1').change(function() {
        if(this.checked) {
          $('#ContactName').val($('#Name').val());
          $('#ContactEmail').val($('#Email').val());
        }
      })

      $('.card-check').change(function() {
        if(this.checked) {
          $(this).parent().parent().css('background-color', '#7348b3');
          $(this).parent().parent().css('color', 'white');
        } else {
          $(this).parent().parent().css('background-color', '#ececec');
          $(this).parent().parent().css('color', 'black');
        }
      })

      if (getUrlVars().includes('map')){
         $('.map').show();
      } 
      if (getUrlVars().includes('finance')){
         $('.map').show();
         $('.finance').show();
      } 
      if (getUrlVars().includes('connect')){
         $('.connect').show();
      } 
      if (getUrlVars().includes('empower')){
         $('.empower').show();
      } 
      $('.submit').show();



    } );
})(jQuery);