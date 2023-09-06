<!-- In Svelte we can use slots to compose components meaning our components can contain other components and elements to be more reusable like regular HTML. -->

<script>
    import Button from "./component/Button.svelte";
</script>

<Button>
    <span slot="icon">➕</span>
    <span slot="text">Add</span>
</Button>

<Button>
    <span slot="icon">💩</span>
    <span slot="text">Delete</span>
</Button>