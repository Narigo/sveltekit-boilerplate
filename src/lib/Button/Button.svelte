<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher<{ click: string }>();

	function onClick() {
		console.log('clicked?');
		dispatch('click', 'hello');
	}
</script>

<button on:click={onClick}><slot /></button>

<style>
	button {
		border: 1px solid #000;
		padding: 8px 24px;
	}
</style>
