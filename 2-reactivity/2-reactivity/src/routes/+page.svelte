<script>
 //primo esercizio
    let list = ['React', 'Vue']

    function handleClick() {
        //doesn't update
        list.push('Svelte')
        //until you assign it
        list = list
        //so it is easier doing this
        list = [...list, 'svelte']

    }

// Secondo esercizio


//stato
let items = [1,2,3,4]


//computed ogni volta 
$:amount = items.length


function addItem() {
    //aggiungo gli elementi precedenti + la lunghezza dell'ultimo + 1
    items = [...items, items.lenght + 1]
}




//esercizio 3
	// state
	let album = [
		{ track: 'Track 1', length: 180 },
		{ track: 'Track 2', length: 240 },
		{ track: 'Track 3', length: 280 },
	]

	// computed
	$: albumLength = getAlbumLength(album)

	function getAlbumLength(album) {
		let lengthSeconds = album.reduce(
			(totalLength, currentValue) => {
			return totalLength + currentValue.length
		}, 0)

		let [minutes, seconds] =
		(lengthSeconds / 60)
		.toFixed(2)
		.toString()
		.split('.')

		return { minutes, seconds }
	}

	function addTrack() {
		album = [...album, { track: 'Track 4', length: 420 }]
	}

//esercizio 4
let count = 0
$: {
		console.log(`The count is ${count}`)

		if (count >= 4) {
			console.log('Restarting count.')
			count = 0
		}
	}


</script>
<!-- primo esercizio -->
<p>{list}</p>
<button on:click={handleClick}>click</button>

<!-- Secondo esercizio -->
<br><br>
<p>The amount is {amount}</p>
<button on:click={addItem}>Add item</button>

<!-- $: think about it as giving svelte dependencies to watch and rerun te code when the value changes -->



<!-- 3 esercizio -->
<br><br>
<p>
	Album length is {albumLength.minutes} minutes and
	{albumLength.seconds} seconds.
</p>
<button on:click={addTrack}>Add track</button>



<!-- Esercizio 4 -->
<br><br>
<p>Aggiungo un conteggio all'interno di console.log()</p>
<button on:click={() => count += 1}>Click</button>


