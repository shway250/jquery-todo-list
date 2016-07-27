/*
Jackson Duhon
*/
//$(document).ready(function(){

var inputText = $('#text-input');
var submit = $('#submitButton');
var listItem = $('.list-item');

$('#submitButton').on('click', function(){
  console.log(inputText.val());
  var newListItem = $('<li></li>').text(inputText.val());
  $('ul').append(newListItem);
});


//});