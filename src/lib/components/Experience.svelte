<script lang="ts">
  import type { ExperienceItem } from "$lib/types";
  export let experience: ExperienceItem[];
</script>

<section id="experience" class="mt-24">
  <p class="text-xs font-bold uppercase tracking-widest text-primary mb-2">Experience</p>
  <h2 class="text-3xl font-heading font-bold">Professional roles</h2>
  <p class="mt-1 text-gray-500 dark:text-gray-400 text-sm">Where I've worked and what I've shipped.</p>

  <div class="mt-10 space-y-0">
    {#each experience as job, i}
      <div class="relative flex gap-6 md:gap-10">

        <!-- timeline spine -->
        <div class="flex flex-col items-center">
          <div
            class="w-3 h-3 rounded-full mt-1 shrink-0 ring-4 ring-white dark:ring-gray-900"
            style="background: {job.current ? '#6D28D9' : '#9CA3AF'};"
          ></div>
          {#if i < experience.length - 1}
            <div class="w-px flex-1 bg-gray-200 dark:bg-gray-700 my-1 min-h-8"></div>
          {/if}
        </div>

        <!-- content -->
        <div class="pb-10 flex-1 min-w-0">
          <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span class="font-semibold text-gray-900 dark:text-gray-100">{job.role}</span>
            {#if job.url}
              <a href={job.url} target="_blank" class="text-brand font-semibold text-sm font-normal">· {job.company} ↗</a>
            {:else}
              <span class="text-brand font-semibold text-sm">· {job.company}</span>
            {/if}
            {#if job.current}
              <span class="px-2 py-0.5 rounded-full text-xs font-bold bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800">
                CURRENT
              </span>
            {/if}
          </div>

          <div class="flex flex-wrap items-center gap-2 mt-1 text-xs text-gray-500 dark:text-gray-400">
            <span class="font-mono">{job.period}</span>
            <span>·</span>
            <span>{job.location}</span>
          </div>

          <ul class="mt-3 space-y-2">
            {#each job.highlights as point}
              <li class="flex gap-2.5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                <span class="text-primary mt-0.5 shrink-0 font-bold">▸</span>
                <span>{point}</span>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    {/each}
  </div>
</section>
