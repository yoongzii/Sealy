
   $('.header_inner #gnb .dep1>li').mouseover(function(){
      $('.dep2_wrap').show()
      $('header').addClass('on').css({'height':'600px'});
      $('.header_inner').css({'border-bottom' : '1px solid rgba(122, 173, 211, 0.5)'})
      $('.header_inner #gnb .dep1 span' ).css({'width': '200px'})
      })

   $('.header_inner #gnb .dep1>li').mouseout(function(){
      $('.dep2_wrap').hide();
      $('header').removeClass('on').css({'height':'auto'});
      $('#gnb .dep1').css({'border-bottom' : 'none'})
      $('.header_inner').css({'border-bottom' : 'none'})
      $('.header_inner #gnb .dep1 span' ).css({'width': '150px'})
   })


   $(window).scroll(function() {
      if($(window).scrollTop() >= 10) {
         $('header').addClass('on')
      }
      else {
         $('header').removeClass('on')
      }
   });

   $('.util .btn_search_open').click(function() {
      $('.quick_search').toggle();

   })


// main_visul
   var swiper = new Swiper(".mySwiper", {
      autoplay : {delay: 3000},
      loop: true,
      spaceBetween: 2,
      freeMode: true,
      watchSlidesProgress: true,
      navigation : {
         nextEl: '.swiper-button-right',
         prevEl: '.swiper-button-left',
      },
      pagination : {
         el: '.swiper-pagination',
         type: 'progressbar',
      },
      thumbs: {
         swiper: swiper,
      },
   });

   var swiper2 = new Swiper(".mySwiper2", {
      autoplay : {delay: 3000},
      loop: true,
      spaceBetween: 2,
      navigation: {
         nextEl: ".swiper-auto-controls .auto-right",
         prevEl: ".swiper-auto-controls .auto-left",
      },
      pagination : {
      el: '.swiper-pagination2',
      type: 'fraction',
      },

   });

   var shopSwiper = new Swiper(".shopSwiper", {
   pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
   },
   slidesPerView: 3.5,
   spaceBetween: 30,

   });

   $(window).on('scroll mousemove', function(e){
      // 마우스 좌표값
      $('.cursor').css('left', e.pageX + 'px');
      $('.cursor').css('top', e.pageY + 'px');
   })
   $('.shopWrapper').hover(function(){
      $('.cursor').toggleClass('on');
   })


// about 슬라이드
$('.aboutList li').mouseenter(function(){
   let menu_li = $(this).index();
   if(menu_li < 4) {
      $('.aboutSlider').css({display:'none'}).eq($(this).index()).css({
         display:'none'
      })
   }
});

$('.aboutList li').mouseleave(function(){
   let menu_li = $(this).index();
   if(menu_li < 4) {
      $('.aboutSlider').eq($(this).index()).css({
         display:'none'
      })
   }
});

$('.aboutList li').mouseenter(function(){
   $('.aboutSlider').eq($(this).index()).css({
      display:'flex'
   })
});
$('.aboutList li').mouseleave(function(){
   $('.aboutSlider').eq($(this).index()).css({
      display:'flex'
   })
})

gsap.registerPlugin(ScrollTrigger);
gsap.to('.iframe_cont',{
   width: '100%',
   scrollTrigger:{
      trigger:'.mainFrame',
      start: 'top top',
      end: `600 top`,
      pin: true,
      scrub: true,
      markers: false,
   }
})

