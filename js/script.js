$(function () {
    $('.js-btn').click(function () {      
      $(this). toggleClass('active');
      $('.menu , .btn-line').toggleClass('open');
    })
  });
