var cChords = ["Cmaj", "dmin", "emin", "Fmaj", "Gmaj","amin","Bbmaj"]
var gChords = ["Gmaj", "amin", "bmin", "CMaj","Dmaj","emin","Fmaj"]
var dChords = ["Dmaj", "emin", "f#min", "Gmaj", "Amaj", "bmin", "Cmaj"]

function buttonClick() {

var firstChord = Math.floor(Math.random() * 7);
var secondChord = Math.floor(Math.random() * 7);
var thirdChord = Math.floor(Math.random() * 7);
var fourthChord = Math.floor(Math.random() * 7);

if(document.getElementById("keyofC").checked){
	document.getElementById('firstchord').innerHTML = cChords[firstChord];
	document.getElementById('secondchord').innerHTML = cChords[secondChord];
	document.getElementById('thirdchord').innerHTML = cChords[thirdChord];
	document.getElementById('fourthchord').innerHTML = cChords[fourthChord];
}else if(document.getElementById("keyofG").checked){
	document.getElementById('firstchord').innerHTML = gChords[firstChord];
	document.getElementById('secondchord').innerHTML = gChords[secondChord];
	document.getElementById('thirdchord').innerHTML = gChords[thirdChord];
	document.getElementById('fourthchord').innerHTML = gChords[fourthChord];
}else if(document.getElementById("keyofD").checked){
	document.getElementById('firstchord').innerHTML = dChords[firstChord];
	document.getElementById('secondchord').innerHTML = dChords[secondChord];
	document.getElementById('thirdchord').innerHTML = dChords[thirdChord];
	document.getElementById('fourthchord').innerHTML = dChords[fourthChord];
}


}
