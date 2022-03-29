<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { action } from '@storybook/addon-actions';
	import Button from './Button.svelte';
</script>

<Meta title="Components/Button" component={Button} />

<Template let:args>
	<Button {...args} on:click={args.onClick}>Button</Button>
</Template>

<Story
	name="Regular"
	args={{
		disabled: false,
		onClick: action('clicked')
	}}
/>

<Story
	name="Disabled"
	args={{
		disabled: true,
		onClick: action('clicked')
	}}
/>
