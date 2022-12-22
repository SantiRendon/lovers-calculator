
// Variables HTML Elements
let container = document.getElementById('')

// variables tabla
let fname = document.getElementById('fname')
let sname = document.getElementById('sname')
let percentage= document.getElementById('%')
let result= document.getElementById('resu')

// varaibles de formulario
let inputFn = document.getElementById('fn');
let inputSn = document.getElementById('sn');
let buttonSubmit = document.getElementById('btSub')


buttonSubmit.addEventListener('click',(e)=>{
	e.preventDefault();

	// variables de configuracion
	let url = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${Object.values(inputSn.value)}&fname=${inputFn.value}`
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
			// console.log(data)

			fname.innerHTML = `${data.fname}`;
			sname.innerHTML = `${data.sname}`;
			percentage.innerHTML = `${data.percentage}%`;
			result.innerHTML = `${data.result}`;
		})
		.catch(err => console.error(err));

})