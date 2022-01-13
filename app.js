//get Html elments
const dayEl = document.getElementById("day")
const hourEl = document.getElementById("hours")
const minutesEl = document.getElementById("minute")
const secondEl = document.getElementById("second")

//change 1-24 to 1-12
const hours = [1,2,3,4,5,6,7,8,9,10,12,1,2,3,4,5,6,7,8,9,10,11,12]
const hour = new Date().getHours()-2

//time method
const date = new Date().getDate()
const minute = new Date().getMinutes()
const second = new Date().getSeconds()

//show time
dayEl.innerHTML = date
hourEl.innerHTML = hours[hour]
minutesEl.innerHTML = minute
secondEl.innerHTML = second
