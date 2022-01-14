/**
 * This is script for index.html
 * 
 * @author Aleksandr
 */
// Toggle Accordion
$(document).on('click', '.accordion-header', function() {
  let id = $(this).data('id');
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    $('.accordion-body.active').removeClass('active');
  } else {
    $('.accordion-header.active').removeClass('active');
    $('.accordion-body.active').removeClass('active');
    $(this).addClass('active');
    $('.accordion-body[data-id="' + id + '"]').addClass('active');
  }
  // remove active for current one
})