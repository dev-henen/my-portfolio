<script lang="ts">
  import type { SkillCategory } from "$lib/types";
  export let skills: SkillCategory[];
</script>

<section id="skills" class="mt-24">
  <p class="text-xs font-bold uppercase tracking-widest text-primary mb-2">Skills</p>
  <h2 class="text-3xl font-heading font-bold">Technical skills</h2>
  <p class="mt-1 text-gray-500 dark:text-gray-400 text-sm">Technologies and tools I use to build production systems.</p>

  <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each skills as group}
      <div class="bg-white dark:bg-gray-800/60 rounded-xl border border-gray-100 dark:border-gray-700 p-5 card-shadow">
        <h3 class="text-xs font-bold uppercase tracking-widest text-primary mb-4">{group.category}</h3>
        <div class="flex flex-wrap gap-2">
          {#each group.items as skill}
            <span class="px-2.5 py-1 rounded-md text-sm font-medium bg-gray-50 dark:bg-gray-700/60 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">
              {skill}
            </span>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>
