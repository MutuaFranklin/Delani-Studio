// Show description when icons are clicked

$(document).ready(function(){
  $("#design-image").click(function(){
    $("#design-image").hide();
    $("#design-text").show();
  });
  $("#design-text").click(function(){
    $("#design-text").hide();
    $("#design-image").show();
  });
});


$(document).ready(function(){
  $("#development-image").click(function(){
    $("#development-image").hide();
    $("#development-text").show();
  });
  $("#development-text").click(function(){
    $("#development-text").hide();
    $("#development-image").show();
  });
});

$(document).ready(function(){
  $("#product-image").click(function(){
    $("#product-image").hide();
    $("#product-text").show();
  });
  $("#product-text").click(function(){
    $("#product-text").hide();
    $("#product-image").show();
  });
});



// Portfolio image hover

$(document).ready(function () {
  $("#work1").hover(
    function () {
      $("#work1 .solid-border").show();
    },
    function () {
      $("#work1 .solid-border").hide();
    },
    
  );
});


$(document).ready(function () {
  $("#work2").hover(
    function () {
      $("#work2 .solid-border").show();
    },
    function () {
      $("#work2 .solid-border").hide();
    },
    
  );
});

$(document).ready(function () {
  $("#work3").hover(
    function () {
      $("#work3 .solid-border").show();
    },
    function () {
      $("#work3 .solid-border").hide();
    },
    
  );
});

$(document).ready(function () {
  $("#work4").hover(
    function () {
      $("#work4 .solid-border").show();
    },
    function () {
      $("#work4 .solid-border").hide();
    },
    
  );
});

$(document).ready(function () {
  $("#work5").hover(
    function () {
      $("#work5 .solid-border").show();
    },
    function () {
      $("#work5 .solid-border").hide();
    },
    
  );
});
$(document).ready(function () {
  $("#work6").hover(
    function () {
      $("#work6 .solid-border").show();
    },
    function () {
      $("#work6 .solid-border").hide();
    },
    
  );
});
$(document).ready(function () {
  $("#work7").hover(
    function () {
      $("#work7 .solid-border").show();
    },
    function () {
      $("#work7 .solid-border").hide();
    },
    
  );
});
$(document).ready(function () {
  $("#work8").hover(
    function () {
      $("#work8 .solid-border").show();
    },
    function () {
      $("#work8 .solid-border").hide();
    },
    function () {
      $("#work8").css({"background-color": "black"});
    }
    
  );
});


// JQUERY FORM FUNCTION

function ValidateEmail(email) {
  var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  return expr.test(email);
};

$(document).ready(function(){
  $("form#delani-studio").submit(function(event){
    // event.preventDefault();
    var name = $("input#name").val();
    var email = $("input#email").val();
    var message = $("textarea#message").val();

    if (!$("input#name").val()){
      alert("Please enter your name!")
    }
    else if (!$("input#email").val()){
      alert("Please enter your email!");
    }

    if (!ValidateEmail($("input#email").val())) {
      alert("Invalid email address!");
    }
    else if (!$("textarea#message").val()){
      alert("Please enter your message or comment!");
    }
    else{
      alert (name + ", we have received your message. Thank you for reaching out to us.");
    }
    
    
  });

});




// background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('landingpagepic.jpg');