var myKey ="c1786506c24426ae384c4cedbae014b0";
var city =$("#cityInput");

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?q=austin&appid=c1786506c24426ae384c4cedbae014b0",
    method: 'GET',
    
    }
).then(function(data){

console.log(data);
});
$.ajax({
    url: "https://api.windy.com/api/webcams/v2/[path]?key=eMD8jddw0zG16xeTQeGWTryCpN6pf6R5",
    method: 'GET',
}
).then(function(data){
    console.log(data);
});




/*(
"api.openweathermap.org/data/2.5/forecast?q=austin&appid=9d121c02df77b3ca923b909162b1efe7",
function (data) {
console.log(data);*/
        