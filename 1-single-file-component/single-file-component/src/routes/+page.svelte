<script>

let count = 0;

function increment(){
    count += 1
}

</script>

<p>Clicked {count} {count <= 1 ? 'time' : 'times'}</p>
<button on:click={increment}>click</button>


<style>

p {
    color: teal;
}

</style>