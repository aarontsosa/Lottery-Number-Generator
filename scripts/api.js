var URL = "https://data.ny.gov/resource/8vkr-v8vh.json?"
var data = {
    "$limit" : 5000,
    "$$app_token" : "ui335F4j6qfB1WGYIxg7roW80"
}
$.get(URL, data, function(resp){
    len = resp.length - 1
    var win = resp[len]
    localStorage.setItem('winning_power', win["winning_numbers"])
    date = win["draw_date"].split("")
    formdate = date[5] + date[6] + "/" + date[8] + date[9] + "/" +  date[0] + date[1] + date[2] + date[3]
    localStorage.setItem('draw-date-power', formdate)
})

var URL2 = "https://data.ny.gov/resource/h6w8-42p9.json"
$.get(URL2, data, function(call){
    len = call.length - 1
    var win = call[len]
    localStorage.setItem('winning_mega', win["winning_numbers"])
    localStorage.setItem('winning_ball', win["mega_ball"])
    date = win["draw_date"].split("")
    formdate = date[5] + date[6] + "/" + date[8] + date[9] + "/" +  date[0] + date[1] + date[2] + date[3]
    localStorage.setItem('draw-date-mega', formdate)
})