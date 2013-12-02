var app = app || {};



$(document).ready(function(){
  app.btnClickMe = $("#clickme");
  app.jive = $("#jive");
  app.setEventListeners();
});


app.setEventListeners = function(){
  app.btnClickMe.on('click', app.changeText);
  app.btnClickMe.on('click', app.changeBackground);
  app.btnClickMe.on('click', app.btnDisable);
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
