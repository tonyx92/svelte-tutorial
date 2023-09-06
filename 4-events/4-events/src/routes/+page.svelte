<script>

    //esercizio 1 event 
	let mouse = { x: 0, y: 0 }

	function handleMouseMove(event) {
		mouse.x = event.clientX
		mouse.y = event.clientY
	}



    //esercizio 2
    function handleSubmit() {
		console.log('Submit')
	}
</script>
<!-- esercizio 1 -->
<div on:mousemove={handleMouseMove}>
	Esercizio 1:utilizziamo evento in svelte per indicare la posizione del cursore <br>La posizione del mouse é {mouse.x} x {mouse.y}
</div>

<p>Esercizo 2 aggiunta evento preventDefault</p>
<form on:submit|preventDefault={handleSubmit}>
	<input type="text" />
	<button type="submit">Submit</button>
</form>

<style>
	div {
		height: 100vh;
	}
</style>