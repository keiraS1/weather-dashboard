//do time of day greeting for opening tab
var currentDate = dayjs();
// var weatherApi = 'https://api.openweathermap.org/data/2.5/forecast?lat=57&lon=-2.15&appid=921a862f723cf49aeebe2288e23795ee';// might delete
var searchBox =  $('#search-box');
var cityName =  $('.inputcity'); //change to receive value of input
var weatherApi ='https://api.openweathermap.org/data/2.5/weather?q=';


//https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=921a862f723cf49aeebe2288e23795ee
// console.log(weatherApi);
// must get hour as well so greetings are different throughout the day

var time = currentDate.hour();

if (time < 12) {
    console.log("Good morning");
    $('#timeofdaygreeting').text(currentDate.format('[Good morning! Today is ] dddd MMM D, YYYY '));
console.log(currentDate);
} else if (time === 12){
    console.log("Hello");
    $('#timeofdaygreeting').text(currentDate.format('[Hello! Today is ] dddd MMM D, YYYY'));
}else if (time > 12 && time < 17){
    console.log("Good evening");
    $('#timeofdaygreeting').text(currentDate.format('[Good afternoon! Today is ] dddd MMM D, YYYY'));
} else{
    console.log("have a good night")
    $('#timeofdaygreeting').text(currentDate.format('[Have a good night! Today is ] dddd MMM D, YYYY'));
} 



//in link must +cityenteredinsearch
// searchBox.add look at 06 - 23 for an example to follow and 13 for fetch example
function cityWeatherSearch(){
   //cityName
   console.log(cityName.val());
   //clear the input box
   //maksure to do the input of city search .value so the api works!!!!

    getApi(weatherApi);

//get the value of the input/city name and then get the data
}

function getApi(weatherApi) {
    fetch(weatherApi+cityName.val()+('&appid=921a862f723cf49aeebe2288e23795ee')) //fix so link works
    .then(function (response) {
      console.log(response);
      if (response.ok) {
        response.json().then(function(data){
             //clear the input field
          console.log(weatherApi+cityName.val()+'&appid=921a862f723cf49aeebe2288e23795ee')
          console.log('https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=921a862f723cf49aeebe2288e23795ee')// this link works
          cityName.val(" ");
        })
        console.log(response.status)
    }
    });
  }



//   function convertion(val)
//   {
//       return (val - 273).toFixed(2) Converting to celsius
//   }



//need function for input city name and submit addeventlistener

$('#searchbtn').on("click", cityWeatherSearch)