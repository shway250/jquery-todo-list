/*
Jackson Duhon
*/
//$(document).ready(function(){

var inputText = $('#text-input');
var submit = $('#addItem');
var listItem = $('.list-item');

$('#addItem').on('click', function(){
  var newListItem = $('<li></li>').text(inputText.val());
  var xButton = newListItem.append('<div class=\"deleteButton\">X</div>')
  var padding = $( 'li' ).css( "padding", "5px" );
  // var border = $( 'li' ).css( "border-top", "2px solid #000" );
  xButton.on('click', function(){
    $(this).remove();
  });
  $('ul').append(newListItem);


});


//});