var app = app || {};

$(document).ready(function(){
  app.btnClickMe = $("#clickme");
  app.btnCalc = $("#btnCalc");
  app.jive = $("#jive");
  app.setEventListeners();
});


app.setEventListeners = function(){
  app.btnClickMe.on('click', app.changeText);
  app.btnClickMe.on('click', app.changeBackground);
  app.btnClickMe.on('click', app.btnDisable);
  app.btnCalc.on('click', app.check_increasing);
};

app.changeText = function() {
  app.jive.html("Jabba Jive");
};

app.changeBackground = function() {
  $('body').addClass("pink");
};

app.btnDisable = function() {
  this.setAttribute("disabled", "true");
};


app.check_increasing = function() {
  var input = $("input").val().split(",");
  var numArray = app.Calc(input);
  var baseArray = app.Calc(input);
  numArray.sort(function(a,b) {return a > b;} );
  // debugger
  if (numArray === baseArray) {
    $('body').addClass("green");
  } else {
    $('body').addClass("red");
  }
};


app.Calc = function(input) {
  var numArray = [];
  // var input = $("input").val().split(",");
  for (var i=0; i<input.length; i++){
    var num = parseInt(input[i], null);
    numArray.push(num);
  }
  // debugger
  return numArray;
};



