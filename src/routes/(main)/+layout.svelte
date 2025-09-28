<!-- SCRIPTS -->
<script lang="ts">
  import { onMount } from "svelte";
  import { setCookie, getCookie } from "$lib";

  export let data;
  const theme = data.theme;

  onMount(() => {
    // mobile menu toggle
    const menuBtn = document.getElementById("menuBtn");
    const mobileNav = document.getElementById("mobileNav") as HTMLOListElement;
    menuBtn?.addEventListener("click", () =>
      mobileNav.classList.toggle("hidden")
    );

    // theme toggle
    const themeToggle = document.getElementById("themeToggle");
    const sun = document.getElementById("sun") as HTMLElement;
    const moon = document.getElementById("moon") as HTMLElement;

    function setTheme(isDark: boolean) {
      document.documentElement.classList.toggle("dark", isDark);
      sun.classList.toggle("hidden", isDark);
      moon.classList.toggle("hidden", !isDark);
      try {
        setCookie("theme", isDark ? "dark" : "light");
      } catch (e) {
        /* no-op */
      }
    }

    (function initTheme() {
      let stored = null;
      try {
        stored = theme;
      } catch (e) {}
      if (stored === "dark") setTheme(true);
      else if (stored === "light") setTheme(false);
      else
        setTheme(
          window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        );
    })();

    themeToggle?.addEventListener("click", () => {
      setTheme(!document.documentElement.classList.contains("dark"));
    });
  });
</script>

<!-- NAV -->
<header
  class="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 glass"
>
  <div class="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
    <a href="#" class="flex items-center gap-3">
      <!-- Inline SVG logo (always loads) -->
      <svg
        width="40"
        height="40"
        viewBox="0 0 80 80"
        class="rounded-md"
        aria-hidden
      >
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0" stop-color="#6D28D9" />
            <stop offset="1" stop-color="#4C1D95" />
          </linearGradient>
        </defs>
        <rect width="80" height="80" rx="14" fill="url(#g)" />
        <text
          x="50%"
          y="54%"
          text-anchor="middle"
          fill="white"
          font-size="34"
          font-family="Sora, Inter"
          font-weight="700">HD</text
        >
      </svg>
      <span class="font-heading font-semibold text-lg">HenenDev</span>
    </a>

    <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
      <a href="#projects" class="hover:text-brand">Projects</a>
      <a href="#about" class="hover:text-brand">About</a>
      <a href="#skills" class="hover:text-brand">Skills</a>
      <a href="#contact" class="hover:text-brand">Contact</a>
    </nav>

    <div class="flex items-center gap-3">
      <button
        id="themeToggle"
        aria-label="Toggle theme"
        class="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
      >
        <!-- icons swap in JS -->
        <svg
          id="sun"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v2m0 14v2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M3 12h2m14 0h2M5.2 18.8l1.4-1.4M17.4 6.6l1.4-1.4M12 7a5 5 0 100 10 5 5 0 000-10z"
          />
        </svg>
        <svg
          id="moon"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
          />
        </svg>
      </button>

      <a
        href="#contact"
        class="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-brand to-indigo-500 text-white shadow-sm hover:opacity-95 transition"
      >
        Hire me
      </a>

      <!-- mobile menu toggle -->
      <button
        id="menuBtn"
        class="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label="Open menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 8h16M4 16h16"
          />
        </svg>
      </button>
    </div>
  </div>

  <!-- mobile nav -->
  <nav
    id="mobileNav"
    class="md:hidden hidden border-t border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80"
  >
    <div class="px-6 py-4 flex flex-col gap-2">
      <a href="#projects" class="py-2">Projects</a>
      <a href="#about" class="py-2">About</a>
      <a href="#skills" class="py-2">Skills</a>
      <a href="#contact" class="py-2">Contact</a>
    </div>
  </nav>
</header>

<!-- MAIN -->
<main class="max-w-6xl mx-auto px-6 py-12">
  <slot />

  <!-- FOOTER -->
  <footer
    class="mt-16 mb-8 text-center text-sm text-gray-500 dark:text-gray-400"
  >
    Crafted with ♥ by Moses Henen using SvelteKit & Tailwind.
  </footer>
</main>
