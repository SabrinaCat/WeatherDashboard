var myKey ="c1786506c24426ae384c4cedbae014b0";
var city =$("#cityInput");

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?q=austin&appid=c1786506c24426ae384c4cedbae014b0",
    method: 'GET',
    
    }
).then(function(data){

console.log(data);
});






        