$(document).ready(function() {
    $("#toggle-btn").click(function() {
      var $cardContent = $(".card .content");
      var $img = $("#profile-img");
      var $button = $("#toggle-btn");

      $cardContent.toggleClass("expanded");

    
      if ($cardContent.hasClass("expanded")) {
        $button.text("Show Less");
        $img.addClass("blurred");
      } else {
        $button.text("Show More");
        $img.removeClass("blurred");
      }
    });
  });