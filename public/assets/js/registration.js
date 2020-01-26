function giphyDisplay() {
    $("#giphy-btndisplay").empty();
    var superhero = $(this).attr("data-giphy");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=tuHOptJN3WWLtwMil1BWJF8fU18JA1f5&q=" + superhero + "&limit=10&offset=0&rating=G&lang=en";
    //Making an AJAX call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        //adding div class with a card-group using bootstrap 
        var giphyDiv = $("<div class ='card-group'>");
        $("#giphy-btndisplay").prepend(giphyDiv);
        //iterating the response in a for loop and adding them to a card div to arrange them using bootstrap
        for (i = 0; i < response.data.length; i++) {
            //keeping this console log to ensure we get the right API callback
            console.log(response.data)
            var card = $("<div class ='card'>");
            $(giphyDiv).prepend(card);
            var gifRating = $("<p>").text("Rating: " + response.data[i].rating);
            var gifTitle = $("<p>").text("Title: " + response.data[i].title);
            var gifImage = $("<img>")
                .attr("class", 'super_hero_images')
                .attr("src", response.data[i].images.original_still.url)
                .attr('data-alt', response.data[i].images.original.url)
            $(card).prepend(gifRating, gifTitle, gifImage);
        }
    }
    )
};