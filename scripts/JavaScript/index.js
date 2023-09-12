//----Variable declaration----//

let currentHour = dayjs().hour(); //current time used to indicate the correct tile to colour differently.
let currentDay = dayjs().day(); //used to dssplay current day at the top of the page
let currentDate = dayjs().date(); //used to display the current date in a number between 1-31
let currentMonth = dayjs().month(); //used to display current month at the top of the page

//----Object references----//

let calendarList = $("#calendarList"); //storing each block of the calendar in an array as a separate block element with consistent styling.
let eventInputEl = $("#eventInput"); //getting each event input and storing the strings inputted

createCalendar();
//will get data from local storage. If none is found, return empty, else return with saved events. Repeated each hour
function getData(findHour)
{
    return("");
}

//creating calendar block

function createCalendar()
{
    for(let i = 0; i < 23; i++) //up to 23 as dayjs stores hours from 0-23
    {
        //---- Creating items in the HTML file ----
        let listEl = $("<li>");
        let hourEl = $("<p>");
        let eventEl = $("<p>");

        if(i < currentHour) //filter past events
        {
            eventEl.addClass(".past");
        }
        else if( i == currentHour) //filter current events
        {
            eventEl.addClass(".present");
        }
        else //filter future events
        {
            eventEl.addClass(".future");
        }
        //---- Class formatting ----
        eventEl.addClass(".time-block");
        hourEl.addClass(".hour");
        listEl.addClass(".row").text(getData*(i)); //will get the data stored in the browser, if nothing display nothing, else display relevant data

        calendarList.append(); //append with the data generated in this function
    }
}

