<h1>Lovers calculator (&#10048;&#9696;&#8255;&#9696;)</h1>

<form action="" method="post">
	<input type="text" id="fn" name="fname" placeholder="fname" value="" required /><br />

	<span class="span-radio">
		<label class="radio-control">
			<input type="radio" id="gender-male1" name="gender1" value="male" />
			Male
		</label>

		<label class="radio-control">
			<input type="radio" id="gender-female1" name="gender1" value="female" checked />
			Female
		</label>
	</span>
	<br />

	<input type="text" id="sn" name="sname" placeholder="sname" value="" required /><br />
	<span class="span-radio">
		<label class="radio-control">
			<input type="radio" id="gender-male2" name="gender2" value="male" checked />
			Male
		</label>

		<label class="radio-control">
			<input type="radio" id="gender-female2" name="gender2" value="female" />
			Female
		</label>
	</span>
	<br /><br />

	<input type="submit" id="btSub" value="Submit" />
</form>

<article>
	<section class="result-content">
		<legend> Love Meter &#9825; </legend>
		<meter min="0" max="100" value="0" low="40" high="70" optimum="100" id="meter" name="mtr" />

		<section class="info-area">
			<span class="user1" id="user1">
				<!-- <img src="img/girl.svg" alt="user icon" height="100" width="100"> -->
				<!-- <img src="favicon.png" alt="user icon" height="100" width="100"> -->
			</span>

			<!-- <img src="img/heart-broken.svg" alt="heart icon" class="heart-icon" height="110" width="110"> -->
            <img src="favicon.png" alt="user icon" height="100" width="100">


			<span class="user2" id="user2">
				<!-- <img src="img/boy.svg" alt="user icon" height="105" width="105"> -->
				<!-- <img src="favicon.png" alt="user icon" height="100" width="100"> -->
			</span>
		</section>
	</section>

	<h2 id="msg">Welcome! :D</h2>
</article>

<!--* archivo js -->
<!-- <script src="/assets/js/main.js" type="module"></script> -->

<style>
	h1 {
		font-family: 'Jua', sans-serif;
		font-size: 40px;

		text-align: center;
	}

	/* Form styles */
	form {
		height: 500px;
		width: 900px;
		margin-bottom: 5%;

		/* background-color: blueviolet; */
		border: solid black 5px;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	/* form input-text style */
	#fn,
	#sn {
		height: 100px;
		width: 735px;

		padding-left: 20px;

		font-family: 'Jua', sans-serif;
		font-size: 30px;

		background: var(--input-checked-color);
		border: 10px solid #000000;
		border-radius: 35px;
	}

	#fn:focus,
	#sn:focus {
		outline: none;
		background-color: var(--input-select-color);
	}

	#fn::selection {
		background-color: red;
	}

	/* form input-radio styles */
	.span-radio {
		position: relative;
		right: 270px;
	}

	.radio-control {
		font-family: 'Jua', sans-serif;
		font-size: 24px;

		padding: 10px;
	}

	input[type='radio'] {
		appearance: none;
		margin: 0;

		height: 20px;
		width: 20px;

		border: 2px solid black;
		border-radius: 50%;

		background-color: #ffffff;
		margin-right: 10px;

		transition: all 0.5s ease;
	}

	input[type='radio']:hover {
		border: 2px solid #ffffff;
	}

	input[type='radio']:checked:hover {
		border: 2px solid var(--input-checked-color);
	}

	input[type='radio']:checked {
		transform: scale(2);
		background-color: var(--input-checked-color);
		margin-right: 10px;
	}

	/* form button style */
	#btSub {
		width: 10%;
		height: 10%;

		border: 4px solid #000000;
		border-radius: 40px;

		background-color: var(--input-checked-color);

		font-family: 'Jua', sans-serif;
		font-size: 20px;

		transition: all 0.5s ease;
	}

	#btSub:hover {
		background-color: var(--input-select-color);
		transform: rotate(-5deg);
		cursor: pointer;
	}

	#btSub:active {
		transform: translate(5px, 5px);
	}

	/* article styles */
	article {
		height: 500px;
		width: 900px;

		/* background-color: blue; */
		border: solid black 5px;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	legend {
		font-family: 'Jua', sans-serif;
		font-size: 40px;
	}

	.result-content {
		height: 305px;
		width: 863px;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.info-area {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.user1 {
		height: 130px;
		width: 130px;

		margin-right: 100px;
		padding: 10px;
		border-radius: 50%;

		text-align: center;

		background-color: var(--background-main-color);
	}

	.user2 {
		height: 130px;
		width: 130px;

		margin-left: 100px;
		padding: 10px;
		border-radius: 50%;

		text-align: center;

		background-color: var(--background-main-color);
	}

	/* .name1,
.name2 {
    font-family: 'Jua', sans-serif;
    font-size: 30px;

    text-align: center;
} */

	meter {
		height: 100px;
		width: 735px;

		border-radius: 50px;
	}

	meter::-webkit-meter-optimum-value,
	meter::-webkit-meter-suboptimum-value,
	meter::-webkit-meter-even-less-good-value {
		transition: 2s width;
	}

	meter::-webkit-meter-bar {
		/* webkit-meter-bar: Define el color principal de la barra.  */
		background: #ffffff;
	}

	meter::-webkit-meter-even-less-good-value {
		background-color: red;
	}

	meter::-webkit-meter-suboptimum-value {
		background: yellow;
		/* webkit-meter-suboptimum-value: Por defecto es amarillo pero se puede personalizar cuando el valor NO se encuentra dentro de la jerarquía low <=value <=high. */
	}

	meter::-webkit-meter-optimum-value {
		/* webkit-meter-optimum-value: Se puede personalizar cuando el valor se encuentra dentro de la jerarquía low <=value <=high.  */
		background: green;
	}

	h2 {
		font-family: 'Jua', sans-serif;
	}

	/* END */
</style>
