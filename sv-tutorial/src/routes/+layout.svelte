<script lang="ts">
    import Nav from "../components/Nav.svelte";
	import '../app.css';
	let { children } = $props();
</script>

<Nav />
{@render children()}
