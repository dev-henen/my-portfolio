<script lang="ts">
  export let myEmail: string;
  export let numberOfWOrkYears: number;
</script>

<section id="about" class="mt-24">
  <p class="text-xs font-bold uppercase tracking-widest text-primary mb-2">About</p>
  <h2 class="text-3xl font-heading font-bold">About me</h2>

  <div class="mt-8 grid md:grid-cols-3 gap-8 items-start">

    <!-- info card -->
    <div class="bg-white dark:bg-gray-800/60 rounded-xl border border-gray-100 dark:border-gray-700 p-5 card-shadow space-y-4 text-sm">
      <dl class="space-y-3">
        <div>
          <dt class="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Location</dt>
          <dd class="mt-0.5 text-gray-700 dark:text-gray-300">Gboko, Benue, Nigeria</dd>
          <dd class="text-gray-500 dark:text-gray-400 text-xs">UTC+01:00 · Remote-Ready</dd>
        </div>
        <div>
          <dt class="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Availability</dt>
          <dd class="mt-0.5 text-gray-700 dark:text-gray-300">Open to remote roles &amp; freelance</dd>
        </div>
        <div>
          <dt class="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Email</dt>
          <dd class="mt-0.5">
            <a href="mailto:{myEmail}" class="text-brand hover:underline font-normal break-all">{myEmail}</a>
          </dd>
        </div>
        <div>
          <dt class="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Profiles</dt>
          <dd class="mt-1 flex flex-col gap-1">
            <a href="https://github.com/dev-henen" target="_blank" class="text-brand hover:underline font-normal">github.com/dev-henen</a>
            <a href="https://linkedin.com/in/dev-henen" target="_blank" class="text-brand hover:underline font-normal">linkedin.com/in/dev-henen</a>
          </dd>
        </div>
      </dl>
    </div>

    <!-- prose -->
    <div class="md:col-span-2 space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
      <p>
        I've been building web applications for {numberOfWOrkYears}+ years, working across the full stack —
        from designing REST APIs and database schemas to building performant, accessible frontends. I ship
        independently, delivering systems from zero to production in fintech and crypto domains where
        correctness and reliability aren't optional.
      </p>
      <p>
        At <strong class="text-gray-900 dark:text-gray-100">Bit54/Monierate</strong>, I led the frontend of
        the Monierate Dashboard, upgraded the entire codebase to Svelte 5 + TypeScript + Vite (35% faster
        builds), then expanded into the backend to ship the full-stack Price Alert System solo — now serving
        1,000+ users. At <strong class="text-gray-900 dark:text-gray-100">Neona Synergy</strong>, I built
        11 admin modules for Spendin's fintech platform and improved dashboard performance by 60%.
      </p>
      <p>
        I work with Claude Code as part of my daily workflow — applying AI-assisted development in
        production to move faster without sacrificing code quality.
      </p>

      <div class="pt-3 border-t border-gray-100 dark:border-gray-700">
        <p class="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">Certifications</p>
        <ul class="space-y-2">
          <li class="flex gap-2.5">
            <span class="text-primary shrink-0 font-bold">▸</span>
            <span>Self-taught Engineer (2022 – Present) — 10+ production systems across fintech and crypto</span>
          </li>
          <li class="flex gap-2.5">
            <span class="text-primary shrink-0 font-bold">▸</span>
            <span>Completed <em>Claude Code in Action</em> — AI-assisted development applied in production</span>
          </li>
          <li class="flex gap-2.5">
            <span class="text-primary shrink-0 font-bold">▸</span>
            <span>Venture Tribes Frontend Development Internship Certification, 2024</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
