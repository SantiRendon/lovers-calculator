// Objeto con elementos HTML
const htmlElements = {
	meter: document.getElementById('meter'),
	message: document.getElementById('msg'),
	inputFn: document.getElementById('fn'),
	inputSn: document.getElementById('sn'),
	userFn: document.getElementById('user1'),
	userSn: document.getElementById('user2')
}

// Funciones 
export function showResults() {
	if (htmlElements.inputFn.value === '' || htmlElements.inputSn.value === '') {
		window.alert('fill in the null fields')
		return false
	} else {
		// Elementos HTML
		let message = htmlElements.message
		let meter = htmlElements.meter

		// variables de configuracion
		let url = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${htmlElements.inputSn.value}&fname=${htmlElements.inputFn.value}`
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '1039b05c7cmsh2b70a5c173a1baap1e1566jsn69c10d5bc62b',
				'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
			}
		};

		fetch(url, options)
			.then(res => res.json())
			.then(data => {

				message.innerHTML = `${data.result}`;
				meter.value = data.percentage

			})
			.catch(err => console.error(err));
		return true
	}
}

export function showImg() {
	userFn.innerHTML = `<p class="name1">${inputFn.value} &heartsuit;</p>`
	userSn.innerHTML = `<p class="name2"> ${inputSn.value} &#9825;</p>`
}

export function showNames(validateInput) {

	if (validateInput != true) {
		let userFn = htmlElements.userFn
		let inputFn = htmlElements.inputFn
		let userSn = htmlElements.userSn
		let inputSn = htmlElements.inputSn
	
		userFn.innerHTML = `<p class="name1">${inputFn.value}&heartsuit;</p>`
		userSn.innerHTML = `<p class="name2">${inputSn.value}&#9825</p>`
	}
}