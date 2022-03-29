<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Headline from './Headline.svelte';
</script>

<Meta title="Components/Headline" component={Headline} />

<Template let:args>
	<Headline {...args}>Hello World</Headline>
</Template>

<Story name="Regular" />
