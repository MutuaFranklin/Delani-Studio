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





background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('landingpagepic.jpg');