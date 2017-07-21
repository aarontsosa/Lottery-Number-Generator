var URL = "https://data.ny.gov/resource/8vkr-v8vh.json?"
var data = {
    "$limit" : 5000,
    "$$app_token" : "ui335F4j6qfB1WGYIxg7roW80"
}
$.get(URL, data, function(resp){
    len = resp.length - 1
    var win = resp[len]
    localStorage.setItem('winning_power', win["winning_numbers"])
})

var URL2 = "https://data.ny.gov/resource/h6w8-42p9.json"
$.get(URL2, data, function(call){
    len = call.length - 1
    var win = call[len]
    localStorage.setItem('winning_mega', win["winning_numbers"])
    localStorage.setItem('winning_ball', win["mega_ball"])
})