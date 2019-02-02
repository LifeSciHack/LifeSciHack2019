$(document).ready(function () {
    $("#submit").on("click", function() {
        $.ajax({
        url: "/upload",
        method: "POST",
        data: {
          image: $("#photo").val().trim(),
        }
      })
    })
});