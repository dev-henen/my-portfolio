<script lang="ts">
  import type { Project } from "$lib/types";
  export let projects: Project[];
</script>

<section id="projects" class="mt-24">
  <p class="text-xs font-bold uppercase tracking-widest text-primary mb-2">Projects</p>
  <h2 class="text-3xl font-heading font-bold">Key projects</h2>
  <p class="mt-1 text-gray-500 dark:text-gray-400 text-sm">Production systems built and shipped independently.</p>

  <div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {#each projects as project}
      <article class="group bg-white dark:bg-gray-800/60 rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden card-shadow hover:-translate-y-1 hover:shadow-lg transition duration-200 flex flex-col">

        <!-- colored top bar -->
        <div class="h-1 w-full bg-gradient-to-r from-primary to-purple-400 shrink-0"></div>

        <div class="p-5 flex flex-col flex-1">
          <!-- title + link -->
          <div class="flex items-start justify-between gap-2 mb-3">
            <h3 class="font-semibold text-gray-900 dark:text-gray-100 leading-snug">{project.title}</h3>
            {#if project.links.demo}
              <a
                href={project.links.demo}
                target="_blank"
                class="shrink-0 p-1.5 rounded-md text-gray-400 dark:text-gray-500 hover:text-brand hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                aria-label="Open live site"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            {/if}
          </div>

          <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
            {project.description}
          </p>

          <!-- tech tags -->
          <div class="mt-4 flex flex-wrap gap-1.5">
            {#each project.tags as tag}
              <span class="px-2 py-0.5 rounded text-xs font-medium bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border border-purple-100 dark:border-purple-800/40">
                {tag}
              </span>
            {/each}
          </div>
        </div>
      </article>
    {/each}
  </div>
</section>
