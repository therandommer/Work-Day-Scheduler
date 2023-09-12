//----Variable declaration----//

let currentHour = dayjs().hour(); //current time used to indicate the correct tile to colour differently.
let currentDay = dayjs().day(); //used to dssplay current day at the top of the page
let currentDate = dayjs().date(); //used to display the current date in a number between 1-31
let currentMonth = dayjs().month(); //used to display current month at the top of the page

//----Object references----//

let calendarList = $("#calendarList"); //storing each block of the calendar in an array as a separate block element with consistent styling.
let eventInputEl = $("#eventInput"); //getting each event input and storing the strings inputted
let todayEl = $("#currentDay"); //will display the current day as the website was loaded.

//----Functions and logic----//

//filter through current day, date and month to display the relevant string at the top of the page
function displayToday()
{
    let dayText = "Default Day";
    switch(currentDay) //translate each day from a number to readable string
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
    switch(currentMonth) //translate each month from a number to readable string
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
    if(currentDate === 1 || currentDate === 21 || currentDate === 31) //appending "st" to the 1st/21st/31st of a month
    {
        todayEl.text(`Today is: ${dayText}, ${currentDate}st of ${monthText}.`);
    }
    else if(currentDate === 2 || currentDate === 22) //appending "nd" to the 2nd/22nd of a month
    {
        todayEl.text(`Today is: ${dayText}, ${currentDate}nd of ${monthText}.`);
    }
    else //appending "th" to every other day
    {
        todayEl.text(`Today is: ${dayText}, ${currentDate}th of ${monthText}.`);
    }
}
//will get data from local storage. If none is found, return empty, else return with saved events. Repeated each hour
function getData(findHour)
{
    return("Hi");
}

//creating calendar block

function createCalendar()
{
    for(let i = 0; i <= 23; i++) //up to 23 as dayjs stores hours from 0-23
    {
        //---- Creating items in the HTML file ----
        let listEl = $("<li>");
        let hourEl = $("<p>");
        let eventEl = $("<p>");

        if(i < currentHour) //filter past events
        {
            eventEl.addClass(".past");
            console.log(`Adding past tag to hour: ${i}`);
        }
        else if( i == currentHour) //filter current events
        {
            eventEl.addClass(".present");
            console.log(`Adding present tag to hour: ${i}`);
        }
        else //filter future events
        {
            eventEl.addClass(".future");
            console.log(`Adding future tag to hour: ${i}`);
        }

        //formatting hour data

        if(i === 0) //midnight parsing
        {
            hourEl.text("12 AM");
        }
        else if(i > 0 && i < 12) //morning(AM)
        {
            hourEl.text(`${i} AM`);
        }
        else //afternoon/evening(PM)
        {
            hourEl.text(`${i} PM`);
        }
        //---- Class formatting ----
        eventEl.addClass(".time-block");
        hourEl.addClass(".hour");
        listEl.addClass(".row").text(getData(i)); //will get the data stored in the browser, if nothing display nothing, else display relevant data

        //---Generating the content
        listEl.append(hourEl, eventEl);
        calendarList.append(listEl); //append with the data generated in this function
    }
}

displayToday();
createCalendar();