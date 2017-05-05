$(document)
.ready(function() {
  var sections = $('.stripe.segment');
  var footer = $('.footer.segment');

  function activate() {
    var id = $(this).attr('id');
    $('.fixed.menu a[href="#' + id + '"]')
    .addClass('active')
    .siblings()
    .removeClass('active');
  }

  $('.fixed.menu .item').not('.toc').on('click', function (e) {
    var el = $(this);
    var target = $(el.attr('href'));
    var position = target.offset().top;

    $('html, body')
      .animate({
        scrollTop: position
      }, 500)
    ;

    el
    .addClass('active')
    .siblings()
    .removeClass('active');
  });

  sections
  .visibility({
    once: false,
    offset: 400,
    onPassing: activate,
    onPassingReverse: activate
  });

  footer
  .visibility({
    once: false,
    onBottomVisible: activate,
    onBottomVisibleReverse: activate
  });

  $('.ui.sidebar')
  .sidebar('attach events', '.toc.item');
});