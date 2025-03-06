// Array to hold month names
const months = ["January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"];

// Global currentDate to track the selected date
let currentDate = new Date();

function createDays() {
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();

    let calender = document.getElementById("calender");
    calender.innerHTML = ""; // Clear previous calendar

    // Update the month and year at the top
    let monthYearDisplay = document.getElementById("monthYear");
    monthYearDisplay.innerText = `${months[currentMonth]} ${currentYear}`;

    let firstDayofMonth = new Date(currentYear, currentMonth, 1).getDay();
    let lastDateofMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    let lastDateofPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

    // Add days from the previous month
    for (let i = firstDayofMonth - 1; i >= 0; i--) {
        let day = document.createElement("li");
        day.classList.add("dag", "inactive");
        day.innerText = lastDateofPrevMonth - i;
        calender.appendChild(day);
    }

    // Add days for the current month
    for (let i = 1; i <= lastDateofMonth; i++) {
        let day = document.createElement("li");
        day.classList.add("dag");
        day.innerText = i;
        calender.appendChild(day);
    }

    // Add days for the next month (if needed)
    let remainingDays = 7 - (calender.children.length % 7);
    for (let i = 1; i < remainingDays && remainingDays !== 7; i++) {
        let day = document.createElement("li");
        day.classList.add("dag", "inactive");
        day.innerText = i;
        calender.appendChild(day);
    }
}

createDays();

// Left Arrow Functionality
let LeftArrow = document.getElementsByClassName("fa-arrow-left");

LeftArrow[0].onclick = function() {
    // Decrease the month by 1
    currentDate.setMonth(currentDate.getMonth() - 1);
    createDays(); // Re-render the calendar with updated date
}

// Right Arrow Functionality
let RightArrow = document.getElementsByClassName("fa-arrow-right");

RightArrow[0].onclick = function() {
    // Increase the month by 1
    currentDate.setMonth(currentDate.getMonth() + 1);
    createDays(); // Re-render the calendar with updated date
}
