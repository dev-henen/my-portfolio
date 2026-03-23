<script lang="ts">
  import type { Stat } from "$lib/types";
  export let stats: Stat[];
</script>

<section class="relative grid md:grid-cols-2 gap-12 items-center min-h-[80vh] py-8">

  <!-- soft radial dot-grid background -->
  <div
    aria-hidden="true"
    class="pointer-events-none absolute inset-0 -z-10"
    style="background-image: radial-gradient(circle, rgba(91,124,249,0.09) 1px, transparent 1px); background-size: 28px 28px;"
  ></div>

  <!-- LEFT — copy -->
  <div class="space-y-7">
    <!-- availability badge -->
    <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold border border-green-300/60 dark:border-green-700/50 text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/15 w-fit animate-soft-glow">
      <span class="relative flex h-2 w-2">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </span>
      Available for new roles
    </span>

    <div>
      <h1 class="text-5xl md:text-6xl font-heading font-extrabold leading-[1.1] tracking-tight">
        Hi, I'm<br/>
        <span style="background: linear-gradient(135deg, #5b7cf9 0%, #8bb4ff 45%, #7b9bff 100%);
                     -webkit-background-clip: text; background-clip: text; color: transparent;">
          Moses Henen.
        </span>
      </h1>
      <p class="mt-3 text-xl text-gray-500 dark:text-gray-400 font-semibold">
        I ship production-ready web systems.
      </p>
    </div>

    <p class="text-gray-500 dark:text-gray-400 max-w-md leading-relaxed">
      Software Engineer with 3 years of experience building scalable fintech
      and crypto platforms. Shipped 10+ systems independently — from
      architecture to deployment.
    </p>

    <!-- CTAs -->
    <div class="flex flex-wrap gap-3">
      <a
        href="https://docs.google.com/document/d/1hsyyOWHXFghP2E0dAaPDbbrJ7U31AGG2O-S7w8Sh6ik/edit?usp=sharing"
        target="_blank"
        class="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white font-bold text-sm transition hover:opacity-90"
        style="background: linear-gradient(135deg, #3a5ef5 0%, #5b7cf9 60%, #7b9bff 100%);
               box-shadow: 0 6px 24px rgba(91,124,249,0.40), inset 0 1px 0 rgba(255,255,255,0.18);"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        </svg>
        View CV
      </a>
      <a
        href="#contact"
        class="ghost-btn inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition"
      >
        Get in touch
      </a>
    </div>

    <!-- social links -->
    <div class="flex items-center gap-4 pt-1">
      <a
        href="https://github.com/dev-henen"
        target="_blank"
        class="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 transition font-semibold"
        aria-label="GitHub"
      >
        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
        dev-henen
      </a>
      <span class="w-px h-4 bg-gray-300 dark:bg-gray-700"></span>
      <a
        href="https://linkedin.com/in/dev-henen"
        target="_blank"
        class="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 transition font-semibold"
        aria-label="LinkedIn"
      >
        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
        dev-henen
      </a>
    </div>
  </div>

  <!-- RIGHT — terminal with soft navy material skin -->
  <div class="relative flex justify-center items-start">
    <div
      class="w-full max-w-md rounded-3xl overflow-hidden animate-floaty"
      style="border: 1px solid rgba(91,124,249,0.15);
             box-shadow: 0 4px 12px rgba(0,0,30,0.35),
                         0 20px 60px rgba(0,0,40,0.55),
                         0 0 0 1px rgba(91,124,249,0.08),
                         inset 0 1px 0 rgba(160,190,255,0.07);"
    >
      <!-- title bar -->
      <div class="flex items-center gap-1.5 px-4 py-3 border-b"
        style="background: rgba(16,22,50,0.95); border-color: rgba(91,124,249,0.12);">
        <span class="w-3 h-3 rounded-full bg-red-400/70"></span>
        <span class="w-3 h-3 rounded-full bg-yellow-400/70"></span>
        <span class="w-3 h-3 rounded-full bg-green-400/70"></span>
        <span class="ml-3 text-xs font-mono" style="color: rgba(160,185,255,0.5);">~/impact.sh</span>
      </div>
      <!-- body -->
      <div class="px-6 py-5 font-mono text-xs leading-relaxed space-y-1"
        style="background: rgba(8,12,28,0.97);">
        <p style="color: rgba(100,130,200,0.55);">$ node impact.js</p>
        <p>&nbsp;</p>
        {#each stats as stat}
          <div class="flex items-center gap-3">
            <span class="text-green-400 shrink-0">✓</span>
            <span class="flex-1" style="color: rgba(160,185,255,0.65);">{stat.label}</span>
            <span class="font-bold tabular-nums" style="color: #7b9bff;">{stat.value}</span>
          </div>
        {/each}
        <p>&nbsp;</p>
        <p style="color: rgba(160,185,255,0.65);">&gt; Status: <span class="text-green-400">Open to new roles</span> <span class="animate-blink">▊</span></p>
        <p style="color: rgba(160,185,255,0.65);">&gt; Location: <span style="color: rgba(220,230,255,0.85);">Nigeria (Remote-Ready)</span></p>
      </div>
    </div>
  </div>
</section>

<style>
  .ghost-btn {
    background: rgba(91, 124, 249, 0.08);
    border: 1px solid rgba(91, 124, 249, 0.22);
    box-shadow: inset 0 1px 0 rgba(160, 190, 255, 0.08);
  }

  .ghost-btn:hover {
    background: rgba(91, 124, 249, 0.15);
  }
</style>
