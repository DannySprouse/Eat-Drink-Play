$(document).ready(function () {
  $("#meal-button").on("click", function () {
    var meal = $(this).attr("data-meal");

    var queryURL = "https://www.themealdb.com/api/json/v1/1/random.php";
    //        var queryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchReq;




    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {

      console.log(response);
      console.log(response.meals[0].strMeal);

      var pBody = $("<p>");
      var tRow =("<tr>");
      for (var i = 0; i < response.meals.length; i++) {


     // var ingredient1 = $(".meal-ingredients").text(response.meals[i].strMeasure1 + " " + response.meals[i].strIngredient1);
     // var ingredient2 = $(".meal-ingredients").text(response.meals[i].strMeasure2 + " " + response.meals[i].strIngredient2);
  
  

     //   console.log(ingredient1);
      // Write to DOM
      $(".meal").html("<h2>" + response.meals[i].strMeal);
      $(".meal-ingredients").text("Ingredients: ");
      var ingredient1 = (response.meals[i].strMeasure1 + " " + response.meals[i].strIngredient1);
      var ingredient2 = (response.meals[i].strMeasure2 + " " + response.meals[i].strIngredient2);
      var ingredient3 = (response.meals[i].strMeasure3 + " " + response.meals[i].strIngredient3);
      var ingredient4 = (response.meals[i].strMeasure4 + " " + response.meals[i].strIngredient4);
      var ingredient5 = (response.meals[i].strMeasure5 + " " + response.meals[i].strIngredient5);
 
      console.log(ingredient1);
      console.log(ingredient2);
      console.log(ingredient3);
      console.log(ingredient4);
      console.log(ingredient5);

//      $(".meal-ingredients").text(response.meals[i].strMeasure1 + " " + response.meals[i].strIngredient1);
//      $(".meal-ingredients").text(response.meals[i].strMeasure2 + " " + response.meals[i].strIngredient2);
//      $(".meal-ingredients").text(response.meals[i].strMeasure3 + " " + response.meals[i].strIngredient3);
//      $(".meal-ingredients").text(response.meals[i].strMeasure4 + " " + response.meals[i].strIngredient4);
//      $(".meal-ingredients").text(response.meals[i].strMeasure5 + " " + response.meals[i].strIngredient5);
//      $(".meal-ingredients").text(response.meals[i].strMeasure6 + " " + response.meals[i].strIngredient6);
//      $(".meal-ingredients").text(response.meals[i].strMeasure7 + " " + response.meals[i].strIngredient7);
//      $(".meal-ingredients").text(response.meals[i].strMeasure8 + " " + response.meals[i].strIngredient8);

      $(".meal-instructions").text("Instructions: " + response.meals[i].strInstructions);

       // pBody.append(ingredient1, ingredient2);

      var tRow = $("<tr>");  
      tRow.append(
        $("<tr>").text(ingredient1),
        $("<tr>").text(ingredient2),
        $("<tr>").text(ingredient3),
        $("<tr>").text(ingredient4),
        $("<tr>").text(ingredient5),
      );

      $("#ingredient-table").append(tRow);

      $(".card-meal").html("<h5>" + response.meals[i].strMeal);
      $(".card-meal-category").html("<p>" + response.meals[i].strCategory);
      $(".card-meal-area").html("<p>" + response.meals[i].strArea);
      $(".card-meal-instructions").text("Instructions: " + response.meals[i].strInstructions);
      $(".mealthumb").html("<img src = '" + response.meals[i].strMealThumb + "'>");
    }



    });
  });

  // API Call to theCocktailDB

  $("#drink-button").on("click", function () {
    var drink = $(this).attr("data-drink");

    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    //        var queryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchReq;




    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {

      console.log(response);
      console.log(response.drinks[0].strDrink);


      // Create CODE HERE to transfer content to HTML
      $(".card-drink").html("<h5>" + response.drinks[0].strDrink);
      $(".card-drink-category").html("<p>" + "Category: " + response.drinks[0].strCategory);
      $(".card-drink-alcoholic").html("<p>" + response.drinks[0].strAlcoholic);
      $(".card-drink-instructions").text("Instructions: " + response.drinks[0].strInstructions);
    //  var newDrinkImage = $("<img src = '" + response.drinks[0].strDrinkThumb + "'>");

      $(".drinkthumb").html("<img src = '" + response.drinks[0].strDrinkThumb + "'>");


  //  console.log(newDrinkImage);



    });
  });







});





