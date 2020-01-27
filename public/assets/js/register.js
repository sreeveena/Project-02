var assetGuid = "";
var assetName = "";
var eventStartDate = "";
$(function () {
    var urlParams = new URLSearchParams(window.location.search);
    assetGuid = urlParams.get('asset');
    fetchAssetData(assetGuid);

});
    
function fetchAssetData(assetGuid) {
   
    $.ajax("/api/asset/" + assetGuid, {
        type: "GET"
    }).then(
        function (res, err) {
           
            createEventTable(res);

        }
    );
}


function payment() {

    if(sessionId) {
        $("#payment-error").html("");
        $.ajax("/api/checkregister", {
            type: "POST",
            data: {assetName: assetName, assetGuid: assetGuid, userId: sessionId}
        }).then(
            function (res, err) {
                if(res.result == "true") {
                    $("#payment-error").html("This event is already registered!");
                    $("#payment-error").css("color","red");
                } else {
                    location.assign('/payment?userid=' + sessionId + '&assetguid=' + assetGuid + '&assetname=' + assetName + '&eventstartdate=' + eventStartDate);
                }
         });
    } else {
            $("#payment-error").html("Please login before registering for the event!");
            $("#payment-error").css("color","red");
    }
    
}


// ---------------------------Create Events Table --------------------------
function createEventTable(data) {
    assetName = data.results[0].assetName;
    eventStartDate = data.results[0].activityStartDate;
    $("#eventTable").remove();
    var home = $("#eventContent");
    var eventTable = $("<div id='eventTable'>");
    var eventData = `
        <h1>${data.results[0].assetName}</h1>
        <div class="font-weight-bold">${formatedDate(data.results[0].activityStartDate)}</div>
        <h8>${data.results[0].place.placeName + " , " + data.results[0].place.addressLine1Txt + " , " +
        data.results[0].place.cityName + " , " + data.results[0].place.stateProvinceCode}</h8>
        <div class="break-line"></div>
        
        <h4> About this event </h4>
        <div class="break-line"></div>
        <div>${data.results[0].assetName}</div>
        <div>${data.results[0].activityStartDate}</div>
        <div>${data.results[0].place.placeName + " , " +
        data.results[0].place.cityName + " , " + data.results[0].place.stateProvinceCode}</div>
        
        <div></div>

        <div> About this event </div>
        <div>${data.results[0].assetName}</div>
        <div>${data.results[0].activityStartDate}</div>
        <div>${data.results[0].place.placeName} </div>
        <div>${data.results[0].place.addressLine1Txt + "  " + data.results[0].place.cityName + " , " + data.results[0].place.stateProvinceCode}</div>
        <div> ${data.results[0].homePageUrlAdr}</div>

        <div><i class="fa fa-clock-o date"></i>${data.results[0].activityStartDate}</div>
        <div><i class="fa fa-map-marker date"></i>${data.results[0].place.placeName} </div>
        <div class="date1">${data.results[0].place.addressLine1Txt + "  " + data.results[0].place.cityName + " , " + data.results[0].place.stateProvinceCode}</div>
        <div><i class="fa fa-globe date"></i><a href="https://${data.results[0].homePageUrlAdr}"> ${data.results[0].homePageUrlAdr}</a></div>
        <div class="break-line"></div>
        <div>${data.results[0].assetDescriptions[0].description} <div>
        `;

    home.append(eventTable);
    eventTable.append(eventData);

    const myApiKey = 'AIzaSyD-wGV-73Rq0qk5sgzrGXauPnJ-J1kgGcU';
    const lat1 = parseFloat(data.results[0].place.latitude);
    const lng1 = parseFloat(data.results[0].place.longitude);
    const zoom = 12;

    const parentElement = document.getElementById('map');
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD-wGV-73Rq0qk5sgzrGXauPnJ-J1kgGcU';
    script.async = true;
    script.defer = true;
    script.onload = function () {
        var mapLocation = { lat: lat1, lng: lng1 };
        var map = new google.maps.Map(parentElement, {
            center: mapLocation,
            zoom: zoom
        });

        var marker = new google.maps.Marker({ position: mapLocation, map: map });
    };
    parentElement.insertBefore(script, null);
}
