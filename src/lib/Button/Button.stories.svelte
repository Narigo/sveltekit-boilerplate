<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { action } from '@storybook/addon-actions';
	import Button from './Button.svelte';
</script>

<Meta title="Components/Button" component={Button} />

<Template let:args>
	<Button {...args} on:click={args.onClick}>This is a button</Button>
</Template>

<Story
	name="Regular"
	args={{
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
