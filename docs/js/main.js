(function($){
  /* ---------набор функций--------------- */

  //автоувеличение ширины инпута
  function resizeInput() {
    var l =  $(this).val().length
    $(this).css('width', (l*16)+3);
  }
  //автоувеличение ширины инпута

  //получить ральный верхний левый угол обьекта в рекурсии
  var cumulativeOffset = function(element) {
    var top = 0, left = 0;
    do {
      top += element.offsetTop  || 0;
      left += element.offsetLeft || 0;
      element = element.offsetParent;
    } while(element);

    return {
      top: top,
      left: left
    };
  }; 
  //получить ральный верхний левый угол обьекта в рекурсии

  /* биндим контекст */
  function bind(func, context) { // первое перменная - функция, второе контекст
    return function() { // возвращаем анаонимную функцию, при ее вызове выоветься func.apply с уже имеющимя контекстом из переменной context
      return func.apply(context, arguments); //arguments любое кол во аргументов. такой вызов свяжет функцию с ранее переданным аргументом
    };
  }

  /* ---------ннабор функций---------н */



  $(document).ready(function(){
    $("body").removeClass("pageload");

    //scroll-to  - прокрутчик
    $(".scroll-to").click(function() {
      var id = $(this).attr("rel");
      var to = $("#"+id).offset().top-10;
      $('html, body').animate({
        scrollTop: to
      }, 500);
    });

    //f-ajax   - отправка форм
    $('.f-ajax').on('submit', function(event){
      event.preventDefault();
      var $form = $(this);

      var data = $form.serialize();
      data['token'] = "tnbm567sgfg4556sdfDSg";

      $.ajax({
        url: $form.attr("action"),
        type: 'POST',
        data: '',
        success: function(result) {
          if(result == "OK"){
            alert("Заявка отправлена!");       
          }
          else
            alert("Произошла ошибка!");
        },
        error: function (xhr, ajaxOptions, thrownError) {
          alert("Произошла ошибка!");
        }
      });
    });

    
        $('.best-offer__slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        /*autoplay: true,
        autoplaySpeed: 3000,*/
         
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              arrows: true,
              dots: false,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerMode: true,
              autoplaySpeed: 5000,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              arrows: false,
            }
          }
        ] 
    });
        
        
        
        
        $("#category").on("click", function() {
      if ($(this).siblings(".filter__options").is(":hidden")) {
        $(this).siblings(".filter__options").slideDown(200);
        $(this).addClass("active");
      } else {
        $(this).siblings(".filter__options").hide(100);
        $(this).removeClass("active");
      }
    });
    
    $("#size").on("click", function() {
      if ($(this).siblings(".filter__options").is(":hidden")) {
        $(this).siblings(".filter__options").slideDown(200);
        $(this).addClass("active");
      } else {
        $(this).siblings(".filter__options").hide(100);
        $(this).removeClass("active");
      }
    });
    
    
    $("#designer").on("click", function() {
      if ($(this).siblings(".filter__options").is(":hidden")) {
        $(this).siblings(".filter__options").slideDown(200);
        $(this).addClass("active");
      } else {
        $(this).siblings(".filter__options").hide(100);
        $(this).removeClass("active");
      }
    });
    
    
    $("#color").on("click", function() {
      if ($(this).siblings(".filter__options").is(":hidden")) {
        $(this).siblings(".filter__options").slideDown(200);
        $(this).addClass("active");
      } else {
        $(this).siblings(".filter__options").hide(100);
        $(this).removeClass("active");
      }
    });
    
    $("#price").on("click", function() {
      if ($(this).siblings(".filter__options").is(":hidden")) {
        $(this).siblings(".filter__options").slideDown(200);
        $(this).addClass("active");
      } else {
        $(this).siblings(".filter__options").hide(100);
        $(this).removeClass("active");
      }
    });
    
    
    $( function() {
        $( "#slider-range" ).slider({
          range: true,
          min: 0,
          max: 200000,
          values: [ 6000, 80000 ],
          slide: function( event, ui ) {
            /*$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );*/
            $(".price-range__input-min").val(ui.values[ 0 ]);
            $(".price-range__input-max").val(ui.values[ 1 ]);
          }
        });
        $(".price-range__input-min").val( $( "#slider-range" ).slider( "values", 0 ));
        $(".price-range__input-max").val( $( "#slider-range" ).slider( "values", 1 ));
      } );
    
    $(".price-range__input-min").change(function(){
    	var value1 = $(".price-range__input-min").val();
    	var value2 = $(".price-range__input-min").val();
    
        if(parseInt(value1) > parseInt(value2)){
    		value1 = value2;
    		$(".price-range__input-min").val(value1);
    	}
    	$( "#slider-range" ).slider("values", 0, value1);	
    });
    
    	
    $(".price-range__input-max").change(function(){
    	var value1 = $(".price-range__input-min").val();
    	var value2 = $(".price-range__input-max").val();
    	
    	if (value2 > 200000) { value2 = 200000; $(".price-range__input-max").val(value2)}
    
    	if(parseInt(value1) > parseInt(value2)){
    		value2 = value1;
    		$(".price-range__input-max").val(value2);
    	}
    	$( "#slider-range" ).slider("values", 1, value2);
    });
    
        
        
        
        
        
        
        
        $(".carousel").swipe({
    
      swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
    
        if (direction == 'left') $(this).carousel('next');
        if (direction == 'right') $(this).carousel('prev');
    
      },
      allowPageScroll:"vertical"
    
    });
    
        
        
        
        
        var hamburger = $(".hamburger");
    var secondaryNav = $(".secondary-nav");
    
    hamburger.on("click", function() {
      console.log(secondaryNav);
      secondaryNav.toggleClass("active");
      hamburger.toggleClass("checked")
    });
        
        
        
  });

})(jQuery)