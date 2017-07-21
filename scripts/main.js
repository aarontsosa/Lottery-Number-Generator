var winners = {}
var winNums = []
var alphabet = 'abcdefghijklmnopqrstuvwxyz'
alphabet = alphabet.split("")
var $ham = $('.hamburger')
var $body = $('.body')
var $nav = $('.nav')
var $title = $('.head')

function randomNum(stop){
    num = Math.floor((Math.random() * stop) + 1)
    return num
}

function shuffler(arrayLength){
    var arr = arrayLength;
    var i = arr.length;
    var j = 0
    var temp;

   while (i--){
        j = Math.floor(Math.random()* (i+1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

   }
    return arr;
}

function pickNum(stop, len){
    var winnerlen = 0
    winners = {}
        while ( winnerlen < len){
            winners[randomNum(stop).toString()] = 'dope'
            winnerlen = Object.keys(winners).length
        }
        winNums = Object.keys(winners)
        winNums = shuffler(winNums)
        return winNums
}

function lotto(stop, len){
    var lottoNum = " "
    pickNum(stop,len)
    for(i=0;i<len;i++){
        lottoNum += winNums[i] + " "
    }
    return lottoNum
}

function toArray(nodeList){
    var arr = nodeList;
    nodeList.each((i, x) => {
        arr = [ ].slice.call(nodeList)
    })
    return arr
}

function power(){
    var $total = Number($('select')[0]['value'])
    var $top5 = $('[data-winner="target"]')
    $top5 = toArray($top5)
    for (a=0; a < $total; a++) {
        $top5[a].textContent = alphabet[a]+ ". " + lotto(69,5) + " - " + lotto(26,1)
    }
    for (b=$total; b < 10; b++){
        $top5[b].textContent = ""
    }
}

function mega(){
    var $total = Number($('select')[0]['value'])
    var $top5 = $('[data-winner="target"]')
    $top5 = toArray($top5)
    for (a=0; a < $total; a++) {
        $top5[a].textContent = alphabet[a]+ ". " + lotto(75,5) + " - " + lotto(15,1)
    }
    for (b=$total; b < 10; b++){
        $top5[b].textContent = ""
    }
}

function hyphenInsert(){
    var power =  localStorage.getItem("winning_power")
    power = power.split(" ")
    power.splice(5, 0, "-")
    power = power.join(" ")
    localStorage.setItem('winning_power_hyp', power)
    return power
}

$ham.on('click', (event) =>{
    $body.toggleClass('menu')
})


window.onload = function load(){
    $('span')[0].textContent = hyphenInsert();
}

function megaPage(){
    $('.generate')[0].attributes[3].value = "mega()";
    $('img')[1].attributes[0].value = "images/megamillion.png"
    $('span')[0].textContent = localStorage.getItem("winning_mega") + " - " + localStorage.getItem("winning_ball");
    $('header').addClass('mega')
    $('header').removeClass('power')
    $('.navbtn').toggleClass('selected')
    $body.toggleClass('menu')
}

function powerPage(){
    $('.generate')[0].attributes[3].value = "power()";
    $('img')[1].attributes[0].value = "images/powerball.png"
    $('span')[0].textContent = localStorage.getItem("winning_power_hyp");
    $('header').addClass('power')
    $('header').removeClass('mega')
    $('.navbtn').toggleClass('selected')
    $body.toggleClass('menu')
}


