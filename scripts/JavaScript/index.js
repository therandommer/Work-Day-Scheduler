$(document).ready(function () //will only run the script once the elements have initialised within the HTML file.
{
    //----Variable declaration----//

    let currentHour = dayjs().hour(); //current time used to indicate the correct tile to colour differently.
    let currentDay = dayjs().day(); //used to dssplay current day at the top of the page
    let currentDate = dayjs().date(); //used to display the current date in a number between 1-31
    let currentMonth = dayjs().month(); //used to display current month at the top of the page

    //----Object references----//

    $(".notification").addClass("hide"); //hides notification on js initialisation
    let todayEl = $("#currentDay"); //will display the current day as the website was loaded.
    let timeBlockEl = $("#timeBlock");

    //----Functions and logic----//

    //filter through current day, date and month to display the relevant string at the top of the page
    function displayToday() {
        let dayText = "Default Day";
        switch (currentDay) //translate each day from a number to readable string
        {
            case 0: //Sunday
                dayText = "Sunday";
                break;
            case 1:
                dayText = "Monday";
                break;
            case 2:
                dayText = "Tuesday";
                break;
            case 3:
                dayText = "Wednesday";
                break;
            case 4:
                dayText = "Thursday";
                break;
            case 5:
                dayText = "Friday";
                break;
            case 6: //Saturday
                dayText = "Saturday";
                break;
            default:
                console.log(`Reached default day with value: ${currentDay}`); //debug in case of error
                break;
        }
        let monthText = "Default Month";
        switch (currentMonth) //translate each month from a number to readable string
        {
            case 0: //January
                monthText = "January";
                break;
            case 1:
                monthText = "February";
                break;
            case 2:
                monthText = "March";
                break;
            case 3:
                monthText = "April";
                break;
            case 4:
                monthText = "May";
                break;
            case 5:
                monthText = "June";
                break;
            case 6:
                monthText = "July";
                break;
            case 7:
                monthText = "August";
                break;
            case 8:
                monthText = "September";
                break;
            case 9:
                monthText = "October";
                break;
            case 10:
                monthText = "November";
                break;
            case 11: //December
                monthText = "December";
                break;
            default:
                console.log(`Reached default month with value: ${currentMonth}`); //debug in case of error
                break;
        }
        if (currentDate === 1 || currentDate === 21 || currentDate === 31) //appending "st" to the 1st/21st/31st of a month
        {
            todayEl.text(`Today is: ${dayText}, ${currentDate}st of ${monthText}.`);
        }
        else if (currentDate === 2 || currentDate === 22) //appending "nd" to the 2nd/22nd of a month
        {
            todayEl.text(`Today is: ${dayText}, ${currentDate}nd of ${monthText}.`);
        }
        else //appending "th" to every other day
        {
            todayEl.text(`Today is: ${dayText}, ${currentDate}th of ${monthText}.`);
        }
    }
    //will get data from local storage. If none is found, return empty, else return with saved events. Repeated each hour
    function getData(findHour) {
        return ("Hi");
    }

    //creating calendar block

    function createCalendar() {
        
        for(let i = 0; i < $(".time-block").length; i++) //loop through each time element
        {
            let thisHour = parseInt($(".time-block")[i].getAttribute("id").split("-")[1]);
            //logic to determine if this block is in the past, present or future
            if(thisHour < currentHour)
            {
                $(".time-block")[i].classList.add("past");
                $(".time-block")[i].classList.remove("present");
                $(".time-block")[i].classList.remove("future");
            }
            else if(thisHour === currentHour)
            {
                $(".time-block")[i].classList.remove("past");
                $(".time-block")[i].classList.add("present");
                $(".time-block")[i].classList.remove("future");
            }
            else if (thisHour > currentHour)
            {
                $(".time-block")[i].classList.remove("past");
                $(".time-block")[i].classList.remove("present");
                $(".time-block")[i].classList.add("future");
            }
        }
    }

    //listen for click on each save button
    $(".saveBtn").on("click", function(){
        
        let timeId = $(this).parent().attr("id"); //getting the id value from the parent object
        let value = $(this).siblings(".description").val();

        localStorage.setItem(timeId, value); //saving the values gathered above

        //reveals the notification
        $(".notification").removeClass("hide"); 
        $(".notification").addClass("show"); 

        //hides notification after 5 seconds
        setTimeout(function(){
            $(".notification").removeClass("show");
            $(".notification").addClass("hide");
        }, 5000);
        console.log(timeId, value);
    });
    displayToday();
    createCalendar();
});
