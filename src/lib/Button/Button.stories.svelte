<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { action } from '@storybook/addon-actions';
	import Button from './Button.svelte';
</script>

<Meta title="Components/Button" component={Button} />

<Template id="test" let:args>
	<Button on:click={args.onClick}>Test</Button>
</Template>

<Template id="hello" let:args>
	<Button on:click={args.onClick}>Hello</Button>
</Template>

<Story
	name="Primary"
  template="test"
	args={{
		onClick: action('clicked')
	}}
/>

<Story
	name="Second"
  template="hello"
	args={{
		onClick: action('clicked')
	}}
/>
