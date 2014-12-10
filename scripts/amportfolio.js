$(document).on('ready', function() {

  $('#facebook').on('mouseover', function () {
    $('#facebook').css("background", "#4c66a4")
  })

  $('#facebook').on('mouseout', function () {
    $('#facebook').css("background", "#393939")
  })

  $('#linkedin').on('mouseover', function () {
    $('#linkedin').css("background", "#0099CC")
  })

  $('#linkedin').on('mouseout', function () {
    $('#linkedin').css("background", "#393939")
  })

  $('#email').on('mouseover', function () {
    $('#email').css("background", "purple")
  })

  $('#email').on('mouseout', function () {
    $('#email').css("background", "#393939")
  })

   $('#github').on('mouseover', function () {
    $('#github').css("background", "#B8E65C")
  })

  $('#github').on('mouseout', function () {
    $('#github').css("background", "#393939")
  })

  $('.rmc').on('mouseover', function() {
    $('.rmc_label').css("color", "#B8E65C")
  })

  $('.rmc').on('mouseout', function() {
    $('.rmc_label').css("color", "#393939")
  })

  $('.shield_ED').on('mouseover', function() {
    $('.shield_ED_label').css("color", "#B8E65C")
  })

  $('.shield_ED').on('mouseout', function() {
    $('.shield_ED_label').css("color", "#393939")
  })

  $('.roomack').on('mouseover', function() {
    $('.roomack_label').css("color", "#B8E65C")
  })

  $('.roomack').on('mouseout', function() {
    $('.roomack_label').css("color", "#393939")
  })

});