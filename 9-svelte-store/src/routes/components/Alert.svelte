<script>
    import { message } from '../stores'

    function updateStore() {
        $message = 'Bye 👋'
    }
</script>

<p>{$message}</p>
<button on:click={updateStore}>Click</button>