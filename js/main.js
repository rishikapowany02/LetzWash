 jQuery(document).ready(function(){
        $('.counter').counterUp({
            delay: 10,
            time: 1000,
        });
});

//Function To Display Popup
function div_show() {
document.getElementById('abc').style.display = "block";
}

function div_hide() {
document.getElementById('abc').style.display = "none";
}

$(function(){   
    //slider
     $('.slider-banner').slick({
        accessibility : true, 
        dots: true,     
        slidesToShow: 1,   
        slidesToScroll: 1,    
        arrows: true,   
        fade: false, 
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: '<div class="slick-prev"></div>',
       nextArrow: '<div class="slick-next"></div>'
    });
    
    /* Mobile Nav */
    $('#navTrigger').on('click', function(){
        $('body').toggleClass('open');
    });
    windowheight();


    //tabs
  $(".tab-blk .tab-details:first-child").show();

  $('.tab-blk').each(function(){
    $(document).on('click', '.tab-blk-inner a', function(event) {
      event.preventDefault();
      $(this).parent().addClass("current");
      $(this).parent().siblings().removeClass("current");
      var partner = $(this).attr("href");
      $(this).closest('.tab-blk').find(".tab-details").not(partner).hide();
      $(partner).fadeIn();
    });    
  });

  $(".describeblk .tab-blk-inner a").each(function (i) {  
    $(this).attr('href', '#data-tab'+(i + 1)); 
  }); 

});
 /* Only Desktop View */ 
if(!Modernizr.touch){ 
  /* Slick Dot fix in Desktop View */
  $('html').addClass('topfix'); 
  
  $(window).on('resize', function(){
    appendproduct();
  });
}