subscribe.addEventListener('change', function() {
	console.log(this)
		var x=document.querySelector('#emailDiv');
		if (this.checked){
			console.log('selected');
			x.style.display = "block";
		}
		else {
			console.log("Not Selected");
			x.style.display = "none";
		}
})