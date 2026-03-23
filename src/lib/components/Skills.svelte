<script lang="ts">
  import type { SkillCategory } from "$lib/types";
  export let skills: SkillCategory[];
</script>

<section id="skills" class="mt-24">
  <p class="text-xs font-bold uppercase tracking-widest text-primary mb-2">Skills</p>
  <h2 class="text-3xl font-heading font-bold">Technical skills</h2>
  <p class="mt-1 text-gray-400 text-sm">Technologies and tools I use to build production systems.</p>

  <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each skills as group}
      <div class="rounded-2xl border border-gray-200/50 dark:border-gray-700/40 p-5 card-shadow bg-white/85 dark:bg-gray-800/75">
        <h3 class="text-xs font-bold uppercase tracking-widest text-primary mb-4">{group.category}</h3>
        <div class="flex flex-wrap gap-2">
          {#each group.items as skill}
            <span class="skill-badge px-3 py-1 rounded-full text-sm font-semibold">
              {skill}
            </span>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .skill-badge {
    background: rgba(100, 116, 168, 0.10);
    border: 1px solid rgba(100, 116, 168, 0.20);
    color: #465080;
  }

  :global(.dark) .skill-badge {
    background: rgba(91, 124, 249, 0.08);
    border-color: rgba(91, 124, 249, 0.18);
    color: #96a8d4;
  }
</style>
