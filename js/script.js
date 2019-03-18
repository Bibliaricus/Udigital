$(document).ready(function(){
  // Categories slider (Slick)
  $('.categories').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }      
    ]
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

  // New products slider (Slick)
  $('.new-products__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }      
    ]
  });

  // Enable Bootstrap collapse in footer lists

  // if ( $(window).width() < 768) {
  //   $('.footer-link__list').addClass('collapse');
  //  }

  function myFunction() {
    if($(window).width() < 768)
    {   
      $('.footer-link__list').addClass('collapse');
    } else {
      if ( $('.footer-link__list').hasClass('collapse') ) {
        $('.footer-link__list').removeClass('collapse');
        }
    }
}

  myFunction();

  $(window).resize(function() {
      myFunction();
  });
  
});