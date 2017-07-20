var winners = {}

function randomNum(stop){
    num = Math.floor((Math.random() * stop) + 1)
    return num
}

function checkNum(stop){
    num = randomNum(stop)
    if (num in winners){
        while(num in winners){
            num = randomNum(stop)
        }
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

function toArray(nodeList){
    var arr = nodeList;
    nodeList.forEach((x) => {
        arr = [ ].slice.call(nodeList)
    })
    return arr
}
function printNum(){
    var total = Number(document.getElementsByTagName('select')["number"]['value'])
    var top5 = document.querySelectorAll('[data-winner="target"]')
    var bonus = document.querySelectorAll('[data-bonus="target"]')
    top5 = toArray(top5)
    bonus = toArray(bonus)
    for (a=0; a < total; a++) {
        top5[a].textContent = "number:" + lotto(69,5)
        bonus[a].textContent = "bonus:" + lotto(26,1)
    }
    for (b=total; b < 10; b++){
        top5[b].textContent = ""
        bonus[b].textContent = ""
    }
}