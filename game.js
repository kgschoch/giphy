$(document).ready(function(){

$("button").on("click", function(){
  $("#giphs").empty();
  var animal = $(this).val();
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10"
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){
    console.log(response.data)
     for(var i=0;i<10;i++){
       var gifURL = response.data[i].images.original.url;
       createGif (gifURL);
     }
})

});
var createGif = function(data) {
  var gifContainer = $("#giphs");
  var gif = $("<img>").attr("src", data);
  gifContainer.append(gif);
};
})