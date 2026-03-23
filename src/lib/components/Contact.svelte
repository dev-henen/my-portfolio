<script lang="ts">
  export let myEmail: string;
</script>

<section id="contact" class="mt-24 mb-4">
  <p class="text-xs font-bold uppercase tracking-widest text-primary mb-2">Contact</p>
  <h2 class="text-3xl font-heading font-bold">Get in touch</h2>
  <p class="mt-1 text-gray-400 text-sm">Open to remote roles, contracts, and interesting collaborations.</p>

  <div class="mt-8 rounded-3xl border border-gray-200/50 dark:border-gray-700/40 p-8 card-shadow bg-white/85 dark:bg-gray-800/75">
    <div class="grid md:grid-cols-5 gap-10">

      <!-- left info -->
      <div class="md:col-span-2 space-y-5">
        <div>
          <p class="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">Email</p>
          <a href="mailto:{myEmail}" class="text-primary hover:underline font-semibold text-sm">{myEmail}</a>
        </div>
        <div>
          <p class="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">Phone</p>
          <p class="text-sm text-gray-600 dark:text-gray-300 font-semibold">+2348060085978</p>
        </div>
        <div>
          <p class="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">GitHub</p>
          <a href="https://github.com/dev-henen" target="_blank" class="text-primary hover:underline font-semibold text-sm">github.com/dev-henen</a>
        </div>
        <div>
          <p class="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">LinkedIn</p>
          <a href="https://linkedin.com/in/dev-henen" target="_blank" class="text-primary hover:underline font-semibold text-sm">linkedin.com/in/dev-henen</a>
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
          <span class="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Name</span>
          <input
            required
            type="text"
            placeholder="Your name"
            class="form-input px-4 py-2.5 rounded-xl border text-sm outline-none transition"
          />
        </label>

        <label class="flex flex-col gap-1">
          <span class="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Email</span>
          <input
            required
            type="email"
            placeholder="you@example.com"
            class="form-input px-4 py-2.5 rounded-xl border text-sm outline-none transition"
          />
        </label>

        <label class="sm:col-span-2 flex flex-col gap-1">
          <span class="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Message</span>
          <textarea
            required
            rows="5"
            placeholder="Tell me about the project or opportunity..."
            class="form-input px-4 py-2.5 rounded-xl border text-sm outline-none transition resize-none"
          ></textarea>
        </label>

        <div class="sm:col-span-2 flex justify-end">
          <button
            type="submit"
            class="send-btn px-7 py-2.5 rounded-full font-bold text-sm text-white transition hover:opacity-90 cursor-pointer"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  </div>
</section>

<style>
  .form-input {
    background: rgba(91, 124, 249, 0.05);
    border-color: rgba(91, 124, 249, 0.18);
    color: inherit;
  }

  .form-input::placeholder {
    color: #96a8d4;
  }

  .form-input:focus {
    border-color: rgba(91, 124, 249, 0.45);
    box-shadow: 0 0 0 3px rgba(91, 124, 249, 0.12);
  }

  :global(.dark) .form-input {
    background: rgba(8, 12, 28, 0.60);
    border-color: rgba(91, 124, 249, 0.15);
  }

  :global(.dark) .form-input:focus {
    border-color: rgba(91, 124, 249, 0.40);
    box-shadow: 0 0 0 3px rgba(91, 124, 249, 0.10);
  }

  .send-btn {
    background: linear-gradient(135deg, #3a5ef5 0%, #5b7cf9 60%, #7b9bff 100%);
    box-shadow: 0 6px 20px rgba(91, 124, 249, 0.38),
                inset 0 1px 0 rgba(255, 255, 255, 0.16);
  }
</style>
