<script>
	import { onMount, afterUpdate } from 'svelte';
	import { goto } from '$app/navigation';

		onMount(() => {
	
			goto(`/signin`);
		
	});

</script>

<main>
	<slot />
</main>
