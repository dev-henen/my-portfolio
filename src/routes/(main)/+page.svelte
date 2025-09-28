<script lang="ts">
  export let data;
  const skills = data.skills;
  const projects = data.projects;
</script>

<!-- HERO -->
<section class="grid md:grid-cols-2 gap-12 items-center">
  <div class="space-y-6">
    <p class="inline-flex items-center gap-2 text-sm font-medium text-brand">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        viewBox="0 0 24 24"
        fill="currentColor"
        ><path d="M12 2a10 10 0 100 20 10 10 0 000-20z"></path></svg
      >
      Web developer
    </p>

    <h1 class="text-4xl md:text-5xl font-heading font-extrabold leading-tight">
      Hi, I'm <span
        style="background:linear-gradient(90deg,#6D28D9,#7C3AED);-webkit-background-clip:text;background-clip:text;color:transparent"
        class="whitespace-nowrap">Moses Henen</span
      > <br /> I build fast, accessible web apps
    </h1>

    <p class="text-gray-600 dark:text-gray-300 max-w-xl">
      Component-driven design, performance optimizations, and delightful UX. I'm
      skilled in leveraging various tools and databases to build robust,
      scalable, and efficient solutions.
    </p>

    <div class="flex flex-wrap gap-3">
      <a
        href="https://docs.google.com/document/d/1hsyyOWHXFghP2E0dAaPDbbrJ7U31AGG2O-S7w8Sh6ik/edit?usp=sharing"
        target="_blank"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-white shadow-sm hover:opacity-95 transition"
        >My CV</a
      >
      <a
        href="#contact"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
        >Contact</a
      >
    </div>

    <div class="mt-6 flex items-center gap-4">
      <!-- inline avatar (SVG) -->
      <div
        class="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-brand flex items-center justify-center text-white font-semibold text-lg shrink-0"
      >
        MH
      </div>
      <div>
        <div class="text-sm font-medium">Available upon request</div>
        <div class="text-xs text-gray-500 dark:text-gray-400">
          Based in Gboko — remote friendly
        </div>
      </div>
    </div>
  </div>

  <!-- Illustration (inline SVG) -->
  <div class="relative flex justify-center items-center">
    <div
      class="w-full max-w-md transform hover:scale-[1.01] transition card-shadow rounded-2xl overflow-hidden"
    >
      <!-- Simple device mockup made with SVG (always loads) -->
      <svg
        viewBox="0 0 800 520"
        xmlns="http://www.w3.org/2000/svg"
        class="w-full h-auto"
        aria-hidden
      >
        <defs>
          <linearGradient id="bg1" x1="0" x2="1">
            <stop offset="0" stop-color="#EDE9FE" />
            <stop offset="1" stop-color="#E9D5FF" />
          </linearGradient>
          <linearGradient id="bg2" x1="0" x2="1">
            <stop offset="0" stop-color="#fff" />
            <stop offset="1" stop-color="#f8fafc" />
          </linearGradient>
          <linearGradient id="accent" x1="0" x2="1">
            <stop offset="0" stop-color="#6D28D9" />
            <stop offset="1" stop-color="#4C1D95" />
          </linearGradient>
          <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="22" result="blur" />
            <feBlend in="SourceGraphic" in2="blur" mode="normal" />
          </filter>
        </defs>

        <!-- soft blob -->
        <g opacity="0.95">
          <circle
            cx="620"
            cy="120"
            r="160"
            fill="url(#bg1)"
            filter="url(#soft)"
          />
          <rect
            x="40"
            y="40"
            rx="24"
            ry="24"
            width="720"
            height="440"
            fill="url(#bg2)"
          />
        </g>

        <!-- device card -->
        <g transform="translate(70,80)">
          <rect
            x="0"
            y="0"
            rx="16"
            width="660"
            height="360"
            fill="#fff"
            stroke="#E6E7EE"
          />
          <!-- top nav -->
          <rect x="18" y="18" rx="8" width="180" height="22" fill="#F3F4F6" />
          <!-- content columns -->
          <rect x="18" y="60" rx="8" width="320" height="250" fill="#FAFAFB" />
          <rect x="354" y="60" rx="8" width="288" height="120" fill="#F8FAFC" />
          <rect
            x="354"
            y="196"
            rx="8"
            width="288"
            height="114"
            fill="#F8FAFC"
          />
          <!-- CTA -->
          <rect
            x="380"
            y="320"
            rx="10"
            width="120"
            height="36"
            fill="url(#accent)"
          />
        </g>
      </svg>
    </div>

    <!-- floating small card -->
    <div
      class="absolute -bottom-6 right-6 w-36 p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-md animate-floaty"
    >
      <div class="text-xs text-gray-500 dark:text-gray-400">Recent</div>
      <div class="mt-2 text-sm font-medium">{projects[0].title}</div>
    </div>
  </div>
</section>

<!-- PROJECTS -->
<section id="projects" class="mt-16">
  <div class="flex items-center justify-between">
    <h2 class="text-2xl md:text-3xl font-heading font-bold">
      Featured projects
    </h2>
    <a href="#" class="text-sm text-brand hover:underline">View all →</a>
  </div>
  <p class="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl">
    My latest projects and work experience.
  </p>

  <div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <!-- Project card -->
    {#each projects.slice(0, 3) as project}
      <article
        class="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden card-shadow hover:translate-y-1 transform transition flex flex-col justify-between"
      >
        <div
          class="w-full h-44 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 flex items-center justify-center"
        >
          {#if project.image}
            <img
              src={project.image}
              alt={project.title}
              class="w-[180px] h-[100px] object-cover"
            />
          {:else}
            <svg
              width="180"
              height="100"
              viewBox="0 0 180 100"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <rect width="180" height="100" rx="8" fill="url(#bg1)" />
              <text
                x="50%"
                y="54%"
                text-anchor="middle"
                fill="#6D28D9"
                font-family="Inter"
                font-weight="600"
                font-size="14">{project.title}</text
              >
            </svg>
          {/if}
        </div>
        <div class="p-4">
          <h3 class="font-semibold">{project.title}</h3>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">
            {project.description}
          </p>
          <div
            class="mt-4 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400"
          >
            <div class="flex gap-2 items-center">
              {#each project.tags as tag}
                <span
                  class="px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 text-xs"
                  >{tag}</span
                >
              {/each}
            </div>
            <div class="flex gap-3">
              {#if project.links.demo}
                <a
                  class="text-brand text-sm hover:underline"
                  href={project.links.demo}
                  target="_blank">Demo</a
                >
              {/if}
              {#if project.links.code}
                <a
                  class="text-brand text-sm hover:underline"
                  href={project.links.code}
                  target="_blank">Code</a
                >
              {/if}
            </div>
          </div>
        </div>
      </article>
    {/each}
  </div>
</section>

<!-- ABOUT -->
<section id="about" class="mt-16 grid md:grid-cols-3 gap-8 items-start">
  <div class="md:col-span-1">
    <h2 class="text-2xl font-heading font-bold">About me</h2>
    <p class="mt-2 text-gray-600 dark:text-gray-300">
      I'm Moses Henen, i build scalable interfaces and tools with a focus on
      performance, accessibility, and clean architecture, using diverse tools
      and databases for robust solutions.
    </p>

    <dl class="mt-6 space-y-3 text-sm text-gray-600 dark:text-gray-400">
      <div>
        <dt class="font-medium">Location</dt>
        <dd class="mt-0.5">Gboko, Benue, Nigeria (UTC+01:00)</dd>
      </div>
      <div>
        <dt class="font-medium">Available</dt>
        <dd class="mt-0.5">For work & Full-time Job</dd>
      </div>
      <div>
        <dt class="font-medium">Contact</dt>
        <dd class="mt-0.5">
          <a href="mailto:{data.myEmail}" class="text-brand hover:underline"
            >{data.myEmail}</a
          >
        </dd>
      </div>
    </dl>
  </div>

  <div
    class="md:col-span-2 prose max-w-none dark:prose-invert text-gray-700 dark:text-gray-300"
  >
    <p>
      I’ve been building web applications for {data.numberOfWOrkYears}+ years,
      focusing on efficiency, performance, and clean architecture. I quickly
      adapt to new technologies and deliver scalable, user-focused solutions.
    </p>

    <h3 class="mt-4">Recent highlights</h3>
    <ul class="list-disc ml-6">
      <li>
        Built and improved the admin dashboard for
        <a href="https://spendin.webflow.io/" target="_blank">Spendin</a>
        using <strong>React, Next.js, TypeScript,</strong> and
        <strong>Tailwind</strong>.
      </li>
      <li>
        Developed key products at
        <a href="https://monierate.com" target="_blank">Bit54/Monierate</a>,
        including the account system, API docs, price alert feature, and wallet
        system, all with <strong>SvelteKit, TypeScript,</strong> and
        <strong>Tailwind</strong>.
      </li>
      <li>
        Launched the
        <a href="https://benueinternationalmarathon.com" target="_blank">
          Benue International Marathon</a
        >
        registration site using
        <strong>Tailwind</strong> and <strong>PHP</strong>.
      </li>
      <li>
        Published the <a href="https://www.mfeatures24.com.ng/" target="_blank"
          >My Football News App</a
        >
        with
        <strong>PHP, HTML,</strong>, <strong>CSS</strong>, and a PWA version on
        play store.
      </li>
    </ul>
  </div>
</section>

<!-- SKILLS -->
<section id="skills" class="mt-16">
  <h2 class="text-2xl font-heading font-bold">Skills</h2>
  <p class="mt-2 text-gray-600 dark:text-gray-300">
    Technologies & tools I use frequently.
  </p>

  <div class="mt-6 flex flex-wrap gap-3">
    {#each skills as skill}
      <span
        class="px-3 py-1 rounded-md border border-gray-200 dark:border-gray-700 text-sm"
        >{skill}</span
      >
    {/each}
  </div>
</section>

<!-- CONTACT -->
<section id="contact" class="mt-16">
  <div
    class="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-6 shadow-md"
  >
    <div class="md:flex md:items-center md:justify-between">
      <div>
        <h2 class="text-2xl font-heading font-bold">Get in touch</h2>
        <p class="mt-2 text-gray-600 dark:text-gray-300">
          Interested in me? Send a short message and I'll reply.
        </p>
      </div>

      <div class="mt-4 md:mt-0 text-sm text-gray-500 dark:text-gray-400">
        Prefer email? <a
          href="mailto:{data.myEmail}"
          class="text-brand hover:underline">{data.myEmail}</a
        >
      </div>
    </div>

    <form
      class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
      on:submit={() => {
        alert("Demo form");
        return false;
      }}
    >
      <label class="flex flex-col">
        <span class="text-sm font-medium">Name</span>
        <input
          required
          type="text"
          placeholder="Your name"
          class="mt-1 px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-brand outline-none"
        />
      </label>

      <label class="flex flex-col">
        <span class="text-sm font-medium">Email</span>
        <input
          required
          type="email"
          placeholder="you@example.com"
          class="mt-1 px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-brand outline-none"
        />
      </label>

      <label class="sm:col-span-2 flex flex-col">
        <span class="text-sm font-medium">Message</span>
        <textarea
          required
          rows="5"
          placeholder="Tell me more about this..."
          class="mt-1 px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-brand outline-none"
        ></textarea>
      </label>

      <div class="sm:col-span-2 text-right">
        <button
          type="submit"
          class="bg-primary text-white px-5 py-2 rounded-md hover:opacity-95 transition cursor-pointer"
          >Send message</button
        >
      </div>
    </form>
  </div>
</section>
