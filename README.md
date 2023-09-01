# Assigment   https://tejaskarde21.github.io/Assigment/


Defining Arrays for Months and Days:
*Two arrays, months and days, are defined to store the names of months and days of the week.
Creating a Date Object:
*const date = new Date(); creates a new JavaScript Date object representing the current date and time.
Extracting Date Components:

*The code extracts various components from the date object:
 const month = months[date.getMonth()]; extracts the current month (0-based) and retrieves the corresponding month name from the months array.
 const day = days[date.getDay()]; extracts the current day of the week (0-based) and retrieves the corresponding day name from the days array.
 const dayNum = date.getDate(); extracts the day of the month (1-31).
 const year = date.getFullYear(); extracts the current year.

Updating HTML Content:

  *The code selects an HTML element with the ID "inner" using document.getElementById("inner").
  *It then uses the innerHTML property to update the content of the selected element with the extracted date information.
  *The information is inserted into an HTML structure, creating a <div> with class "sec" containing four <h1> elements with
  IDs "month," "day," "dayNum," and "year." The extracted date components are displayed within these elements.
