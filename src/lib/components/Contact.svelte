<script lang="ts">
  export let myEmail: string;
</script>

<section id="contact" class="mt-24 mb-4">
  <p class="text-xs font-bold uppercase tracking-widest text-primary mb-2">Contact</p>
  <h2 class="text-3xl font-heading font-bold">Get in touch</h2>
  <p class="mt-1 text-gray-500 dark:text-gray-400 text-sm">Open to remote roles, contracts, and interesting collaborations.</p>

  <div class="mt-8 bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700 rounded-2xl p-8 card-shadow">
    <div class="grid md:grid-cols-5 gap-10">

      <!-- left info -->
      <div class="md:col-span-2 space-y-5">
        <div>
          <p class="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">Email</p>
          <a href="mailto:{myEmail}" class="text-brand hover:underline font-normal text-sm">{myEmail}</a>
        </div>
        <div>
          <p class="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">Phone</p>
          <p class="text-sm text-gray-700 dark:text-gray-300">+2348060085978</p>
        </div>
        <div>
          <p class="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">GitHub</p>
          <a href="https://github.com/dev-henen" target="_blank" class="text-brand hover:underline font-normal text-sm">github.com/dev-henen</a>
        </div>
        <div>
          <p class="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">LinkedIn</p>
          <a href="https://linkedin.com/in/dev-henen" target="_blank" class="text-brand hover:underline font-normal text-sm">linkedin.com/in/dev-henen</a>
        </div>
        <p class="text-xs text-gray-400 dark:text-gray-500 leading-relaxed pt-2">
          Usually respond within 24 hours. For urgent inquiries, email directly.
        </p>
      </div>

      <!-- right form -->
      <form
        class="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4"
        on:submit|preventDefault={() => alert("Demo form — connect a real backend to enable this.")}
      >
        <label class="flex flex-col gap-1">
          <span class="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Name</span>
          <input
            required
            type="text"
            placeholder="Your name"
            class="px-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-900/60 text-sm focus:ring-2 focus:ring-primary/30 outline-none transition"
          />
        </label>

        <label class="flex flex-col gap-1">
          <span class="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Email</span>
          <input
            required
            type="email"
            placeholder="you@example.com"
            class="px-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-900/60 text-sm focus:ring-2 focus:ring-primary/30 outline-none transition"
          />
        </label>

        <label class="sm:col-span-2 flex flex-col gap-1">
          <span class="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Message</span>
          <textarea
            required
            rows="5"
            placeholder="Tell me about the project or opportunity..."
            class="px-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-900/60 text-sm focus:ring-2 focus:ring-primary/30 outline-none transition resize-none"
          ></textarea>
        </label>

        <div class="sm:col-span-2 flex justify-end">
          <button
            type="submit"
            class="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition shadow-lg shadow-purple-200 dark:shadow-purple-900/30 cursor-pointer"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  </div>
</section>
