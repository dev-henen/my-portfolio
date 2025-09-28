<script lang="ts">
  import favicon from "$lib/assets/favicon.ico";
  import "../app.css";

  let { children } = $props();
</script>

<svelte:head>
  <title>Moses Henen Developer — Portfolio</title>
  <meta
    name="description"
    content="I am a passionate Software Engineer with experience in designing, developing, and managing web projects. Proficient in JavaScript, TypeScript (Node.js, Express, SvelteKit, React, Next.js), PHP, and HTML, CSS (Tailwind). Strong expertise in Object-Oriented Programming (OOP) and skilled in leveraging various tools and databases to build robust, scalable, and efficient solutions."
  />
  <meta name="og:title" content="Moses Henen Developer — Portfolio" />
  <meta
    name="og:description"
    content="I am a passionate Software Engineer with experience in designing, developing, and managing web projects. Proficient in JavaScript, TypeScript (Node.js, Express, SvelteKit, React, Next.js), PHP, and HTML, CSS (Tailwind). Strong expertise in Object-Oriented Programming (OOP) and skilled in leveraging various tools and databases to build robust, scalable, and efficient solutions."
  />
  <meta name="og:image" content="https://henen-dev.vercel.app/og-image.png" />
  <meta name="twitter:card" content="summary_large_image" />

  <link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
