$( document ).ready(function() {

var granimInstance = new Granim({
    element: '#canvas-image-blending',
    direction: 'top-bottom',
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    image : {
        source: 'assets/images/banner.jpg',
        blendingMode: 'multiply'
    },
    states : {
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

$("button").on("click", function () {
    var meal = $(this).attr("data-meal");
     
    var queryURL = "https://www.themealdb.com/api/json/v1/1/random.php"

 //        var queryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchReq;
     
     
     
 $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function (response) {
    
    console.log(response);
    console.log(response.meals[0].strMeal);
    
     // Create CODE HERE to transfer content to HTML - left side column
    $(".meal").html("<h5>" + response.meals[0].strMeal);

    $(".instructions").text("Instructions: " + response.meals[0].strInstructions);

    $(".ingredients").text("Ingredients: " + response.meals[0].strIngredient1); // can only add 1, plus need to add measures using strMeasures to go with each ingredient

    $(".category").text("Food Category: " + response.meals[0].strCategory);

    $(".area").text("Food Region: " + response.meals[0].strArea);

    /* right side column - tried doing the below to add another recipe, could not get to work

    $(".meal").html("<h5>" + response.meals[1].strMeal);

    $(".instructions").text("Instructions: " + response.meals[1].strInstructions);

    $(".ingredients").text("Ingredients: " + response.meals[1].strIngredient1); // can only add 1, plus need to add measure

    $(".category").html("<li>" + "Food Type: " + response.meals[1].strCategory);

    $(".area").html("<li>" + response.meals[1].strArea);



    /*  SOMETHING ISN'T WORKING FOR IMAGE, TRIED CODE BELOW BUT NOT PULLING

    var newImage = document.createElement("img");
    newImage.src = $(response.meals[0].strMealThumb);
    var src = document.getElementById("mealThumb");
    src.appendChild(newImage); */

/*  CODE BELOW FROM JENNIFER
    var newImage = $("<img src = '" + response.meals[0].strMealThumb + "'>");
    $(".mealthumb").html("<img>" + response.meals[0].strMealThumb);
    
        console.log(newImage);*/

 });
    });
    
});
