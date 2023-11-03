var roll = document.getElementById("roll");
var roll_imgbox = document.getElementById("roll-imgbox");//以图片和吃豆人为标志
var roll_pacman = document.getElementById("roll-pacman");
var roll_index = 0;
var time = 3600;//计时器
//实现人为切换
for(i=0;i<5;i++){
    var dot = roll_pacman.children[i];
    dot.index = i;
    dot.onclick=function () {
        for (var j=0;j<5;j++){
            roll_pacman.children[j].className="off";
        }
        this.className="on";
        roll_index = this.index;
        roll_imgbox.style.marginLeft = -100*roll_index+"%";
    }
}
//实现自动切换
roll_index = 0;
function roll_lunbo(){
    roll_index++;
    if(roll_index==5){
        roll_index=0;
    }
    roll_imgbox.style.marginLeft = -100*roll_index+"%";
    for (var j=0;j<5;j++){
        roll_pacman.children[j].className="off";
    }
    roll_pacman.children[roll_index].className="on";
}
roll_interval = setInterval(() => {
    roll_lunbo()
}, time);
roll.onmouseover = function(){
    clearInterval(roll_interval);
}
roll.onmouseout = function(){
    roll_interval = setInterval(() => {
        roll_lunbo()
    }, time);
}