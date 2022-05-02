// Sets current day and date
var today = $("#currentDay");

today.text(moment().format("dddd, MMMM Do"));

// Adds time blocks
var blockCon = $("#schedule-blocks");

for (var i = 9; i < 18; i++) {
    var hrRow = $("<div>").addClass("row");
    var hour = $("<div>").addClass("col-2");
    var schedInput = $("<div>").addClass("col-8");
    var svIcon = $("<div>").addClass("col-2");


    if (i > 12) {
        hour.text([i]-12 + "PM");
    } else if (i < 12) {
        hour.text([i] + "AM");
    } else {
        hour.text([i] + "PM");
    }

    schedInput.append($("<input>"));
    svIcon.text("Save Icon");

    hrRow.append(hour);
    hrRow.append(schedInput);
    hrRow.append(svIcon);

    blockCon.append(hrRow);
}