
var timer = setInterval(removeElement, 100);
var maxIncrements = 10;
var currentIncrement = 0;

function removeElement()
{
	var html = document.getElementsByTagName("html")[0];
	var body = document.getElementsByTagName("body")[0];
	var modal = document.getElementsByClassName("fEy1Z2XT ")[0];

	currentIncrement += 1;
	
	if(modal != null)
	{	
		html.style='';
		body.style='';
		modal.remove();
	} else if (currentIncrement >= maxIncrements){
		stop();
	}
}

function stop() {
  clearInterval(timer);
} 
