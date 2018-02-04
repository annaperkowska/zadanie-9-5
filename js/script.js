var withButtonClass = document.getElementsByClassName("button");

console.log(withButtonClass);

for (var m = 0 ; m < withButtonClass.length ; m++) {
	var ButtonText = withButtonClass[m].innerText;
	alert(ButtonText);
};