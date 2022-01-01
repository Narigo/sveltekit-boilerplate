<script lang="typescript">
	import { createEventDispatcher } from 'svelte';

	export let disabled = false;

	const dispatch = createEventDispatcher();

	function onClick() {
		dispatch('click');
	}
</script>

<button {disabled} on:click={onClick}><slot /></button>

<style>
	button {
		border: 1px solid #000;
		padding: 8px 24px;
	}
</style>
