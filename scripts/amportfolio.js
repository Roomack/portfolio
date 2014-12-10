$(document).on('ready', function() {

  $('#facebook').hover(
    function() { bgroundChange($(this), "#4C66A4") },
    function() { bgroundChange($(this), "#393939") }
  );

  $('#linkedin').hover(
    function() { bgroundChange($(this), "#0099CC") },
    function() { bgroundChange($(this), "#393939") }
  );

  $('#email').hover(
    function() { bgroundChange($(this), "black") },
    function() { bgroundChange($(this), "#393939") }
  );

  $("#github").hover(
    function() { bgroundChange($(this), "#B8E65C") },
    function() { bgroundChange($(this), "#393939") }
  );

  $(".rmc").hover(
    function() { colorChange('.rmc_label', "#B8E65C") },
    function() { colorChange('.rmc_label', "#393939") }
  );

  $(".shield_ED").hover(
    function() { colorChange('.shield_ED_label', "#B8E65C") },
    function() { colorChange('.shield_ED_label', "#393939") }
  );

  $(".roomack").hover(
    function() { colorChange('.roomack_label', "#B8E65C") },
    function() { colorChange('.roomack_label', "#393939") }
  );

});

function bgroundChange(element, color) {
  $(element).css("background", color);
};

function colorChange(element, color) {
  $(element).css("color", color);
};
