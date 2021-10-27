<script lang="ts">
	export let onClick: () => void;
</script>

<button on:click={onClick}><slot /></button>

<style>
	button {
		padding: 8px 24px;
	}
</style>
