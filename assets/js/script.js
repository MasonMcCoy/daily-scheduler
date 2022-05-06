// Sets current day and date
var today = $("#currentDay");

today.text(moment().format("dddd, MMMM Do"));

var currentHour = moment().format("H");
var workHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];


// Adds time blocks
var blockCon = $("#schedule-blocks");

workHours.forEach((hourTxt, i) => {
    var hrRow = $("<div>").addClass("row");
    var hourDiv = $("<div>").addClass("col-2").text(hourTxt).addClass("time-block");
    var schedDiv = $("<div>").addClass("col-8");
    var schedForm = $("<form>").append($("<textarea>"));
    var svIcon = $("<i>").addClass("col-2 saveBtn fa-solid fa-floppy-disk fa-2xl"); //fa-solid fa-floppy-disk fa-2xl 

     if ((i + 9) < currentHour) {
        schedDiv.addClass('past')
     } else if ((i + 9) > currentHour) {
        schedDiv.addClass('future')
     } else {
        schedDiv.addClass('present')
     }

    schedDiv.append(schedForm);

    hrRow.append(hourDiv);
    hrRow.append(schedDiv);
    hrRow.append(svIcon);

    blockCon.append(hrRow);
});

// for (var i = 9; i < 18; i++) {
    // var hrRow = $("<div>").addClass("row");
    // var hour = $("<div>").addClass("col-2");
    // var schedDiv = $("<div>").addClass("col-8 time-block");
    // var schedForm = $("<form>").append($("<textarea>").attr("rows", "4").attr("cols", "50"));
    // var svIcon = $("<i>").addClass("col-2 fa-solid fa-floppy-disk fa-2xl");


//     if (i > 12) {
//         hour.text([i] - 12 + "PM");
//     } else if (i < 12) {
//         hour.text([i] + "AM");
//     } else {
//         hour.text([i] + "PM");
//     }

//     schedForm.addClass("description");

//     schedDiv.append(schedForm);

//     hrRow.append(hour);
//     hrRow.append(schedDiv);
//     hrRow.append(svIcon);

//     blockCon.append(hrRow);
// }

//     i < currentHour
//     ? schedDiv.addClass('past')
//     : i === currentHour
//     ? schedDiv.addClass('present')
//     : schedDiv.addClass('future')