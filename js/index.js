// varaibles de formulario
let inputFn = document.getElementById('fn');
let inputSn = document.getElementById('sn');

export function getNames(params) {
	
}

export function renderResults() {
	// variables de configuracion
	let url = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${inputSn.value}&fname=${inputFn.value}`
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '1039b05c7cmsh2b70a5c173a1baap1e1566jsn69c10d5bc62b',
			'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
		}
	};

	// Variables de elementos HTML
	let message = document.getElementById('msg')
	let meter = document.getElementById('meter')

	fetch(url, options)
		.then(res => res.json())
		.then(data => {

			message.innerHTML = `${data.result}`;
			meter.value = data.percentage

		})
		.catch(err => console.error(err));
}