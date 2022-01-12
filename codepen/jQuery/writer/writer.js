
$(function() {
    let typingElement = $('.typing');
  
    typingElement.on('click', () => {
      typingElement.removeClass('animate');
      setTimeout(() => typingElement.addClass('animate'), 1);
    })
  });