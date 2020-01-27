var assetGuid = "";
$(function(){
    var urlParams = new URLSearchParams(window.location.search);
    assetGuid = urlParams.get('asset');
    fetchAssetData(assetGuid);

});
function fetchAssetData(assetGuid) {
    // console.log("fetchAssetData invoked");
    $.ajax("/api/asset/"+assetGuid, {
        type: "GET"
        }).then(   
        function(res, err) {
            // console.log("Got Asset Data");
            // console.log(res);
            createEventTable(res);
            
        }
    );
}
// ---------------------------Create Events Table --------------------------
function createEventTable(data){

    $("#eventTable").remove();
     var home = $("#eventContent");
    var eventTable = $("<div id='eventTable'>");
        var eventData = `
        <h1>${data.results[0].assetName}</h1>
        <div class="font-weight-bold">${formatedDate(data.results[0].activityStartDate)}</div>
        <h8>${data.results[0].place.placeName + " , "+data.results[0].place.addressLine1Txt+ " , "+
        data.results[0].place.cityName+ " , "+ data.results[0].place.stateProvinceCode}</h8>
        <div><button id= "regisButton" class="btn btn-primary btn-lg btn-block">Register</button></div>
        <div class="break-line"></div>
        
        <h4> About this event </h4>
        <div class="break-line"></div>
        <div>${data.results[0].assetName}</div>
        <div><i class="fa fa-clock-o date"></i>${data.results[0].activityStartDate}</div>
        <div><i class="fa fa-map-marker date"></i>${data.results[0].place.placeName} </div>
        <div class="date1">${data.results[0].place.addressLine1Txt+ "  "+ data.results[0].place.cityName+ " , "+ data.results[0].place.stateProvinceCode}</div>
        <div><i class="fa fa-globe date"></i><a href="https://${data.results[0].homePageUrlAdr}"> ${data.results[0].homePageUrlAdr}</a></div>
        <div class="break-line"></div>
        <div>${data.results[0].assetDescriptions[0].description} <div>
        `;
        
        home.append(eventTable);
        eventTable.append(eventData);
        
    
}