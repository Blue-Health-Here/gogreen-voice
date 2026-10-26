import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" }, screens: { "2xl": "1240px" } },
    extend: {
      // Greenline brand palette (greenlinepriorauth.com). Token names kept so every page picks it up.
      colors: {
        ink: "#121212",
        forest: { DEFAULT: "#033121", 900: "#02261A", 800: "#054C2A", 700: "#033121", 600: "#0E682C" },
        leaf: { DEFAULT: "#279149", 500: "#279149", 400: "#1FA463", 300: "#79E39D" },
        mint: { DEFAULT: "#C0F2EB", 100: "#F0FDF4", 200: "#C0F2EB", 300: "#79E39D" },
        lime: { DEFAULT: "#79E39D", 300: "#C0F2EB" },
        cream: { DEFAULT: "#FFFFFF", 200: "#F2F3F2", 300: "#EAEAEA" },
        coral: "#FD7C0F",
        gl: { green: "#17C64F", medium: "#279149", deep: "#0E682C", teal: "#51CBC6", mint: "#3BD09A", gray: "#7D8386", border: "#D3DCE5", navy: "#1E0525", purple: "#B46FB3", pink: "#DD5E79", orange: "#FD7C0F", yellow: "#FBB726", blue: "#0659F7" },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      borderRadius: { "4xl": "2rem" },
      boxShadow: {
        card: "0 1px 2px rgba(18,18,18,.04), 0 12px 32px -16px rgba(18,18,18,.12)",
        glow: "0 0 0 1px rgba(31,164,99,.25), 0 20px 50px -20px rgba(31,164,99,.45)",
      },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        wave: { "0%,100%": { transform: "scaleY(.35)" }, "50%": { transform: "scaleY(1)" } },
        rise: { from: { opacity: "0", transform: "translateY(8px)" }, to: { opacity: "1", transform: "none" } },
        sweep: { "0%": { opacity: "0", backgroundPosition: "220% 50%" }, "20%,80%": { opacity: "1" }, "100%": { opacity: "0", backgroundPosition: "-120% 50%" } },
        drift: { "0%,100%": { transform: "translate(0,0) scale(1)" }, "50%": { transform: "translate(-40px,30px) scale(1.15)" } },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        wave: "wave 1.1s ease-in-out infinite",
        rise: "rise .45s ease-out both",
        sweep: "sweep 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
