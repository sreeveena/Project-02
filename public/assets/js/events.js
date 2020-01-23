var lat = "";
var lon = "";
function processSearch(){
    var searchEvent = $("#searchEvent").val();
    var searchLocation = $("#searchLocation").val();
    if(searchEvent != ""){
     query = "query="+searchEvent+"&";   
    }
    if(searchLocation != ""){
        query = query+"near="+searchLocation;   
    }
    if(searchLocation == "" && searchEvent == ""){
        query = "&lat_lon="+lat +","+lon ;   
    }
    $.ajax({
        url: "/api/events",
        method: "POST",
        data: {query: query, date: todaysDate()}
    }).then(function (response){
        // console.log(response);
        createEventsTable(response);
        
    });
}
$(function() {
    $("#searchLocation").on("keypress", function(e) {
        
        if(e.which === 13){
            processSearch();
        }
        return;
    });
});

$(function() {
    $("#searchEvent").on("keypress", function(e) {
       
        if(e.which === 13){
            processSearch();
        }
        return;
    });
});

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
          lat = position.coords.latitude;
          lon = position.coords.longitude;
        getEvents(position.coords.latitude, position.coords.longitude);
        
      });
    } else {
      loc.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  function todaysDate(){
    var today =  new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if(dd<10) 
        dd=`0${dd}`;
    if(mm<10)
        mm=`0${mm}`;
    var startDate = `${yyyy}-${mm}-${dd}`;
    return startDate;
  }
function getEvents(lat, lon) {
    query = "&lat_lon="+lat +","+lon ;
    $.ajax({
        url: "/api/events",
        method: "POST",
        data: {query: query, date:todaysDate()}
    }).then(function (response){
        // console.log(response);
        createEventsTable(response);
        $.ajax({
            url: "https://geocode.xyz/" + lat + "," + lon + "?json=1",
            method: "GET",
        }).then(function (response){
            console.log(response);
            console.log(response.city, response.state);
            $("#searchLocation").val(response.city + "," + response.state);
        });
    });
}
getLocation();

// ---------------------------Create Events Table --------------------------
function createEventsTable(data){
    $("#eventsTable").remove();
    var mybody = document.getElementsByTagName("body")[0];
    var mytable = document.createElement("table");
    mytable.setAttribute("id","eventsTable");
    var mytablebody = document.createElement("tbody");
    mytablebody.setAttribute("id","eventsTBody");
    for(var j = 0; j < data.results.length; j++) {
        // creates a <tr> element
        mycurrent_row = document.createElement("tr");
        mycurrent_row.setAttribute("id","eventsTr");
        // creates a <td> element
        date_cell = document.createElement("td");
        date_cell.setAttribute("class","eventsDate");

        eventDate = document.createTextNode(formatedDate(data.results[j].activityStartDate));
        // eventDate = document.createTextNode(data.results[j].activityStartDate);


        mycurrent_cell = document.createElement("td");
        mycurrent_cell.setAttribute("class","eventsTd");
        
        // creates a Text Node
        currenttext = document.createTextNode(data.results[j].assetName);
        addresstext = document.createTextNode(data.results[j].place.placeName + " , "+
        data.results[j].place.cityName+ " , "+ data.results[j].place.stateProvinceCode);
        //http://api.amp.active.com/v2/search?asset.assetGuid=7e0cbff6-98ce-4a64-addf-4de5a85b78c8&api_key=9eqk4qg7mf27c4qwe5vxd79r
        // use the above url query format for querying only this event for registeration.
        //  the asset guid is unique for event.
        assetGuidText = document.createElement("div");
        assetGuidText.setAttribute("id","guid"+j);
        assetGuidText.innerHTML = data.results[j].assetGuid;
        assetGuidText.style.display = "none";
        //create registration button
        button = document.createElement("button");
        button.innerHTML = "Register";
        button.setAttribute("class","eventsButton");
        button_cell = document.createElement("td");
        date_cell.appendChild(eventDate);
        // appends the Text Node we created into the cell <td>
        mycurrent_cell.appendChild(currenttext);
        mycurrent_cell.appendChild(assetGuidText);
        mycurrent_cell.appendChild(addresstext);
        // appends the cell <td> into the row <tr>
        mycurrent_row.appendChild(date_cell);
        mycurrent_row.appendChild(mycurrent_cell);
        button_cell.appendChild(button);
        mycurrent_row.appendChild(button_cell);
        // appends the row <tr> into <tbody>
        mytablebody.appendChild(mycurrent_row);
    }
    mytable.appendChild(mytablebody);
    // appends <table> into <body>
    mybody.appendChild(mytable);
    
}

function formatedDate(date){
console.log(date);
// 2020-03-17T22:15:00
    date = date.substring(0, 10);
    console.log(date);
    d = new Date(date);
    formatedStr = getMonthString(d.getMonth()) + "  "+ d.getDate()+ "  "+d.getFullYear();
    return formatedStr;
}
function getMonthString(num){
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
  "July", "Aug", "Sep", "Oct", "Nov", "Dec"
];
return monthNames[num];
}


