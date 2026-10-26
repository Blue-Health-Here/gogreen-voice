import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" }, screens: { "2xl": "1240px" } },
    extend: {
      colors: {
        ink: "#0B2A22",
        forest: { DEFAULT: "#0F3D30", 900: "#082219", 800: "#0B2E24", 700: "#0F3D30", 600: "#165242" },
        leaf: { DEFAULT: "#1F7A55", 500: "#1F7A55", 400: "#2E9A6C", 300: "#5CBF92" },
        mint: { DEFAULT: "#BFEBD5", 100: "#E6F7EE", 200: "#BFEBD5", 300: "#9BE3C2" },
        lime: { DEFAULT: "#D8F36A", 300: "#E6F89C" },
        cream: { DEFAULT: "#F7F5EE", 200: "#EFEBDD", 300: "#E3DDC9" },
        coral: "#FF8A65",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      borderRadius: { "4xl": "2rem" },
      boxShadow: {
        card: "0 1px 0 rgba(11,42,34,.06), 0 12px 32px -12px rgba(11,42,34,.18)",
        glow: "0 0 0 1px rgba(216,243,106,.35), 0 20px 60px -20px rgba(216,243,106,.45)",
      },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        wave: { "0%,100%": { transform: "scaleY(.35)" }, "50%": { transform: "scaleY(1)" } },
        rise: { from: { opacity: "0", transform: "translateY(8px)" }, to: { opacity: "1", transform: "none" } },
        drift: { "0%,100%": { transform: "translate(0,0) scale(1)" }, "50%": { transform: "translate(-40px,30px) scale(1.15)" } },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        wave: "wave 1.1s ease-in-out infinite",
        rise: "rise .45s ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;
