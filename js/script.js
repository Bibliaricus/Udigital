$(document).ready(function(){
  // Categories slider (Slick)
  $('.categories').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1
  });

  // Quantity of products in quick view popup
  (function quantityProducts() {
    var $quantityArrowMinus = $(".quantity__minus");
    var $quantityArrowPlus = $(".quantity__plus");
    var $quantityNum = $(".quantity__number-input");
 
    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);
 
    function quantityMinus() {
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }
 
    function quantityPlus() {
      $quantityNum.val(+$quantityNum.val() + 1);
    }
  })();

  //  Slider in quick view popup (slick slider)
  $('.q-view-popup__image-slider').slick({
    arrows: true,
    dots: true
  });
  
});