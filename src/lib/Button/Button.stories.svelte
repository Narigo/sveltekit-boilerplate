<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Button from './Button.svelte';
</script>

<Meta title="Components/Button" component={Button} />

<Template let:args>
	<Button {...args} on:click={args.onClick}><slot /></Button>
</Template>

<Story
	name="Primary"
	args={{
		onClick: () => {
			console.log('clicked');
		}
	}}>Button</Story
>
