<script lang="ts">
</script>

<div class="bg-[url('/BackgroundTexture.svg')]">
  <div
    class="container relative flex flex-col md:flex-row items-center justify-between"
  >
    <div class="md:w-3/5 relative">
      <div
        class="w-72 h-72 rounded-full bg-gradient-to-r from-[#385371] to-cyan-450 animate-[pulse_4s_ease-in-out_infinite] absolute -top-6 -left-6 blur-3xl opacity-20"
      ></div>

      <div class="text-primary mb-4 font-mono">Hello, my name is</div>
      <h1 class="text-5xl md:text-7xl font-bold mb-4">
        <span class="block text-white">Moses Henen</span>
        <span class="block text-gray-400 mt-2">Software Engineer</span>
      </h1>
      <p class="text-gray-300 max-w-xl mb-8">
        I build exceptional digital experiences with clean code and modern
        technologies. Specializing in full-stack development with a focus on
        performance and scalability.
      </p>
      <div class="flex space-x-4">
        <a href="#/work" class="button">
          View My Work
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 ml-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </a>
        <a href="#contact" class="button-secondary"> Contact Me </a>
      </div>
    </div>

    <div class="md:w-2/5 mt-12 md:mt-0 hidden md:block">
      <div class="relative w-80 h-80">
        <img
          class="scale-130 relative -mt-20 -ml-5"
          src="/subject.png"
          alt="Moses Henen"
        />
      </div>
    </div>
  </div>
</div>

<br />
<br />
<br />

<div class="container flex justify-center">
  <div class="animate-bounce">
    <span class="text-primary text-2xl cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
    </span>
  </div>
</div>

<section id="about">
  <div class="container px-6">
    <div class="flex flex-col md:flex-row items-center gap-16">
      <div class="md:w-2/5">
        <div class="relative">
          <div
            class="absolute -top-4 -left-4 w-full h-full border-2 border-primary rounded-lg"
          ></div>
          <img
            class="rounded-lg relative z-10"
            src="/IMG_9650.png"
            alt="professional software engineer working at desk with multiple screens showing code, side profile, dark office setting with green ambient lighting"
          />
        </div>
      </div>

      <div
        class="md:w-3/5"
      >
        <h2 class="text-3xl font-bold mb-2 flex items-center">
          <span class="text-green-450 font-mono mr-2">01.</span>
          About Me
        </h2>
        <div class="w-20 h-1 bg-green-450 mb-6"></div>

        <p class="text-gray-300 mb-4">
          Hi! I am a passionate Software Engineer with 3 years of experience in
          designing, developing, and managing web projects. Proficient in
          JavaScript, TypeScript (Node.js, Express, SvelteKit), PHP (Laravel),
          and HTML, CSS (Tailwind). Strong expertise in Object-Oriented
          Programming (OOP) and skilled in leveraging various tools and
          databases to build robust, scalable, and efficient solutions.
        </p>

        <div class="grid grid-cols-2 gap-4 mb-8 font-bold">
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 text-primary mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>

            <span>Full-Stack Development</span>
          </div>
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 text-primary mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>

            <span>Responsive Design</span>
          </div>
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 text-primary mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>

            <span>API Development</span>
          </div>
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 text-primary mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>

            <span>Database Architecture</span>
          </div>
        </div>

        <div class="w-full">
          <a
            href="/resume.pdf"
            class="button-secondary inline-flex items-center"
            rel="noreferrer"
            download
          >
            My Resume <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 text-primary ml-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
