<script>
	let kasse = "faller"

	let tall1 = Math.random() * 10
	let tall2 = Math.random() * 10
	$:t1 = Math.round(tall1)
	$:t2 = Math.round(tall2)

	$: fasit = t1 * t2 
	$: riktigSvar = (fasit === svar)
	let svar = ""
	let theGameIsOn = true
	$: regnestykke = `${t1} + ${t2}` //string literal
	let poeng = 0 
	let bakgrunn = "rgb(223, 223, 223)"

	const lagNyeTall = () => {
		t1 = Math.ceil(Math.random() * 10)
		t2 = Math.ceil(Math.random() * 10)
	}

	const sjekkSvar = () => {
		if(riktigSvar && theGameIsOn) { 
			lagNyeTall()
			svar = "" //nuller ut input feltet
			kasse = "" //dette gjør at kassen går til topp igjen
			poeng++
			setTimeout( () => { kasse = "faller" }, 50 )
			//venter littegrann, 1000 er 1 sekund, 50 ms}
		} 
	}


	const gameOver = () => {
		theGameIsOn = false
		alert("Game over")
		bakgrunn = "red"
	}	
</script>





<section style="background-color: {bakgrunn}">

	<header>
		<h1>Regnemesteren</h1>

		<h3>Poeng: {poeng}</h3>
	</header>

	<main>
		<div on:animationend={gameOver} class="{kasse}">{regnestykke}</div>
		<!-- Svelte kan skrive on:animationend -->
	</main>

	<footer>
		<input type="number" bind:value={svar} on:input={sjekkSvar} placeholder="Skriv svaret ditt her...">
	</footer>

</section>





<style>

	* {
		margin: 0;
		box-sizing: border-box;
	}
	section {
		display: grid;
		grid-template-rows: auto 300px auto;
		max-width: 300px;
		background-color: rgb(223, 223, 223);
		margin: 20px auto;
	}

	input:focus {
		outline: none; 
	}
	input {
		width: 100%;
		padding: 0.5rem;
		font-size: 1.5rem;
		text-emphasis: center;
	}

	header {
		background-color: rgb(0, 141, 197);
		display: flex;
		align-items: center;
		flex-flow: column;
	}
	h1, h3{
		color: #ffffff;
		text-transform: uppercase;
		font-size: 2rem;
		font-weight: 100;
		padding: 1.5rem;
	}

	h3 {
		font-size: 1.5rem;
		font-weight: 500;
	}

	@keyframes fallNed {
		to {
			transform: translateY(240px);
		}
	}

	.faller {
		animation: fallNed 4s linear forwards;
	}

	main div {
		width: 200px;
		background-color: rgb(67, 204, 197);
		height: 50px;
		margin: 10px auto;
		/* Tallet over gjør at man får litt margin over og under seg */
		text-align: center;
		font-size: 2rem;
		line-height: 50px;
		color: white;

	}
</style>