let screen = document.getElementById("screen");
buttons = document.querySelectorAll('button');
let screenValue =" ";
for (item of buttons){
	item.addEventListener('click',(e)=>{
		 var buttonText = e.target.innerText;
		if(buttonText=='C'){
			screenValue = " ";
			screen.value = screenValue;
		}
		else if(buttonText=='='){
			screenValue= eval(screenValue);
			screen.value = screenValue;
			screenValue = screenValue.toString();

		}
		else if(buttonText=='X'){
			screenValue = screenValue.slice(0,-1);
			screen.value = screenValue;
		}
		else{
			screenValue += buttonText;
			screen.value = screenValue;
		}



	})
}