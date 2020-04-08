// navebar section
$(document).on("scroll", function(){
  if
    ($(document).scrollTop() > 86){
    $("#banner").addClass("shrink");
  }
  else
  {
    $("#banner").removeClass("shrink");
  }
});
// end navebar section



// sileder js
$('#myCarousel').carousel({
   interval: 3000,
})
// end slide
