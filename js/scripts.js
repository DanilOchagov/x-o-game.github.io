// создание клеток
for(var i = 0; i < 9; i++){
    document.getElementById("game").innerHTML+="<div class='block'></div>";
}

// ввод Х и О
var hod = 0;

document.getElementById("game").onclick = function click_block(event){
    if(event.target.className == "block"){
        if(hod % 2 == 0){
            event.target.innerHTML = "o";
        }else{
            event.target.innerHTML = "x";
        }
        hod++;

        checkWinner();
    }
}

// определение победителя
function checkWinner(){
    var allblock = document.getElementsByClassName("block");
    
    // x
    if(allblock[0].innerHTML == "x" && allblock[1].innerHTML == "x" && allblock[2].innerHTML == "x"){
        alert("Победили крестики!");
    }
    if(allblock[3].innerHTML == "x" && allblock[4].innerHTML == "x" && allblock[5].innerHTML == "x"){
        alert("Победили крестики!");
    }
    if(allblock[6].innerHTML == "x" && allblock[7].innerHTML == "x" && allblock[8].innerHTML == "x"){
        alert("Победили крестики!");
    }
    if(allblock[0].innerHTML == "x" && allblock[3].innerHTML == "x" && allblock[6].innerHTML == "x"){
        alert("Победили крестики!");
    }
    if(allblock[1].innerHTML == "x" && allblock[4].innerHTML == "x" && allblock[7].innerHTML == "x"){
        alert("Победили крестики!");
    }
    if(allblock[2].innerHTML == "x" && allblock[5].innerHTML == "x" && allblock[8].innerHTML == "x"){
        alert("Победили крестики!");
    }
    if(allblock[0].innerHTML == "x" && allblock[4].innerHTML == "x" && allblock[8].innerHTML == "x"){
        alert("Победили крестики!");
    }
    if(allblock[2].innerHTML == "x" && allblock[4].innerHTML == "x" && allblock[6].innerHTML == "x"){
        alert("Победили крестики!");
    }

    // o
    if(allblock[0].innerHTML == "o" && allblock[1].innerHTML == "o" && allblock[2].innerHTML == "o"){
        alert("Победили нолики!");
    }
    if(allblock[3].innerHTML == "o" && allblock[4].innerHTML == "o" && allblock[5].innerHTML == "o"){
        alert("Победили нолики!");
    }
    if(allblock[6].innerHTML == "o" && allblock[7].innerHTML == "o" && allblock[8].innerHTML == "o"){
        alert("Победили нолики!");
    }
    if(allblock[0].innerHTML == "o" && allblock[3].innerHTML == "o" && allblock[6].innerHTML == "o"){
        alert("Победили нолики!");
    }
    if(allblock[1].innerHTML == "o" && allblock[4].innerHTML == "o" && allblock[7].innerHTML == "o"){
        alert("Победили нолики!");
    }
    if(allblock[2].innerHTML == "o" && allblock[5].innerHTML == "o" && allblock[8].innerHTML == "o"){
        alert("Победили нолики!");
    }
    if(allblock[0].innerHTML == "o" && allblock[4].innerHTML == "o" && allblock[8].innerHTML == "o"){
        alert("Победили нолики!");
    }
    if(allblock[2].innerHTML == "o" && allblock[4].innerHTML == "o" && allblock[6].innerHTML == "o"){
        alert("Победили нолики!");
    }
}

// рестарт игры
function restart_game_button(){
    var restart_block = document.getElementsByClassName("block");

    restart_block[0].innerHTML = "";
    restart_block[1].innerHTML = "";
    restart_block[2].innerHTML = "";
    restart_block[3].innerHTML = "";
    restart_block[4].innerHTML = "";
    restart_block[5].innerHTML = "";
    restart_block[6].innerHTML = "";
    restart_block[7].innerHTML = "";
    restart_block[8].innerHTML = "";
}