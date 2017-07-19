var winners = {}

function randomNum(stop){
    num = Math.floor((Math.random() * stop) + 1)
    return num
}

function checkNum(stop){
    num = randomNum(stop)
    if (num in winners){
        num = randomNum(stop)
        return num
    } else {
        return num
    }
}

function pickNum(stop,len){
    for(i=0;i<len;i++){
        num = checkNum(stop);
        winners[i] = num
    }
    return winners
}

function lotto(stop, len){
    var lottoNum = " "
    pickNum(stop,len)
    for(i=0;i<len;i++){
        lottoNum += winners[i] + " "
    }
    return lottoNum
}

// function amount(element){
//     var total = element.option[element.selectedIndex]
//     return total
// }

function printNum(){
    var top5 = document.querySelector('[data-winner="target"]')
    var bonus = document.querySelector('[data-bonus="target"]')
    top5.textContent = "number:" + lotto(69,5)
    bonus.textContent = "bonus:" + lotto(26,1)
}