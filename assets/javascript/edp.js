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
        transitionSpeed: 1500
      }
    }
  });

  document.getElementById("bttnMealTry").style.visibility = "hidden";
  document.getElementById("bttnDrinkTry").style.visibility = "hidden";
  // Coding out the eat/meal section of the page

  $(".meal-button").on("click", function () {
    var meal = $(this).attr("data-meal");
    document.getElementById("bttnMealTry").style.visibility = "visible";
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
        if ((response.meals[i].strMeasure1 != "") && (response.meals[i].strMeasure1 != null)) {
          $(".meal-ingredient1").html(response.meals[i].strMeasure1 + " " + response.meals[i].strIngredient1 + "<br>");
        };

        if ((response.meals[i].strMeasure2 != "") && (response.meals[i].strMeasure2 != null)) {
          $(".meal-ingredient2").html(response.meals[i].strMeasure2 + " " + response.meals[i].strIngredient2 + "<br>");
        };

        if ((response.meals[i].strMeasure3 != "")  && (response.meals[i].strMeasure3 != null)){
          $(".meal-ingredient3").html(response.meals[i].strMeasure3 + " " + response.meals[i].strIngredient3 + "<br>");
        };

        if ((response.meals[i].strMeasure4 != "")  && (response.meals[i].strMeasure4 != null)){
          $(".meal-ingredient4").html(response.meals[i].strMeasure4 + " " + response.meals[i].strIngredient4 + "<br>");
        };

        if ((response.meals[i].strMeasure5 != "")  && (response.meals[i].strMeasure5 != null)){
          $(".meal-ingredient5").html(response.meals[i].strMeasure5 + " " + response.meals[i].strIngredient5 + "<br>");
        };

        if ((response.meals[i].strMeasure6 != "")  && (response.meals[i].strMeasure6 != null)) {
          $(".meal-ingredient6").html(response.meals[i].strMeasure6 + " " + response.meals[i].strIngredient6 + "<br>");
        };

        if ((response.meals[i].strMeasure7 != "")  && (response.meals[i].strMeasure7 != null)) {
          $(".meal-ingredient7").html(response.meals[i].strMeasure7 + " " + response.meals[i].strIngredient7 + "<br>");
        };

        if ((response.meals[i].strMeasure8 != "")  && (response.meals[i].strMeasure8 != null)){
          $(".meal-ingredient8").html(response.meals[i].strMeasure8 + " " + response.meals[i].strIngredient8 + "<br>");
        };

        if ((response.meals[i].strMeasure9 != "")  && (response.meals[i].strMeasure9 != null)){
          $(".meal-ingredient9").html(response.meals[i].strMeasure9 + " " + response.meals[i].strIngredient9 + "<br>");
        };

        if ((response.meals[i].strMeasure10 != "")  && (response.meals[i].strMeasure10 != null)){
          $(".meal-ingredient10").html(response.meals[i].strMeasure10 + " " + response.meals[i].strIngredient10 + "<br>");
        };

        if ((response.meals[i].strMeasure11 != "")  && (response.meals[i].strMeasure11 != null)){
          $(".meal-ingredient11").html(response.meals[i].strMeasure11 + " " + response.meals[i].strIngredient11 + "<br>");
        };

        if ((response.meals[i].strMeasure12 != "")  && (response.meals[i].strMeasure12 != null)){
          $(".meal-ingredient12").html(response.meals[i].strMeasure12 + " " + response.meals[i].strIngredient12 + "<br>");
        };

        if ((response.meals[i].strMeasure13 != "")  && (response.meals[i].strMeasure13 != null)){
          $(".meal-ingredient13").html(response.meals[i].strMeasure13 + " " + response.meals[i].strIngredient13 + "<br>");
        };

        if ((response.meals[i].strMeasure14 != "")  && (response.meals[i].strMeasure14 != null)) {
          $(".meal-ingredient14").html(response.meals[i].strMeasure14 + " " + response.meals[i].strIngredient14 + "<br>");
        };

        if ((response.meals[i].strMeasure15 != "")  && (response.meals[i].strMeasure15 != null)){
          $(".meal-ingredient15").html(response.meals[i].strMeasure15 + " " + response.meals[i].strIngredient15 + "<br>");
        };

        if ((response.meals[i].strMeasure16 != "")  && (response.meals[i].strMeasure16 != null)){
          $(".meal-ingredient16").html(response.meals[i].strMeasure16 + " " + response.meals[i].strIngredient16 + "<br>");
        };

        if ((response.meals[i].strMeasure17 != "")  && (response.meals[i].strMeasure17 != null)){
          $(".meal-ingredient17").html(response.meals[i].strMeasure17 + " " + response.meals[i].strIngredient17 + "<br>");
        };

        if ((response.meals[i].strMeasure18 != "")  && (response.meals[i].strMeasure18 != null)){
          $(".meal-ingredient18").html(response.meals[i].strMeasure18 + " " + response.meals[i].strIngredient18 + "<br>");
        };

        if ((response.meals[i].strMeasure19 != "")  && (response.meals[i].strMeasure19 != null)){
          $(".meal-ingredient19").html(response.meals[i].strMeasure19 + " " + response.meals[i].strIngredient19 + "<br>");
        };

        if ((response.meals[i].strMeasure20 != "")  && (response.meals[i].strMeasure20 != null)){
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
    document.getElementById("bttnDrinkTry").style.visibility = "visible";
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
        if ((response.drinks[i].strIngredient1 !== "")  && (response.drinks[i].strIngredient1 != null)){
          $(".drink-ingredient1").html(response.drinks[i].strMeasure1 + " " + response.drinks[i].strIngredient1 + "<br>");
        };

        if ((response.drinks[i].strIngredient2 !== "")   && (response.drinks[i].strIngredient2 != null)){
          $(".drink-ingredient2").html(response.drinks[i].strMeasure2 + " " + response.drinks[i].strIngredient2 + "<br>");
        };

        if ((response.drinks[i].strIngredient3 !== "")   && (response.drinks[i].strIngredient3 != null)){
          $(".drink-ingredient3").html(response.drinks[i].strMeasure3 + " " + response.drinks[i].strIngredient3 + "<br>");
        };

        if ((response.drinks[i].strIngredient4 !== "")   && (response.drinks[i].strIngredient4 != null)){
          $(".drink-ingredient4").html(response.drinks[i].strMeasure4 + " " + response.drinks[i].strIngredient4 + "<br>");
        };

        if ((response.drinks[i].strIngredient5 !== "")   && (response.drinks[i].strIngredient5 != null)){
          $(".drink-ingredient5").html(response.drinks[i].strMeasure5 + " " + response.drinks[i].strIngredient5 + "<br>");
        };
        if ((response.drinks[i].strIngredient6 !== "")   && (response.drinks[i].strIngredient6 != null)){
          $(".drink-ingredient6").html(response.drinks[i].strMeasure6 + " " + response.drinks[i].strIngredient6 + "<br>");
        };

        if ((response.drinks[i].strIngredient7 !== "")   && (response.drinks[i].strIngredient7 != null)){
          $(".drink-ingredient7").html(response.drinks[i].strMeasure7 + " " + response.drinks[i].strIngredient7 + "<br>");
        };

        if ((response.drinks[i].strIngredient8 !== "")   && (response.drinks[i].strIngredient8 != null)){
          $(".drink-ingredient8").html(response.drinks[i].strMeasure8 + " " + response.drinks[i].strIngredient8 + "<br>");
        };

        if ((response.drinks[i].strIngredient9 !== "")   && (response.drinks[i].strIngredient9 != null)){
          $(".drink-ingredient9").html(response.drinks[i].strMeasure9 + " " + response.drinks[i].strIngredient9 + "<br>");
        };

        if ((response.drinks[i].strIngredient10 !== "")   && (response.drinks[i].strIngredient10 != null)){
          $(".drink-ingredient10").html(response.drinks[i].strMeasure10 + " " + response.drinks[i].strIngredient10 + "<br>");
        };

        if ((response.drinks[i].strIngredient11 !== "")   && (response.drinks[i].strIngredient11 != null)){
          $(".drink-ingredient11").html(response.drinks[i].strMeasure11 + " " + response.drinks[i].strIngredient11 + "<br>");
        };

        if ((response.drinks[i].strIngredient12 !== "")   && (response.drinks[i].strIngredient12 != null)){
          $(".drink-ingredient12").html(response.drinks[i].strMeasure12 + " " + response.drinks[i].strIngredient12 + "<br>");
        };

        if ((response.drinks[i].strIngredient13 !== "")   && (response.drinks[i].strIngredient13 != null)){
          $(".drink-ingredient13").html(response.drinks[i].strMeasure13 + " " + response.drinks[i].strIngredient13 + "<br>");
        };

        if ((response.drinks[i].strIngredient14 !== "")   && (response.drinks[i].strIngredient14 != null)){
          $(".drink-ingredient14").html(response.drinks[i].strMeasure14 + " " + response.drinks[i].strIngredient14 + "<br>");
        };

        if ((response.drinks[i].strIngredient15 !== "")   && (response.drinks[i].strIngredient15 != null)){
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



//Game Code begins

        // Golbal variable section begins
        var deckId = "";
        var cardsRemaining = parseInt(52);
        var cardValue = "";
        var cardSuite = "";
        var cardCode = "";
        var selectCount = 0;
        var countDraw = 4;
        var valuePicked, suitePicked = false;
        var selectedCards = [];
        var drawnCards = [];
        drawCardNow = false;
        // Golbal variable section ends

        initialLoad();
        var i=0;

        // Initial Load function creates buttons from the array.
        initialLoad();
        keyboardReset("E");
        newDeckCards();

        function initialLoad(){
            $("#imgrow1col1").css('background-image', 'url("assets/images/PlayingCard-front2.jpg")');
            $("#imgrow1col2 img").css('background-image', 'url("assets/images/PlayingCard-front2.jpg")');
            $("#imgrow2col1 img").css('background-image', 'url("assets/images/PlayingCard-front2.jpg")');
            $("#imgrow2col2 img").css('background-image', 'url("assets/images/PlayingCard-front2.jpg")');
            document.getElementById("bttnGameStart").disabled = false;  
            document.getElementById("bttnDrawCard").disabled = true;  
            $("#bttnDrawCard").attr("class", "btnStart btn-warning");
            $("#message").html("Choose you choice of any four cards. Once done, press Draw Cards!");
        };
        
        // Initial Button Reset
        function keyboardReset(btnRst){
            var bttnreset = "";
            for (var i =0; i < 27; i++){
                var j= i;
                if (i===0){j = "A"};
                if (i===1){j = "10"};
                if (i===10){j = "K"};
                if (i===11){j = "Q"};
                if (i===12){j = "J"};

                bttnreset = "bttn" + j;
                if (btnRst === "E"){
 
                }
                else{
    
                }
            }
        };

        // This function Pulls a Deck of Cards- For this game, we do this first time time. This call returns the Deck Id , which will be sued for subsequent calls.
        function newDeckCards(){
            var queryURL = "https://deckofcardsapi.com/api/deck/new/";

            $.ajax({
                url: queryURL,
                method: "GET"
            })
              .then(function(response) {
              // Following code fetches the response from the query
              deckId = response.deck_id;
            });
        };

        function gameStart(){
            // First Step is to shuffle the card once more  
            $("#message").html("Choose your choice of any four cards. Once done, press Draw Cards!");
            valuePicked = false;
            suitePicked = false;
            selectCount = 0;
            drawCardNow = false;
            document.getElementById("bttnDrawCard").disabled = true;  
            $("#bttnDrawCard").attr("class", "btnStart btn-warning");
            selectedCards.length = 0;  
            drawnCards.length = 0;  
            $(".imageCards").empty();
            $(".imagePCards").empty();
            // Shuffle cards before start of the game
            shuffleCards();
        };

        function shuffleCards(){
            // shuffle the cards
            var queryURL = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

            $.ajax({
                url: queryURL,
                method: "GET"
            })
              .then(function(response) {
              // Following code fetches the response from the query
              deckId = response.deck_id;
            });
        };

        function drawACard(){

            // Drawing a card randomly
            //https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2

            // Sorting existing selected Cards array
            selectedCards.sort();  
            drawnCards = [];
            var currentDeckId = deckId;
            var countToDraw = countDraw;

            var queryURL = "https://deckofcardsapi.com/api/deck/" + currentDeckId + "/draw/?count=" + countDraw;

            $("imageCards").empty();
            $.ajax({
                url: queryURL,
                method: "GET"
                }).then(function(response) {

                var count = response.cards.length;
                // Create CODE HERE to Log the queryURL

                var k = 1;
                $(".imagePCards").empty();
                for (var i= 0; i < response.cards.length; i++){

                    var itm = "itm" + k;
                    k++;
                    drawnCards.push(response.cards[i].code);
                    var imageDrawnCards = $("<div class='imgitm' id='" + itm + "'>");
                    $(".imageCards").append(imageDrawnCards);
                    //Create Image Tag dynamically
                    var cardImage = $("<img>");
    
                    //Setting Image Attributes
                    //cardImage.attr("src", response.cards[i].images.png);
                    cardImage.attr("src", response.cards[i].image);
                    //cardImage.attr({"class": "cardImg"});
                    cardImage.attr({"width": "150"});
                    cardImage.attr({"height": "200"});
                    //cardImage.attr({"float": "left"});
                    $(imageDrawnCards).append(cardImage);
                    //Flipping the player selected cards
                    var imgId = selectedCards[i];
                    var pURL = 'https://deckofcardsapi.com/static/img/' + imgId + '.png';
                    var imagePlayerCards = $("<div class='imgitm' id='" + itm + "'>");
                    $(".imagePCards").append(imagePlayerCards);
                    var cardPImage = $("<img>");
                    cardPImage.attr("src", pURL);
                    //cardPImage.attr({"class": "cardImg"});
                    cardPImage.attr({"width": "150"});
                    cardPImage.attr({"height": "200"});
                    $(imagePlayerCards).append(cardPImage);
                  };

                  document.getElementById("bttnDrawCard").disabled = true; 
                  $("#bttnDrawCard").attr("class", "btnStart btn-warning");
                  drawnCards.sort();
                  if (selectedCards === drawnCards){
                      $("#message").html("You Won!!!");
                  }
                  else{
                    $("#message").html("Sorry!. Try again!!!");
                  }
            });
        };

    // Button click logic
    $("#bttnGameStart").on("click", gameStart);

    $("#bttnDrawCard").on("click", drawACard);

    $(".btn").click(function(){
        var bttnValue = this.id;
        bttnValue = bttnValue.substr(4);
        if (bttnValue === 'S' || bttnValue === 'H' || bttnValue === 'D' || bttnValue === 'C'){
            cardSuite = bttnValue;
            suitePicked = true;
        }
        else
        {
            valuePicked = true;
            if (bttnValue === '10'){
                cardValue = bttnValue.substring(1);
            }
            else{
                cardValue = bttnValue;
            }
        }
        // Checking if more than 4 cards are selected. If so It is time to Draw the Cards
        if (drawCardNow === false) {
            if (valuePicked && suitePicked){
                selectCount++;
                var itm = 0;
                if (selectCount === 1){
                    itm = "itm" + selectCount;
    
                    valuePicked = false;
                    suitePicked = false;
                    var imagePlayerCards = $("<div class='imgitm' id='" + itm + "'>");
                    $(".imagePCards").append(imagePlayerCards);
                    var cardPImage = $("<img>");
                    //cardPImage.attr("src", "assets/images/PlayingCard-front1.jpg");
                    cardPImage.attr("src", "assets/images/playing-cards-aviator-1.png");
                    cardPImage.attr({"class": "cardImg"});
                    cardPImage.attr({"width": "150"});
                    cardPImage.attr({"height": "200"});
                    $(imagePlayerCards).append(cardPImage);
                    selectedCards.push(cardValue + cardSuite);
                }
                if (selectCount === 2){
                    itm = "itm" + selectCount;
    
                    valuePicked = false;
                    suitePicked = false;
                    var imagePlayerCards = $("<div class='imgitm' id='" + itm + "'>");
                    $(".imagePCards").append(imagePlayerCards);
                    var cardPImage = $("<img>");
                    //cardPImage.attr("src", "assets/images/PlayingCard-front1.jpg");
                    cardPImage.attr("src", "assets/images/playing-cards-aviator-2.png");
                    cardPImage.attr({"class": "cardImg"});
                    cardPImage.attr({"width": "150"});
                    cardPImage.attr({"height": "200"});
                    $(imagePlayerCards).append(cardPImage);
                    selectedCards.push(cardValue + cardSuite);
                }
                if (selectCount === 3){
                    itm = "itm" + selectCount;
    
                    valuePicked = false;
                    suitePicked = false;
                    var imagePlayerCards = $("<div class='imgitm' id='" + itm + "'>");
                    $(".imagePCards").append(imagePlayerCards);
                    var cardPImage = $("<img>");
                    //cardPImage.attr("src", "assets/images/PlayingCard-front1.jpg");
                    cardPImage.attr("src", "assets/images/playing-cards-aristocrat-1.png");
                    cardPImage.attr({"class": "cardImg"});
                    cardPImage.attr({"width": "150"});
                    cardPImage.attr({"height": "200"});
                    $(imagePlayerCards).append(cardPImage);
                    selectedCards.push(cardValue + cardSuite);
                }
                if (selectCount === 4){
                    itm = "itm" + selectCount;
    
                    valuePicked = false;
                    suitePicked = false;
                    selectCount = 0;
                    drawCardNow = true;
                    var imagePlayerCards = $("<div class='imgitm' id='" + itm + "'>");
                    $(".imagePCards").append(imagePlayerCards);
                    var cardPImage = $("<img>");
                    //cardPImage.attr("src", "assets/images/PlayingCard-front1.jpg");
                    cardPImage.attr("src", "assets/images/playing-cards-superior-classic-back-1.png");
                    cardPImage.attr({"class": "cardImg"});
                    cardPImage.attr({"width": "150"});
                    cardPImage.attr({"height": "200"});
                    $(imagePlayerCards).append(cardPImage);
                    selectedCards.push(cardValue + cardSuite);
                    document.getElementById("bttnDrawCard").disabled = false;  
                    $("#bttnDrawCard").attr("class", "btnStart btn-success");
                    $(this.id).css('color', 'red');
                }
            }
        }

   });
//Game code ends

}); // closing doc ready
