$(document).ready(function () {
  $("button").on("click", function () {
    var meal = $(this).attr("data-meal");

    var queryURL = "https://www.themealdb.com/api/json/v1/1/random.php";
    //        var queryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchReq;




    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {

      console.log(response);
      console.log(response.meals[0].strMeal);


      // Create CODE HERE to transfer content to HTML
      $(".meal").html("<h5>" + response.meals[0].strMeal);
      $(".category").html("<p>" + response.meals[0].strCategory);
      $(".area").html("<p>" + response.meals[0].strArea);
      $(".instructions").text("Instructions: " + response.meals[0].strInstructions);
      var newImage = $("<img src = '" + response.meals[0].strMealThumb + "'>");

      $(".mealthumb").html("<img>" + response.meals[0].strMealThumb);

      console.log(newImage);



    });
  });
});





