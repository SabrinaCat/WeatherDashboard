var myKey ="c1786506c24426ae384c4cedbae014b0";
var city =$("#cityInput");


$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?q=austin&units=imperial&APPID=" + myKey,
    method: 'GET',      
    }
).then(function(data){
    console.log(data);
    var iconID= data.list[0].weather[0].icon;
    var iconURL= "https://api.openweathermap.org/img/w/" + iconID + ".png"
    
    attachIcon ();
    getWeatherData ();
    appendWeather ();
    function attachIcon (){ 
    $("#icon").attr('src', iconURL);
};
 function getWeatherData (){
     var cityName = data.city.name;
     var date =data.list[0].dt_txt;
     //Math.Floor this
     var temp = Math.floor(data.list[0].main.temp);
     var humidity =data.list[0].main.humidity;
     var windSpeed =data.list[0].wind.speed;
     
     $("#currentCity").prepend(cityName);
     $("#date").append(date);
     $("#temp").append(temp + "*F");
     $("#humidity").append(humidity + "%");
     $("#windSpeed").append(windSpeed + "mph");

    
        
}});







    