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
        <div>${data.results[0].assetName}</div>
        <div>${data.results[0].activityStartDate}</div>
        <div>${data.results[0].place.placeName + " , "+
        data.results[0].place.cityName+ " , "+ data.results[0].place.stateProvinceCode}</div>
        <button class="btn success">Register</button>
        <div></div>

        <div> About this event </div>
        <div>${data.results[0].assetName}</div>
        <div>${data.results[0].activityStartDate}</div>
        <div>${data.results[0].place.placeName} </div>
        <div>${data.results[0].place.addressLine1Txt+ "  "+ data.results[0].place.cityName+ " , "+ data.results[0].place.stateProvinceCode}</div>
        <div> ${data.results[0].homePageUrlAdr}</div>

        <div>${data.results[0].assetDescriptions[0].description} <div>
        `;
        
        home.append(eventTable);
        eventTable.append(eventData);
        
    
}