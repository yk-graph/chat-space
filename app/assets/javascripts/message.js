$(function() {
  $('#message-form').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
  });
});
