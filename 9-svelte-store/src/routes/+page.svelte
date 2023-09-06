<script>
    import { localStorageStore } from './localStorageStore.js'
    
    let message = localStorageStore('message', 'Hello 👋')
    
    $message = 'Bye 👋' 
</script>
    
    {$message}