// variables
let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen');
let buttons = document.querySelectorAll('button');
let erasebtn = document.querySelector('#erase');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');

// calculator display
let realTimeScreenValue = []

// clear
clearbtn.addEventListener("click", () => {
	realTimeScreenValue = [''];
	answerScreen.innerHTML = 0;
	currentInput.className = 'currentInput'
	answerScreen.className = 'answerScreen';
	answerScreen.style.color = " rgba(150, 150, 150, 0.87)";
})

// display any button clicked on screen
buttons.forEach((btn) => {
	btn.addEventListener("click", () => {
		if (!btn.id.match('erase')) {
			// display value on button press
			realTimeScreenValue.push(btn.value)
			currentInput.innerHTML = realTimeScreenValue.join('');
			// evaluate answer in real time
			if (btn.classList.contains('num_btn')) {
				answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
			}
		}

		// erase button
		if (btn.id.match('erase')) {
			realTimeScreenValue.pop();
			currentInput.innerHTML = realTimeScreenValue.join('');
			answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
		}

		// evaluate button
		if (btn.id.match('evaluate')) {
			currentInput.className = 'answerScreen';
			answerScreen.className = 'currentInput';
			answerScreen.style.color = "white";
		}

		// undefined error
		if (typeof eval(realTimeScreenValue.join('')) == 'undefined') {
			answerScreen.innerHTML = 0
		}
	})
})