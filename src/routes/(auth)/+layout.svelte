<script>
  import { onMount, afterUpdate } from "svelte";
  import { goto } from "$app/navigation";

  onMount(() => {
	// TODO: check already signed in
    goto(`/signin`);
  });
</script>

<main>
  <slot />
</main>
