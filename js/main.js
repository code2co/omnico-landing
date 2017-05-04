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

  $('.fixed.menu .item').on('click', function (e) {
    $(this)
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