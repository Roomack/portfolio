$(document).on('ready', function() {

  $('#facebook').hover(
    function() { colorChange($(this), "#4C66A4") },
    function() { colorChange($(this), "#393939") }
  );

  $('#linkedin').hover(
    function() { colorChange($(this), "#0099CC") },
    function() { colorChange($(this), "#393939") }
  );

  $('#email').hover(
    function() { colorChange($(this), "black") },
    function() { colorChange($(this), "#393939") }
  );

  $("#github").hover(
    function() { colorChange($(this), "#B8E65C") },
    function() { colorChange($(this), "#393939") }
  );

});

  function colorChange(element, color) {
    $(element).css("background", color);
  };
