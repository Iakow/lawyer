/* Я могу прото выдавать по одной... */

var a = $('#svg').children();
var c = [];
var counter = 1;
c[0] = a[0];
c[1] = a[counter];

setInterval(function () {
  if(counter < a.length-1) 
    counter++;
  else
    counter = 1;

  c[1] = a[counter];

  $('#svg').html(c);
  
}, 5000);