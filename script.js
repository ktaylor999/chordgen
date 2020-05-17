var firstchord = 0;
var secondchord = 0;
var thirdchord = 0;
var fourthchord = 0;

let cChords = ["Cmaj", "dmin", "emin", "Fmaj", "Gmaj","amin","Bbmaj"]
let gChords = ["Gmaj", "amin", "bmin", "CMaj","Dmaj","emin","Fmaj"]
let dChords = ["Dmaj", "emin", "f#min", "Gmaj", "Amaj", "bmin", "Cmaj"]

function buttonClick() {

if(document.getElementById("keyofC").checked){
	firstchord = cChords[Math.floor(Math.random() * 7)];
	secondchord = cChords[Math.floor(Math.random() * 7)];
	thirdchord = cChords[Math.floor(Math.random() * 7)]
	fourthchord = cChords[Math.floor(Math.random() * 7)];	
}else if(document.getElementById("keyofG").checked){
	firstchord = gChords[Math.floor(Math.random() * 7)];
	secondchord = gChords[Math.floor(Math.random() * 7)];
	thirdchord = gChords[Math.floor(Math.random() * 7)]
	fourthchord = gChords[Math.floor(Math.random() * 7)];	
}else if(document.getElementById("keyofD").checked){
	firstchord = dChords[Math.floor(Math.random() * 7)];
	secondchord = dChords[Math.floor(Math.random() * 7)];
	thirdchord = dChords[Math.floor(Math.random() * 7)]
	fourthchord = dChords[Math.floor(Math.random() * 7)];	
}		

	document.getElementById('firstchord').innerHTML = firstchord;
	document.getElementById('secondchord').innerHTML = secondchord;
	document.getElementById('thirdchord').innerHTML = thirdchord;
	document.getElementById('fourthchord').innerHTML = fourthchord;			
}