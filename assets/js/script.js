// DOM variables
var today = $("#currentDay");
var blockCon = $("#schedule-blocks");

// Sets current day and date
today.text(moment().format("dddd, MMMM Do"));

// Current hour using military time
var currentHour = moment().format("H");

// Array of normal business hours
var workHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

// Adds time blocks that contain the hour, a form with a textarea, and a save icon
workHours.forEach((hourTxt, i) => {
    var hrRow = $("<div>").addClass("row");
    var hourDiv = $("<div>").addClass("col-2").text(hourTxt).addClass("time-block");
    var schedDiv = $("<div>").addClass("col-8");
    var formID = "text-input-" + hourTxt;
    var schedForm = $("<form>").append($("<textarea>").attr("id", formID));
    var svIcon = $("<i>").addClass("col-2 saveBtn fa-solid fa-floppy-disk fa-2xl");

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

// Retrieves any saved inputs from Local Storage
function init() {
    workHours.forEach((hour) => {
        var locKey = "text-input-" + hour;
        var locVal = localStorage.getItem(locKey);
        
        var timeBlock = $("#" + locKey);

        if (locVal) {
            console.log(locVal);
            timeBlock.val(locVal)
        }
    
    })
}

// Stores user input in Local Storage
function saveTxt(event) {
    var userClick = event.target;

    if (userClick.tagName != "I") {
        return
    }

    var userInput = userClick.previousElementSibling.firstElementChild.firstElementChild;
    console.log(userInput)
    localStorage.setItem(userInput.id, userInput.value);
}

blockCon.on("click", saveTxt);

init();