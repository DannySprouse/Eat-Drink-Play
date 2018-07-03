$(document).ready(function () {


  // Coding out the granimJS program to overlay banner

  var granimInstance = new Granim({
    element: '#canvas-image-blending',
    direction: 'top-bottom',
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    image: {
      source: 'assets/images/banner.jpg',
      blendingMode: 'multiply'
    },
    states: {
      "default-state": {
        gradients: [
          ['#29323c', '#485563'],
          ['#FF6B6B', '#556270'],
          ['#80d3fe', '#7ea0c4'],
          ['#f0ab51', '#eceba3']
        ],
        transitionSpeed: 5000
      }
    }
  });


  // Coding out the eat/meal section of the page

  $(".meal-button").on("click", function () {
    var meal = $(this).attr("data-meal");

    var queryURL = "https://www.themealdb.com/api/json/v1/1/random.php";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {

      console.log(response.meals);

      for (var i = 0; i < response.meals.length; i++) {

        // Write to DOM
        $(".meal").html("<h2>" + response.meals[i].strMeal);
        $(".meal-category").html("<h5>" + "Food Category: " + response.meals[i].strCategory);
        $(".meal-area").html("<h5>" + "Food Region: " + response.meals[i].strArea);
        $(".meal-ingredients").text("INGREDIENT LIST: ");

        // Initialize <span> for meal-ingredients
        $(".meal-ingredient1").text("");
        $(".meal-ingredient2").text("");
        $(".meal-ingredient3").text("");
        $(".meal-ingredient4").text("");
        $(".meal-ingredient5").text("");
        $(".meal-ingredient6").text("");
        $(".meal-ingredient7").text("");
        $(".meal-ingredient8").text("");
        $(".meal-ingredient9").text("");
        $(".meal-ingredient10").text("");
        $(".meal-ingredient11").text("");
        $(".meal-ingredient12").text("");
        $(".meal-ingredient13").text("");
        $(".meal-ingredient14").text("");
        $(".meal-ingredient15").text("");
        $(".meal-ingredient16").text("");
        $(".meal-ingredient17").text("");
        $(".meal-ingredient18").text("");
        $(".meal-ingredient19").text("");
        $(".meal-ingredient20").text("");

        // If Measure for Ingredients is not blank, write to DOM and include <br> tag
        if (response.meals[i].strMeasure1 != "") {
          $(".meal-ingredient1").html(response.meals[i].strMeasure1 + " " + response.meals[i].strIngredient1 + "<br>");
        };

        if (response.meals[i].strMeasure2 != "") {
          $(".meal-ingredient2").html(response.meals[i].strMeasure2 + " " + response.meals[i].strIngredient2 + "<br>");
        };

        if (response.meals[i].strMeasure3 != "") {
          $(".meal-ingredient3").html(response.meals[i].strMeasure3 + " " + response.meals[i].strIngredient3 + "<br>");
        };

        if (response.meals[i].strMeasure4 != "") {
          $(".meal-ingredient4").html(response.meals[i].strMeasure4 + " " + response.meals[i].strIngredient4 + "<br>");
        };

        if (response.meals[i].strMeasure5 != "") {
          $(".meal-ingredient5").html(response.meals[i].strMeasure5 + " " + response.meals[i].strIngredient5 + "<br>");
        };

        if (response.meals[i].strMeasure6 != "") {
          $(".meal-ingredient6").html(response.meals[i].strMeasure6 + " " + response.meals[i].strIngredient6 + "<br>");
        };

        if (response.meals[i].strMeasure7 != "") {
          $(".meal-ingredient7").html(response.meals[i].strMeasure7 + " " + response.meals[i].strIngredient7 + "<br>");
        };

        if (response.meals[i].strMeasure8 != "") {
          $(".meal-ingredient8").html(response.meals[i].strMeasure8 + " " + response.meals[i].strIngredient8 + "<br>");
        };

        if (response.meals[i].strMeasure9 != "") {
          $(".meal-ingredient9").html(response.meals[i].strMeasure9 + " " + response.meals[i].strIngredient9 + "<br>");
        };

        if (response.meals[i].strMeasure10 != "") {
          $(".meal-ingredient10").html(response.meals[i].strMeasure10 + " " + response.meals[i].strIngredient10 + "<br>");
        };

        if (response.meals[i].strMeasure11 != "") {
          $(".meal-ingredient11").html(response.meals[i].strMeasure11 + " " + response.meals[i].strIngredient11 + "<br>");
        };

        if (response.meals[i].strMeasure12 != "") {
          $(".meal-ingredient12").html(response.meals[i].strMeasure12 + " " + response.meals[i].strIngredient12 + "<br>");
        };

        if (response.meals[i].strMeasure13 != "") {
          $(".meal-ingredient13").html(response.meals[i].strMeasure13 + " " + response.meals[i].strIngredient13 + "<br>");
        };

        if (response.meals[i].strMeasure14 != "") {
          $(".meal-ingredient14").html(response.meals[i].strMeasure14 + " " + response.meals[i].strIngredient14 + "<br>");
        };

        if (response.meals[i].strMeasure15 != "") {
          $(".meal-ingredient15").html(response.meals[i].strMeasure15 + " " + response.meals[i].strIngredient15 + "<br>");
        };

        if (response.meals[i].strMeasure16 != "") {
          $(".meal-ingredient16").html(response.meals[i].strMeasure16 + " " + response.meals[i].strIngredient16 + "<br>");
        };

        if (response.meals[i].strMeasure17 != "") {
          $(".meal-ingredient17").html(response.meals[i].strMeasure17 + " " + response.meals[i].strIngredient17 + "<br>");
        };

        if (response.meals[i].strMeasure18 != "") {
          $(".meal-ingredient18").html(response.meals[i].strMeasure18 + " " + response.meals[i].strIngredient18 + "<br>");
        };

        if (response.meals[i].strMeasure19 != "") {
          $(".meal-ingredient19").html(response.meals[i].strMeasure19 + " " + response.meals[i].strIngredient19 + "<br>");
        };

        if (response.meals[i].strMeasure20 != "") {
          $(".meal-ingredient20").html(response.meals[i].strMeasure20 + " " + response.meals[i].strIngredient20 + "<br>");
        };
        // Write Instructions to DOM
        $(".meal-instructions").text("" + response.meals[i].strInstructions);

        // Write card section to DOM

        $(".card-meal").html("<h5>" + response.meals[i].strMeal);
        $(".card-meal-category").html("<p>" + response.meals[i].strCategory);
        $(".card-meal-area").html("<p>" + response.meals[i].strArea);
        $(".card-meal-instructions").text("Instructions: " + response.meals[i].strInstructions);
        $(".mealThumb").html("<img src = '" + response.meals[i].strMealThumb + "'>");
        //$(".mealVideo").html("<iframe>" + "<src = '" + response.meals[i].strYouTube + "'>");
      }
    });
  });

  // Coding out drink section of the page

  $(".drink-button").on("click", function () {
    var drink = $(this).attr("data-drink");

    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {

      console.log(response);
      console.log(response.drinks[0].strDrink);

      for (var i = 0; i < response.drinks.length; i++) {

        // Write to DOM
        $(".drink").html("<h2>" + response.drinks[i].strDrink);
        $(".drink-category").html("<h5>" + "Drink Category: " + response.drinks[i].strCategory);
        $(".drink-glass").html("<h5>" + "Glass to Serve: " + response.drinks[i].strGlass);
        $(".drink-ingredients").text("Ingredients: ");

        // Initialize <span> for drink-ingredients
        $(".drink-ingredient1").text("");
        $(".drink-ingredient2").text("");
        $(".drink-ingredient3").text("");
        $(".drink-ingredient4").text("");
        $(".drink-ingredient5").text("");
        $(".drink-ingredient6").text("");
        $(".drink-ingredient7").text("");
        $(".drink-ingredient8").text("");
        $(".drink-ingredient9").text("");
        $(".drink-ingredient10").text("");
        $(".drink-ingredient11").text("");
        $(".drink-ingredient12").text("");
        $(".drink-ingredient13").text("");
        $(".drink-ingredient14").text("");
        $(".drink-ingredient15").text("");

        // If Ingredient field is not blank, write to DOM and include <br> tag
        if (response.drinks[i].strIngredient1 !== "") {
          $(".drink-ingredient1").html(response.drinks[i].strMeasure1 + " " + response.drinks[i].strIngredient1 + "<br>");
        };

        if (response.drinks[i].strIngredient2 !== "") {
          $(".drink-ingredient2").html(response.drinks[i].strMeasure2 + " " + response.drinks[i].strIngredient2 + "<br>");
        };

        if (response.drinks[i].strIngredient3 !== "") {
          $(".drink-ingredient3").html(response.drinks[i].strMeasure3 + " " + response.drinks[i].strIngredient3 + "<br>");
        };

        if (response.drinks[i].strIngredient4 !== "") {
          $(".drink-ingredient4").html(response.drinks[i].strMeasure4 + " " + response.drinks[i].strIngredient4 + "<br>");
        };

        if (response.drinks[i].strIngredient5 !== "") {
          $(".drink-ingredient5").html(response.drinks[i].strMeasure5 + " " + response.drinks[i].strIngredient5 + "<br>");
        };
        if (response.drinks[i].strIngredient6 !== "") {
          $(".drink-ingredient6").html(response.drinks[i].strMeasure6 + " " + response.drinks[i].strIngredient6 + "<br>");
        };

        if (response.drinks[i].strIngredient7 !== "") {
          $(".drink-ingredient7").html(response.drinks[i].strMeasure7 + " " + response.drinks[i].strIngredient7 + "<br>");
        };

        if (response.drinks[i].strIngredient8 !== "") {
          $(".drink-ingredient8").html(response.drinks[i].strMeasure8 + " " + response.drinks[i].strIngredient8 + "<br>");
        };

        if (response.drinks[i].strIngredient9 !== "") {
          $(".drink-ingredient9").html(response.drinks[i].strMeasure9 + " " + response.drinks[i].strIngredient9 + "<br>");
        };

        if (response.drinks[i].strIngredient10 !== "") {
          $(".drink-ingredient10").html(response.drinks[i].strMeasure10 + " " + response.drinks[i].strIngredient10 + "<br>");
        };

        if (response.drinks[i].strIngredient11 !== "") {
          $(".drink-ingredient11").html(response.drinks[i].strMeasure11 + " " + response.drinks[i].strIngredient11 + "<br>");
        };

        if (response.drinks[i].strIngredient12 !== "") {
          $(".drink-ingredient12").html(response.drinks[i].strMeasure12 + " " + response.drinks[i].strIngredient12 + "<br>");
        };

        if (response.drinks[i].strIngredient13 !== "") {
          $(".drink-ingredient13").html(response.drinks[i].strMeasure13 + " " + response.drinks[i].strIngredient13 + "<br>");
        };

        if (response.drinks[i].strIngredient14 !== "") {
          $(".drink-ingredient14").html(response.drinks[i].strMeasure14 + " " + response.drinks[i].strIngredient14 + "<br>");
        };

        if (response.drinks[i].strIngredient15 !== "") {
          $(".drink-ingredient15").html(response.drinks[i].strMeasure15 + " " + response.drinks[i].strIngredient15 + "<br>");
        };

        // Write Instructions to DOM
        $(".drink-instructions").text("Instructions: " + response.drinks[i].strInstructions);

        // Write to card section
        $(".card-drink").html("<h5>" + response.drinks[i].strDrink);
        $(".card-drink-category").html("<p>" + "Category: " + response.drinks[i].strCategory);
        $(".card-drink-glass").html("<p>" + response.drinks[i].strGlass);
        $(".card-drink-instructions").text("Instructions: " + response.drinks[i].strInstructions);

        $(".drinkThumb").html("<img src = '" + response.drinks[i].strDrinkThumb + "'>");

      }
    });
  });

}); // closing doc ready
