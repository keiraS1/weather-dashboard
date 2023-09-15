//do time of day greeting for opening tab

var currentDate = dayjs();
//must get hour as well so greetings are different throughout the day

var time = currentDate.hour();

if (time < 12) {
    console.log("Good morning");
    $('#timeofdaygreeting').text(currentDate.format('[Good morning! Today is ] dddd MMM D, YYYY, '));
console.log(currentDate);
} else if (time === 12){
    console.log("Hello");
    $('#timeofdaygreeting').text(currentDate.format('[Hello! Today is ] dddd MMM D, YYYY'));
}else if (time > 12 && time < 17){
    console.log("Good evening");
    $('#timeofdaygreeting').text(currentDate.format('[Good evening! Today is ] dddd MMM D, YYYY'));
} else{
    console.log("have a good night")
    $('#timeofdaygreeting').text(currentDate.format('[Have a good night! Today is ] dddd MMM D, YYYY'));
} 

//if else statement for time of day greeting
