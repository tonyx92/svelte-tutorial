<script>
    //Data binding is keeping your application state and user interface synchronized.

 	let list = ['React', 'Vue', 'Svelte']
    let filteredList = []
	let searchQuery = ''

	function filterList() {
    filteredList = list.filter(item => {
      return item
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
    })
  }
</script>

<input
	on:input={filterList}
	bind:value={searchQuery}
	type="text"
/>

<ul>
{#each filteredList as item}
  <li>{item}</li>
{/each}
</ul>
