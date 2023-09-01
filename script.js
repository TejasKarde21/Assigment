const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const date = new Date();
const month = months[date.getMonth()];
const day = days[date.getDay()];
const dayNum = date.getDate();
const year = date.getFullYear();

console.log(month);
console.log(day);
console.log(dayNum);
console.log(year);

const inner = document.getElementById("inner");
inner.innerHTML = `
  <div class="sec">
    <h1 id="month">${month}</h1>
    <h1 id="day">${day}</h1>
    <h1 id="dayNum">${dayNum}</h1>
    <h1 id="year">${year}</h1>
  </div>
`;