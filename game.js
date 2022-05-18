
var imgO = "o.png"
var imgX = "x.png" 
///////////////////////
var simbol = "X"
var turn=1
var cell=document.getElementsByClassName("Mycell")
var endGame = false;

  // var i
  // var grid=[-1,-1,-1, -1,-1,-1,-1,-1,-1]
  

function clicked(position) {
   if (endGame==false) {
     cell[position - 1].innerHTML = simbol
     cell[position - 1].disabled = true
     WinGame("X")
     WinGame("O")
     turn++
     if (turn % 2) {
        simbol = "X"
        console.log(simbol)
        }
     else {
        simbol = "O"
        console.log(simbol)
     }
     
   }
   else alert("press RESET button")}

   function WinGame(simbol) {
      if (
        cell[0].innerHTML == simbol &&
        cell[1].innerHTML == simbol &&
        cell[2].innerHTML == simbol
      ) {
        alert("Vittoria Giocatore " + simbol)
        
        endGame = true
      } else if (
        cell[3].innerHTML == simbol &&
        cell[4].innerHTML == simbol &&
        cell[5].innerHTML == simbol
      ) {
        alert("Vittoria Giocatore " + simbol)
        
        endGame = true
      } else if (
        cell[6].innerHTML == simbol &&
        cell[7].innerHTML == simbol &&
        cell[8].innerHTML == simbol
      ) {
        alert("Vittoria Giocatore " + simbol)
       
        endGame = true
      } else if (
        cell[1].innerHTML == simbol &&
        cell[4].innerHTML == simbol &&
        cell[7].innerHTML == simbol
      ) {
        alert("Vittoria Giocatore " + simbol)
       
        endGame = true
      } else if (
        cell[2].innerHTML == simbol &&
        cell[5].innerHTML == simbol &&
        cell[8].innerHTML == simbol
      ) {
        alert("Vittoria Giocatore " + simbol)
        
        endGame = true
      } else if (
        cell[0].innerHTML == simbol &&
        cell[4].innerHTML == simbol &&
        cell[8].innerHTML == simbol
      ) {
        alert("Vittoria Giocatore " + simbol)
        
        endGame = true
      } else if (
        cell[0].innerHTML == simbol &&
        cell[3].innerHTML == simbol &&
        cell[6].innerHTML == simbol
      ) {
        alert("Vittoria Giocatore " + simbol)
        
        endGame = true
      } else if (
        cell[1].innerHTML == simbol &&
        cell[4].innerHTML == simbol &&
        cell[7].innerHTML == simbol
      ) {
        alert("Vittoria Giocatore " + simbol)
     
        endGame = true
      } else if (
        cell[2].innerHTML == simbol &&
        cell[5].innerHTML == simbol &&
        cell[8].innerHTML == simbol
      ) {
        alert("Vittoria Giocatore " + simbol)
       
        endGame = true
      } else if (
        cell[2].innerHTML == simbol &&
        cell[4].innerHTML == simbol &&
        cell[6].innerHTML == simbol
      ) {
        alert("Vittoria Giocatore " + simbol)
      
        endGame = true;
      } else {
        if (turn == 9 && endGame==false) {
          alert("Pareggio")
         
          endGame = true
          alert("press RESET button")
        }
      }
   }

function NewGame(){
   simbol = "X"
   turn=1
   
   endGame = false
   for(let i=0; i<9; i++){
     cell[i].innerHTML=" "
      cell[i].disabled=false
      console.log(" ")
   }
}

