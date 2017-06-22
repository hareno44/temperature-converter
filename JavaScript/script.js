// F to C: (F-32) * 5 /9
// C to F: (C*9)/5 + 32
// RANGES: (-40f-32: cold freezing stuff)(33f-50: cool)(51-70f: ok)(71-86: warm)(87-104: hot!)(105-356: fire)
// RANGES C: (-40-0: cold freezing stuff)(1-10: cool)(11-21: ok)(22-30: warm)(31-40: hot!)(41-180: fire)

// var conversionF = (newEntry - 32) * 5 / 9;
// var conversionC = (newEntry * 9)/5 + 32;
// var newEntry =
// $('body').css({backgroundImage:'url(image/'+img+')'

  console.log('hello');
$('#button').click(enterValue)

function enterValue(){
var newValue = $('#newEntry').val()
var fValue= (newValue * 9)/5 + 32;
  console.log();

if ( fValue <= 32){
  $("body").css("background-image","url(img/snow.jpeg)");
  // $('body').css(color: turquoise)
}

else if (32 < fValue <= 60){
   $("body").css("background-image","url(img/fall.jpg)");
 }

else if (60 < fValue <= 79){
  $("body").css("background-image","url(img/spring.jpg)");
}

 else if ( 79 < fValue <= 98){

    $("body").css("background-image","url(img/beach.jpeg)");
}

else{
  $("body").css("background-image","url(img/hot.jpg)");
}
  $('#output').val(fValue)

// }

}
