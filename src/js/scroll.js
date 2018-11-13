$(document).ready(function() {


  // init controller
  var controller = new ScrollMagic.Controller();

  /*=============================================>>>>>
  = Dash Title animation =
  ===============================================>>>>>*/
let dash = $('.dash-title');

dash.each(function(index){

  let durat =[];

  let h;
if ($(this).height() < $(window).height()) {
  h = $(this).height();
} else {
  h = 1;
}
durat.push(h);

  new ScrollMagic.Scene({
    triggerElement:this,
    triggerHook: 0.65,
    // duration:"100%",
    reverse:false


  })
  .setClassToggle(this,'active')
  // .addIndicators()
  .addTo(controller);


});





});
