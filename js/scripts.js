// $(function(){
//   $(".col-md-4").click(function(){
//     alert("here");
//   })
// })
$(document).ready(function(){
    $("#development-image").click(function(){
      $("#development-image").hide();
      $("#development").show();
    });
    // $("#development").click(function(){
    //   $("#development").slideUp();
    //   $("#development-image").slideDown();
    // });

    $("#development").click(function(){
     $("#development-image").show(1000);
     $("#development").hide(1000);
    //  $("#development").slideUp();
    });
  });
  
  $(document).ready(function(){
    $("#design-image").click(function(){
      $("#design-image").hide();
      $("#design").show();
    });
    $("#design").click(function(){
      $("#design-image").show();
      $("#design").hide();
    });
  });
  
  $(document).ready(function(){
    $("#product-image").click(function(){
      $("#product-image").hide();
      $("#product").show();
    });
    $("#product").click(function(){
      $("#product-image").show();
      $("#product").hide();
    });
  });
  
  $(document).ready(function(){
    $("#work1").mouseenter(function(){
      $("#overlay").show();
    });
    $("#work1").mouseout(function(){
      $("#overlay").hide();
    });
  });

  $(document).ready(function(){
    $("#work2").mouseover(function(){
      $("#overlay2").show();
    }).mouseout(function(){
      $("#overlay2").hide();
    });
  });
  $(document).ready(function(){
    $("#work3").mouseover(function(){
      $("#overlay3").show();
    }).mouseout(function(){
      $("#overlay3").hide();
    });
  });
  $(document).ready(function(){
    $("#work4").mouseover(function(){
      $("#overlay4").show();
    }).mouseout(function(){
      $("#overlay4").hide();
    });
  });
  
  $(document).ready(function(){
    $("#work5").mouseover(function(){
      $("#overlay5").show();
    }).mouseout(function(){
      $("#overlay5").hide();
    });
    $("#work6").mouseover(function(){
      $("#overlay6").show();
    }).mouseout(function(){
      $("#overlay6").hide();
    });
    $("#work7").mouseover(function(){
      $("#overlay7").show();
    }).mouseout(function(){
      $("#overlay7").hide();
    });
    $("#work8").mouseover(function(){
      $("#overlay8").show();
    }).mouseout(function(){
      $("#overlay8").hide();
    });
  });
  
  // $(document).ready(function(){
  //   $("form#form34A").submit(function(event){
  //     // event.preventDefault();
  //     var name = $("input#MERGE1").val();
  //     var email = $("input#MERGE0").val();
  //     var message = $("textarea#comment").val();
  //     if ($("input#MERGE1").val() && $("input#MERGE0").val()){
  //       alert (name + ", we have received your message. Thank you for reaching out to us.");
  //     }
  //     else {
  //       alert("Please enter your name and email!");
  //     }
      
  //   });
  
  // });

  $(document).ready(function() {
    $("#blanks form").submit(function(event) {
        var name = $("input#name").val();
        var email = $("input#email").val();
        var inputAddress = $("input#inputAddress").val();
        $(".name").text(name);
        $(".email").text(email);
        $(".inputAddress").text(inputAddress);
        $("#sub").show();


        event.preventDefault();

    });
  });