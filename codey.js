$(document).on("keypress", "#typed-text", function(e) {
     if (e.which == 13) {
       var typed = $('#typed-text').val();
       $('#entered-text').html(typed);
     }
});
