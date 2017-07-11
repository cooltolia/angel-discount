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
