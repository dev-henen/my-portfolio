<script lang="ts">
  import type { Project } from "$lib/types";
  export let projects: Project[];
</script>

<section id="projects" class="mt-24">
  <p class="text-xs font-bold uppercase tracking-widest text-primary mb-2">Projects</p>
  <h2 class="text-3xl font-heading font-bold">Key projects</h2>
  <p class="mt-1 text-gray-400 text-sm">Production systems built and shipped independently.</p>

  <div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {#each projects as project}
      <article class="project-card group flex flex-col overflow-hidden rounded-2xl card-lift card-shadow bg-white/85 dark:bg-gray-800/75 border border-gray-200/50 dark:border-gray-700/40">

        <!-- soft cool blue gradient top bar -->
        <div class="h-1 w-full shrink-0 bg-gradient-to-r from-blue-600 via-primary to-secondary"></div>

        <div class="p-5 flex flex-col flex-1">
          <!-- title + link -->
          <div class="flex items-start justify-between gap-2 mb-3">
            <h3 class="font-bold text-gray-900 dark:text-gray-100 leading-snug">{project.title}</h3>
            {#if project.links.demo}
              <a
                href={project.links.demo}
                target="_blank"
                class="shrink-0 p-1.5 rounded-xl text-gray-400 dark:text-gray-500 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-700/60 transition"
                aria-label="Open live site"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            {/if}
          </div>

          <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
            {project.description}
          </p>

          <!-- tech tags — cool blue frosted pills -->
          <div class="mt-4 flex flex-wrap gap-1.5">
            {#each project.tags as tag}
              <span class="tag-pill px-2.5 py-0.5 rounded-full text-xs font-semibold">
                {tag}
              </span>
            {/each}
          </div>
        </div>
      </article>
    {/each}
  </div>
</section>

<style>
  .tag-pill {
    background: rgba(91, 124, 249, 0.10);
    border: 1px solid rgba(91, 124, 249, 0.22);
    color: #5b7cf9;
  }

  :global(.dark) .tag-pill {
    background: rgba(91, 124, 249, 0.12);
    border-color: rgba(91, 124, 249, 0.25);
    color: #9ab4ff;
  }
</style>
