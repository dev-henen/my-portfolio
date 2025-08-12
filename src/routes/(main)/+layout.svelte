<div class="container mt-4 md:mt-8 bg-[url('/BackgroundTexture.svg')]">
  <div class="flex justify-between items-center">
    <span
      class="text-xl font-mono font-bold text-primary tracking-wider cursor-pointer"
    >
      <span class="text-white">&lt;</span>HenenDev<span class="text-white"
        >/&gt;</span
      >
    </span>

    <div class="hidden md:flex space-x-8 items-center">
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      <a
        href="/henendev-resume.pdf"
        class="button-secondary"
        target="_blank"
        rel="noopener noreferrer">Resume</a
      >
    </div>

    <div class="md:hidden">
      <button class="text-white focus:outline-none" aria-label="Toggle menu">
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
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
  </div>
</div>

<slot />
