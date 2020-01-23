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
        createEventsTable(response);
    });
}
getLocation();
// ---------------------------Create Events Table --------------------------
function createEventsTable(data){
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
        mycurrent_cell = document.createElement("td");
        mycurrent_cell.setAttribute("class","eventsTd");
        // creates a Text Node
        currenttext = document.createTextNode(data.results[j].assetName);
        //create registration button
        button = document.createElement("button");
        button.innerHTML = "Register";
        button.setAttribute("class","eventsButton");
        button_cell = document.createElement("td");
        // appends the Text Node we created into the cell <td>
        mycurrent_cell.appendChild(currenttext);
        // appends the cell <td> into the row <tr>
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

