
/*    alert('hello')                    ---------Hiện Thông Báo Lúc 
   $('h1').css('color','red')        ---------Chỉnh thuộc tính trực tiếp,Thay Đổi Luôn
   $('h1').click(
      function(){
          $(this).css('color','red')      ---  Thay Đổi Màu Khi Click Chuột
      }
  )*/
    $(document).ready(
        //Sticky
        function () {
            $('.about-section').waypoint(
                function (direction) {
                    if (direction == "down") {
                        $('nav').addClass('sticky');
                    } else {
                        $('nav').removeClass('sticky');
                    }
                }, {
                offset: '550px'
            }
            )
            // Scroll
            $('a').click(
                function (event) {
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top
                }, 700);
                event.preventDefault();
            });
            // Mobile icon
            $('.mobile-icon').click(
                function(){
                    $('.main-nav').slideToggle(200);
                    if($('.mobile-icon').hasClass('fa-bars')){
                        $('.mobile-icon').addClass('fa-times')
                        $('.mobile-icon').removeClass('fa-bars')
                    }
                    else{
                        $('.mobile-icon').addClass('fa-bars')
                        $('.mobile-icon').removeClass('fa-times')
                    }
            }
            )
        }
    )