<script>
    //esercizio 1
    //cambia lo stato di log in if statement
    let user = {
        loggedIn: false
    }


    function toggle() {
        user.loggedIn = !user.loggedIn
    }

    //esercizio 2 e 3
    let todos = [
		{ id: 1, text: 'Todo 1', completed: true },
		{ id: 2, text: 'Todo 2', completed: false },
		{ id: 3, text: 'Todo 3', completed: false },
		{ id: 4, text: 'Todo 4', completed: false },
	]


    //esercizio 4


    async function fetchPokemon(pokemonName){
        let url =`https://pokeapi.co/api/v2/pokemon/`
        let response = await fetch(`${url}${pokemonName}`)
        let {name, sprites} = await response.json()

        return {
            name,image:sprites['front_default']
        }
    }

</script>

<p>Esercizio 1: cambio di stato con #if statement</p>
{#if user.loggedIn}
    <button on:click={toggle}>Log out</button>
{/if}

{#if !user.loggedIn}
    <button on:click={toggle}>Log in</button>
{/if}

<br><br>

<!-- esercizio 2 -->
<!-- looping -->
<p>Esercizio 2: lista di items e rendering degli stessi con #each</p>

<ul>
{#each todos as todo}
    <li>
        <input checked={todo.completed} type="checkbox" />
        <span>{todo.text}</span>
    </li>
{/each}
</ul>

<br><br>
<p>Esercio 3: come sopra ma effettuiamo una destrutturizzazione degli elemnti list nel ciglo #each</p>

<ul>
{#each todos as {id, text, completed}, index (id)}
  <li>
		<input checked={completed} type="checkbox" />
		<span>{text}</span>
	</li>
{/each}
</ul>

<br><br>
<p>Esercio 4: risolviamo una promises con #await</p>
{#await fetchPokemon('pikachu')}
    <p>Fetching Pokemon...</p>
{:then pokemon} 
    	<h1>il nome del pokemon é {pokemon.name}, eccolo qua :</h1>
        <img src={pokemon.image} alt={pokemon.name} />
{:catch error}
    <p>qualcosa non ha funzionato: {error.message}</p>
{/await}
