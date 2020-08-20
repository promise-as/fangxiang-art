charset = 'UTF-8';
$(function () {
  theaMsForm($('.sign-in'));

  // 导航条固定
  var nav = $('.nav');
  var navOffset = nav.offset().top;
  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop();
    if (scrollPos >= navOffset) {
      nav.addClass('fixed');
      $('.nav-site').show();
    } else {
      nav.removeClass('fixed');
      $('.nav-site').hide();
    }
  });

  // 单选框
  // params: 触发元素，内容元素，类名
  function radioHandle(btn, classname) {
    $(btn).each(function () {
      $(this).click(function () {
        $(this).addClass(classname).siblings().removeClass(classname);
      });
    });
  }
  radioHandle(".c-select span", "on");

  // 弹窗
  if ($('.dialog').size() > 0) {
    midtc('.dialog', '.close', 10000, 30000, 1, null);
  }
  function midtc(ele, c, f, a, n, s) {
    var $par = $(ele);
    var $cleardiv = $(s);
    var $num = 0;
    popupTc(f);
    $(c, $par).click(function () {
      $cleardiv.hide();
      $par.hide();
      $num++;
      if ($num <= n) {
        popupTc(a);
      }
    });
    function popupTc(d) {
      setTimeout(function () {
        $cleardiv.show();
        $par.fadeIn(300);
      }, d);
    }
  }
  $('.show-dialog').click(function () {
    $('.dialog').show();
  });
  // 关闭弹窗
  $('.close').click(function () {
    $('.dialog').hide();
  });

  // 收集弹窗的问题选择
  $('#submit').click(function(){
    $('#question').val($('.c-select .on').text());
  })

  var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 20,
    pagination: '.swiper-pagination'
  });
});