let date = new Date(2024, 1);

console.log(date);
function createDays(){
    let calender = document.getElementById("calender");
    calender.innerHTML = "";
    let currentYear = date.getFullYear();
    let currentMonth = date.getMonth();
    let firstDayofMonth = new Date(currentYear, currentMonth, 1).getDay();
    let lastDateofMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    


    for(let i = 1; i < firstDayofMonth; i++){
        let day = document.createElement("li");
        day.classList = "dag";
        day.innerText = "";
    
        calender.appendChild(day);
    }
    for(let i = 1; i <= lastDateofMonth; i++){
        let day = document.createElement("li");
        day.classList = "dag";
        day.innerText = i;
    
        calender.appendChild(day);
    }
   
}
this.dateText = document.createElement("p");
this.month = document.createElement("ul");


// const months = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli",
//  "Augustus", "September", "Oktober", "November", "December"];

// const renderKalender = () => {
//     let firstDayofMonth = new Date(currentYear, currentMonth, 1).getDay();
//     let lastDateofMonth = new Date(currentYear, currrentMonth + 1, 0).getDate();
//     let lastDayofMonth = new Date(currentYear, currrentMonth, lastDateofMonth).getDay();
//     let lastDateofLastMonth = new Date(currentYear, currrentMonth, 0).getDate();
//     console.log(lastDayofMonth)
//     let liTag = `li>${i}</li>`;

//     for (let i = 1; i > 0; i++){
//         liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}`;
//     }

//     for (let i = 1; i <= lastDateofMonth; i++) {
//         liTag2+= `<li class"inactive"${firstDayofMonth - i + 1}`
//     }
// }

createDays();

// console.log(renderKalender, createDays)

let LeftArrow = document.getElementsByClassName("fa-arrow-left")
console.log(LeftArrow)

LeftArrow[0].onclick = function(){
   date = new Date(date.getFullYear(), date.getMonth() - 1);
    console.log(date);
    createDays();
}

const RightArrow = document.getElementsByClassName("fa-arrow-right");


RightArrow[0].onclick = function(){
    date = new Date(date.getFullYear(), date.getMonth() + 1);
    console.log(date);
    createDays();
}
