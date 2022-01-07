
// Variables
let scoreS=document.querySelector('.scores')

let tiles=document.querySelectorAll('.tile')
let gameStatus=document.querySelector('.status')

let startLetter='X'


//  Do Local Storage to store score ...
// localStorage.setItem("x","0")
// let xScore=localStorage.getItem("x")

console.log(localStorage.getItem("one"))



tiles.forEach(play)

// Functions
function play(item,index){
	item.addEventListener('click', function() {makeIt(item);})
}

function makeIt(item){
	// console.log(item.innerText)
	if(startLetter=='X'){
		item.innerHTML=startLetter
		startLetter='O'
		checkWin()
	}
	else{
		item.innerHTML=startLetter
		startLetter='X'
		checkWin()
	}
}

// o12 
// 345
// 678

function checkWin(){
	if (xWin()==true){
		gameStatus.innerHTML="X Wins"
		gameStatus.style.color='red';
		scoreS.innerHTML="X : 1    &&   O : 0 "
		doTimeout()
	}

	else if(oWin()==true){
		gameStatus.innerHTML="O Wins"
		gameStatus.style.color='lightblue';	
		scoreS.innerHTML="X : 0    &&   O : 1 "
		doTimeout()	
	}

	else if (checkGameOver()==true){
		gameStatus.innerHTML=" DRAW "
		gameStatus.style.color='lightgreen';
		doTimeout()		
	}

}



function doTimeout(){
	setTimeout(function(){window.location.reload()},4000)
}



function xWin(){

	// X check

	if (tiles[0].innerText=="X" &tiles[1].innerText=="X"&tiles[2].innerText=="X"){
		return true;
	}

	else if (tiles[3].innerText=="X" &tiles[4].innerText=="X"&tiles[5].innerText=="X"){
		return true;
	}
	else if (tiles[6].innerText=="X" &tiles[7].innerText=="X"&tiles[8].innerText=="X"){
		return true;
	}

	else if (tiles[0].innerText=="X" &tiles[3].innerText=="X"&tiles[6].innerText=="X"){
		return true;
	}

	else if (tiles[1].innerText=="X" &tiles[4].innerText=="X"&tiles[7].innerText=="X"){
		return true;
	}

	else if (tiles[2].innerText=="X" &tiles[5].innerText=="X"&tiles[8].innerText=="X"){
		return true;
	}

	else if (tiles[0].innerText=="X" &tiles[4].innerText=="X"&tiles[8].innerText=="X"){
		return true;
	}

	else if (tiles[2].innerText=="X" &tiles[4].innerText=="X"&tiles[6].innerText=="X"){
		return true;
	}

}

function oWin(){
	// O check 
	if (tiles[0].innerText=="O" &tiles[1].innerText=="O"&tiles[2].innerText=="O"){
		return true;
	}

	else if (tiles[3].innerText=="O" &tiles[4].innerText=="O"&tiles[5].innerText=="O"){
		return true;
	}
	else if (tiles[6].innerText=="O" &tiles[7].innerText=="O"&tiles[8].innerText=="O"){
		return true;
	}

	else if (tiles[0].innerText=="O" &tiles[3].innerText=="O"&tiles[6].innerText=="O"){
		return true;
	}

	else if (tiles[1].innerText=="O" &tiles[4].innerText=="O"&tiles[7].innerText=="O"){
		return true;
	}

	if (tiles[2].innerText=="O" & tiles[5].innerText=="O"&tiles[8].innerText=="O"){
		return true;
	}

	if (tiles[0].innerText=="O" &tiles[4].innerText=="O"&tiles[8].innerText=="O"){
		return true;
	}

	if (tiles[2].innerText=="O" &tiles[4].innerText=="O"&tiles[6].innerText=="0"){
		return true;
	}
}


function checkGameOver(){
	if (!tiles[0].innerHTML && !tiles[1].innerHTML && !tiles[2].innerHTML && !tiles[3].innerHTML && !tiles[4].innerHTML && !tiles[5].innerHTML && !tiles[6].innerHTML && !tiles[7].innerHTML && !tiles[8].innerHTML){
		return true;
}

}

// function clickTile(item,index) {
// 	console.log("Hello world")
// 	// item.addEventListener("click",console.log(item.innerText))

// }








