/*

state = 0: RELOJ ANALOGO
state = 1: RELOJ DIGITAL

*/ 

var state = 0; 

var horas = 0;
var minutos = 0;
var segundos = 0;  

var clock = document.getElementById("clock");
var comboBox = document.getElementById("combobox");

setInterval(function(){ passOfTime()}, 1000);


comboBox.addEventListener("change", function() {
	if(state === 0) {
		state = 1;
	} else {
		state = 0;
	}
	console.log(state); 
	clock.innerHTML = render(state); 
});

function passOfTime(){
	if (segundos<59){
		segundos = segundos+1;
	} else {
		segundos = 0; 
		minutos = minutos +1;
	}

	if (minutos === 59){
		minutos = 0;
		horas = horas+1;
	}
	if (horas === 12){
		horas = 0;
	}
	clock.innerHTML = render(state);
	console.log(horas);
	console.log(minutos);
	console.log(segundos);
}

function render(state){
	var html = ""; 

	if (state===0) {

		html += '<div class="analog">';
			
		html +=  '<div class="hours-'+horas+'"" ></div>';

		html += '<div class="minutes-'+minutos+'"></div>';

		html += '<div class="seconds-'+segundos+'"></div>';

		html += '</div>	';
	
		html += '<div class="wrapper-number-1">';

		html += '<div class="number">1</div>';

		html += '</div>';
		
		html += '<div class="wrapper-number-2">';

		html += '<div class="number">2</div>';

		html += '</div>';
		
		html += '<div class="wrapper-number-3">';

		html += '<div class="number">3</div>';

		html += '</div>';
		
		html += '<div class="wrapper-number-4">';

		html += '<div class="number">4</div>';

		html += '</div>';
		
		html += '<div class="wrapper-number-5">';

		html += '<div class="number">5</div>';

		html += '</div>';
		
		html += '<div class="wrapper-number-6">';

		html += '<div class="number">6</div>';

		html += '</div>';
		
		html += '<div class="wrapper-number-7">';

		html += '<div class="number">7</div>';

		html += '</div>';
		
		html += '<div class="wrapper-number-8">';

		html += '<div class="number">8</div>';

		html += '</div>';
		
		html += '<div class="wrapper-number-9">';

		html += '<div class="number">9</div>';

		html += '</div>';
		
		html += '<div class="wrapper-number-10">';

		html += '<div class="number">10</div>';

		html += '</div>';
		
		html += '<div class="wrapper-number-11">';

		html += '<div class="number">11</div>';

		html += '</div>';
		
		html += '<div class="wrapper-number-12">';

		html += '<div class="number">12</div>';

		html += '</div>';

	} else {

		html += '<div class="digital">';
			
		html += '<div class="hours">'+horas+'</div>';
	
		html += '<div class="dots">:</div>';

		html += '<div class="minutes">'+minutos+'</div>';
	
		html += '<div class="dots">:</div>';
		
		html += '<div class="seconds">'+segundos+'</div>';
			
		html += '</div>';
	}
	return html;
}