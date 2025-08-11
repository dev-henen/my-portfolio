import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#4ADE80",
        secondary: "#22C55E",
        background: "#f9fafb",
      },
    },
  },
  plugins: [],
} satisfies Config;
