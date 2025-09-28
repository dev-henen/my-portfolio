<script lang="ts">
  import favicon from "$lib/assets/favicon.ico";
  import "../app.css";

  let { children } = $props();
</script>

<svelte:head>
  <title>Moses Henen Developer — Portfolio</title>
  <meta
    name="description"
    content="Portfolio of Jane Developer — Frontend engineer, UI/UX enthusiast, and open-source contributor."
  />

  <link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
