var locationQuery = "https://www.google.com/maps/embed/v1/place?q=" + locationAPI;
var locationAPI = "&key="+ "AIzaSyD-wGV-73Rq0qk5sgzrGXauPnJ-J1kgGcU";

$.ajax({
    url: locationQuery + locationAPI,
    method: "GET"
}).then(function(response){
    console.log(response);
    $("#locationAddress").text(response.Title);
});