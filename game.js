var line
var column
var turn
var turnTot=1
var n
var win=0

   var i
   var grid=[3]
   for(i=0;i<3;i++)  
   grid[i]=[3]

  function play()
  {  
for(i=0; i<9; i++)
{

grid[i]=-1
turn==true
}
  }


function clicked(n)
  {  
line=Math.floor((n)/3)
column=n%3
if(turn==true)
{
grid[line][column]=0
grid[n]=0
document.images[n].src="o.png"

//grid[line][column].isclicked=false
//document.onclick=false
document.getElementsByClassName("Myimg").disabled=true


control(0)
}

else
{
grid[line][column]=1
grid[n]=1
document.images[n].src="x.png"

document.getElementsByClassName("Myimg").disabled=true
//grid[line][column].isclicked=false
//document.onclick=false
//document.getElementById("name").disabled=true
control(1)
}

turn=!turn 
turnTot++   
}



  function control(x)
{
    if ((grid[0]==0)&&(grid[1]==0)&&(grid[2]==0))
{
   win=1
    alert("ha vinto il cerchio")
    
}

if ((grid[3]==0)&&(grid[4]==0)&&(grid[5]==0))
{
   win=1
    alert ("ha vinto il cerchio")
}

if ((grid[6]==0)&&(grid[7]==0)&&(grid[8]==0))
{
   win=1
    alert ("ha vinto il cerchio")
}

if ((grid[0]==0)&&(grid[3]==0)&&(grid[6]==0))
{
   win=1
    alert ("ha vinto il cerchio")
}

if ((grid[1]==0)&&(grid[4]==0)&&(grid[7]==0))
{
   win=1
    alert ("ha vinto il cerchio")
}

if ((grid[2]==0)&&(grid[5]==0)&&(grid[8]==0))
{
   win=1
    alert ("ha vinto il cerchio")
}

if ((grid[0]==0)&&(grid[4]==0)&&(grid[8]==0))
{
   win=1
    alert ("ha vinto il cerchio")
}

if ((grid[2]==0)&&(grid[4]==0)&&(grid[6]==0))
{
   win=1
    alert ("ha vinto il cerchio")
}




if ((grid[0]==1)&&(grid[1]==1)&&(grid[2]==1))
{
   win=1
    alert ("ha vinto la croce")
}


if ((grid[3]==1)&&(grid[4]==1)&&(grid[4]==1))
{
   win=1
    alert ("ha vinto la croce")
}


if ((grid[6]==1)&&(grid[7]==1)&&(grid[8]==1))
{
   win=1
    alert ("ha vinto la croce")
}


if ((grid[0]==1)&&(grid[3]==1)&&(grid[6]==1))
{
   win=1
   alert ("ha vinto la croce")
}

if ((grid[1]==1)&&(grid[4]==1)&&(grid[7]==1))
{
   win=1
    alert ("ha vinto la croce")
}


if ((grid[2]==1)&&(grid[5]==1)&&(grid[8]==1))
{
   win=1
    alert ("ha vinto la croce")
}


if ((grid[2]==1)&&(grid[4]==1)&&(grid[8]==1))
{
   win=1
    alert ("ha vinto la croce")
}

if ((grid[2]==1)&&(grid[4]==1)&&(grid[6]==1))
{
   win=1
    alert ("ha vinto la croce")
}
if(turnTot==9 && win==0){
   alert ("la partita si è conclusa in pareggio")
}
}  


function NewGame(){
   for(let j=0; j<9;j++){
      document.images[j].src="nothing.png"
      grid[j]=-1
   }
  
   turn==!turn
   turnTot=1
}

function disable(n){
   var temp=document.getElementsByName(toString(n))
   temp.disable=true
}