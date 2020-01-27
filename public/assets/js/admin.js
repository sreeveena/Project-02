$(function () {
    $.ajax({
        url: "/api/eventsforadmin",
        method: "GET",
    }).then(function (response) {
       
        fillAdminTable(response);
    });
});
function fillAdminTable(data) {
    var home = $("#events");
    var table = `<table class="table">
    <thead>
    <tr>
        <th>Event Name</th>
        <th>Registered Users</th>
    </tr>
    </thead>
    <tbody>
      `;
    var tableElement = $(table);
    var prevName = "";
    var card = "";
    var eventName = "";
    var eventEmail = "";
    var rowSpan = 0;
    var cardTemp = "";
    for (var j = 0; j < data.length; j++) {
        if (prevName == "") {
            card = "";
            eventName = data[j].name;
            eventEmail = data[j].email;
            prevName = data[j].name;
            rowSpan++;
            continue;
        }
        if (prevName != data[j].name) {
            cardTemp = `
            <tr >
                <td rowspan=${rowSpan}>${eventName} </td>
                <td>${eventEmail} </td>
            </tr>
            `;
            card = cardTemp + card;
            eventName = data[j].name;
            eventEmail = data[j].email;
            prevName = data[j].name;
            rowSpan = 1;

        } else {
            card += `
            <tr>
                <td>${data[j].email} </td>
            </tr>
            `;
            rowSpan++;
            continue;
        }

        var card1 = $(card);
        tableElement.append(card1);
        card = "";
    }
    cardTemp = `
            <tr >
                <td rowspan=${rowSpan}>${eventName} </td>
                <td>${eventEmail} </td>
            </tr>
            `;
    card = cardTemp + card;
    var card1 = $(card);
    tableElement.append(card1);
    var endTable = `
     </tbody>
     </table>
     `;
    tableElement.append($(endTable));
    home.append(tableElement);
}
