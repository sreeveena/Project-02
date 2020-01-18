function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        getEvents(position.coords.latitude, position.coords.longitude);
      });
    } else {
      loc.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
function getEvents(lat, lon) {
    var today =  new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if(dd<10) 
        dd=`0${dd}`;
    if(mm<10)
        mm=`0${mm}`;
    var startDate = `${yyyy}-${mm}-${dd}`;

    $.ajax({
        url: "/api/events",
        method: "POST",
        data: {lon: lon, lat:lat, date:startDate}
    }).then(function (response){
        // console.log(response);
        for(var i = 0; i<10; i++){
            $(".events").html(response.results[0].assetName);
            var table = "";
        }
        
        
    });
}
getLocation();
