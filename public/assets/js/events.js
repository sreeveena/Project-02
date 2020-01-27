var lat = "";
var lon = "";
function processSearch() {
    var searchEvent = $("#searchEvent").val();
    var searchLocation = $("#searchLocation").val();
    var query = "";
    if (searchEvent != "") {
        query = "query=" + searchEvent + "&";
    }
    if (searchLocation != "") {
        query = query + "near=" + searchLocation;
    }
    if (searchLocation == "" && searchEvent == "") {
        query = "&lat_lon=" + lat + "," + lon;
    }
    $.ajax({
        url: "/api/events",
        method: "POST",
        data: { query: query, date: todaysDate() }
    }).then(function (response) {
       
        createEventsTable(response);

    });
}
//function to search for events in a particular location
$(function () {
    $("#searchLocation").on("keypress", function (e) {
        if (e.which === 13) {
            processSearch();
        }
        return;
    });
});
//function to search for  particular events
$(function () {
    $("#searchEvent").on("keypress", function (e) {
        if (e.which === 13) {
            processSearch();
        }
        return;
    });
});
var popper = "";
$(function () {
    $("#reg").hide();
    $("#registerButton").on("click", function (e) {
        var ref = $("#registerButton");
        var popup = $("#reg");
        popup.show();
        popper = new popper(ref, popup, { placement: 'top' });
    });
});

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            getEvents(position.coords.latitude, position.coords.longitude);

        });
    } else {
        loc.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function todaysDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10)
        dd = `0${dd}`;
    if (mm < 10)
        mm = `0${mm}`;
    var startDate = `${yyyy}-${mm}-${dd}`;
    return startDate;
}
function getEvents(lat, lon) {
    query = "&lat_lon=" + lat + "," + lon;
    $.ajax({
        url: "/api/events",
        method: "POST",
        data: { query: query, date: todaysDate() }
    }).then(function (response) {
        createEventsTable(response);
        $.ajax({
            url: "https://geocode.xyz/" + lat + "," + lon + "?json=1",
            method: "GET",
        }).then(function (response) {
            $("#searchLocation").val(response.city + "," + response.state);
        });
    });
}
getLocation();
//-------------------------------create event card ------------------------
function createEventsTable(data) {
    $("#accordion").remove();
    var home = $("#home");
    var accordion = $("<div id='accordion'>");
    var expand = "true";
    var collapsed = "";
    var show = "show";
    var assetGuidText = "";

    for (var j = 0; j < data.results.length; j++) {
        if (j != 0) {
            expand = "false";
            collapsed = "collapsed";
            show = "";
        }
        var card = `
        <div class="card">
          <div class="card-header" id="heading${j}">
            <h5 class="mb-0">
              <button class="btn btn-link ${collapsed}" data-toggle="collapse" data-target="#collapse${j}" aria-expanded="${expand}" aria-controls="collapse${j}">
              ${data.results[j].assetName}
              </button>
            </h5>
          </div>
      
          <div id="collapse${j}" class="collapse ${show}" aria-labelledby="heading${j}" data-parent="#accordion">
            <div class="card-body">
                <div> ${formatedDate(data.results[j].activityStartDate)}</div>
                <div>${data.results[j].place.placeName} , 
                ${data.results[j].place.cityName} , ${data.results[j].place.stateProvinceCode}</div>
              <button onclick="register('${data.results[j].assetGuid}')">Register</button>
            </div>
          </div>
          
        </div>
        `;
        var card1 = $(card);
        accordion.append(card1);
    }
    home.append(accordion);
}

function formatedDate(date) {
    date = date.substring(0, 10);
    d = new Date(date);
    formatedStr = getMonthString(d.getMonth()) + "  " + d.getDate() + "  " + d.getFullYear();
    return formatedStr;
}
function getMonthString(num) {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
        "July", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    return monthNames[num];
}

//register function will redirect to register.html
function register(asset) {
    window.location.assign("register?asset="+asset);
}

function fetchRegisteredEvents(user) {
    $.ajax({
        url: "/api/registeredevents/" + user,
        method: "GET",
    }).then(function (response) {
        fillRegisteredEventsTable(response);
    });
}

function fillRegisteredEventsTable(databaseResults) {
    for (var j = 0; j < databaseResults.length; j++) {
        $.ajax("/api/asset/" + databaseResults[j].guid, {
            type: "GET"
        }).then(
            function (res, err) {
                registeredEventsTable(res);
            }
        );
    }
}

// --------------------------------------------------Display user registered events --------------------------------
function registeredEventsTable(data) {
    // $("#registeredEvents").remove();
    var home = $("#registeredEvents");
    var j = 0;
    var card = `
        <h3>${data.results[j].assetName} </h3>
        <h4> ${formatedDate(data.results[j].activityStartDate)}</h4>
        <div>${data.results[j].place.placeName} , 
            ${data.results[j].place.cityName} , ${data.results[j].place.stateProvinceCode}</div>
        `;
    var card1 = $(card);
    // accordion.append(card1);
    home.append(card1);
}
