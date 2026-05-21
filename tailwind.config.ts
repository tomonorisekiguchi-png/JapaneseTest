import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        jlpt: {
          n1: "#1a1a2e",
          n2: "#16213e",
          n3: "#0f3460",
          n4: "#533483",
          n5: "#e94560",
        },
      },
    },
  },
  plugins: [],
};
export default config;
