<script lang="ts">
  import Nav from "$lib/components/Nav.svelte";
  import Footer from "$lib/components/Footer.svelte";

  export let data;
</script>

<Nav theme={data.theme} />

<main class="max-w-6xl mx-auto px-6 py-12">
  <slot />
  <Footer />
</main>
