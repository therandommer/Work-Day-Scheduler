//----Variable declaration----//

let currentTime = dayjs(); //current time used to indicate the correct tile to colour differently.
let currentDay = dayjs().day(); //used to dssplay current day at the top of the page
let currentDate = dayjs().date(); //used to display the current date in a number between 1-31
let currentMonth = dayjs().month(); //used to display current month at the top of the page

//----Object references----//

let calendarList = $("#calendarList"); //storing each block of the calendar as a separate block element with consistent styling.

